import { Colors } from '../../../design-system/tokens'
import { useState, useRef } from 'react';
import { Button, Logo } from '../../../design-system/components/atoms';
import { DropdownMain, DropdownRef } from '../../../design-system/components/molecules/DropdownMain';
import { AvailabilityDdSection } from './MainDropdownSections/AvailabilityDdSection';
import { ContactDdSection } from './MainDropdownSections/ContactDdSection';
import { AvailabilityFormPicker } from '../../../design-system/components/molecules/AvailabilityForms/AvailabilityFormPicker';
import styles from './Frieze.module.scss';

type Props = {
  color?: Colors;
  hasLogo: boolean;
}

export const Frieze = ({ color = "brown", hasLogo = false }: Props) => {
  const [choice, setChoice] = useState<'destination' | 'quarter'>('destination');
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownType, setDropdownType] = useState<'availability' | 'contact'>()
  const dropdownRef = useRef<DropdownRef>(null);

  function handleAvlbtyBtn() {
    setIsOpen(!isOpen);
    dropdownRef.current?.openDropdown();
    setDropdownType('availability');
  }

  function handleContactBtn() {
    setIsOpen(!isOpen);
    dropdownRef.current?.openDropdown();
    setDropdownType('contact');
  }
  function handleCloseDd() {
    dropdownRef.current?.closeDropdown();
  }

  return (
    <>
      <div className={`${styles[`frieze`]} ${styles[`frieze__bg--${color}`]}`}>
        <span>
          { hasLogo && <Logo color='cream' size='6rem'/> }
        </span>
        <span>
          <Button color='cream' variant='header' text='Contact' onClick={handleContactBtn} />
          <Button color='cream' variant='header' text='Availability' onClick={handleAvlbtyBtn} />
        </span>
      </div>
      {
        dropdownType === 'contact'
          ?
          <DropdownMain title='Contact' color='green' ref={dropdownRef}>
            <ContactDdSection />
          </DropdownMain>
          :
          <DropdownMain title='Check availability' color='brown' ref={dropdownRef} >
            <AvailabilityFormPicker currentChoice={choice} setChoice={setChoice} />
            <AvailabilityDdSection closeDropdown={handleCloseDd} formChoice={choice} />
          </DropdownMain>
      }
    </>
  )
}