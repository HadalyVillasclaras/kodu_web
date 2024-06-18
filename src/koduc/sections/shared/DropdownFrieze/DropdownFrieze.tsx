import { type Colors } from '../../../../design-system/tokens';
import { useState, useRef } from 'react';
import { Button, Logo, Frieze } from '../../../../design-system/components/atoms';
import { DropdownMain, type DropdownRef } from '../../../../design-system/components/molecules/DropdownMain';
import { AvailabilityFormPicker } from '../forms/AvailabilityForms/AvailabilityFormPicker';
import { ContactDdSection } from './DropdownSections/ContactDdSection';
import { AvailabilityDdSection } from './DropdownSections/AvailabilityDdSection';
import styles from './DropdownFrieze.module.scss';

interface Props {
  color?: Colors
  hasLogo: boolean
}

export const DropdownFrieze = ({ color = 'brown', hasLogo = false }: Props) => {
  const [choice, setChoice] = useState<'destination' | 'quarter'>('destination');
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownType, setDropdownType] = useState<'availability' | 'contact'>();
  const dropdownRef = useRef<DropdownRef>(null);

  function handleAvlbtyBtn () {
    setIsOpen(!isOpen);
    dropdownRef.current?.openDropdown();
    setDropdownType('availability');
  }

  function handleContactBtn () {
    setIsOpen(!isOpen);
    dropdownRef.current?.openDropdown();
    setDropdownType('contact');
  }

  function handleCloseDropdown () {
    dropdownRef.current?.closeDropdown();
  }

  return (
    <>
      <Frieze color={color}>
        <span className={styles['frieze-logo']}>
          {hasLogo && <Logo color='cream' size='6rem' />}
        </span>
        <span className={styles['frieze-btns']}>
          <Button color='cream' variant='header' text='Contact' onClick={handleContactBtn} />
          <Button color='cream' variant='header' text='Availability' onClick={handleAvlbtyBtn} />
        </span>
      </Frieze>
      {
        dropdownType === 'contact'
          ? <DropdownMain title='Contact' color='green' ref={dropdownRef}>
            <ContactDdSection />
          </DropdownMain>
          : <DropdownMain title='Check availability' color='brown' ref={dropdownRef} >
            <AvailabilityFormPicker currentChoice={choice} setChoice={setChoice} />
            <AvailabilityDdSection closeDropdown={handleCloseDropdown} formChoice={choice} />
          </DropdownMain>
      }
    </>
  );
};
