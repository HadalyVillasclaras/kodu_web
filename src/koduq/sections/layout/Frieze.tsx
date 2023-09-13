import { Colors } from '../../../design-system/tokens'
import { useState, useRef } from 'react';
import { Button } from '../../../design-system/components/atoms';
import { DropdownMain, DropdownRef } from '../../../design-system/components/molecules/DropdownMain';
import { AvailabilityDdSection } from './MainDropdownSections/AvailabilityDdSection';
import { ContactDdSection } from './MainDropdownSections/ContactDdSection';
import { AvailabilityFormPicker } from '../../../design-system/components/molecules/AvailabilityForms/AvailabilityFormPicker';
import styles from './Frieze.module.scss';

type Props = {
  color?: Colors;
}

export const Frieze = ({ color = "brown" }: Props) => {
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
      <div className={`${styles[`frieze`]} ${styles[`frieze__bg--${color}`]}`} style={{ position: isOpen ? 'fixed' : 'absolute' }}>
        <Button color='cream' variant='default' text='Contact' onClick={handleContactBtn} />
        <Button color='cream' variant='default' text='Availability' onClick={handleAvlbtyBtn} />
      </div>
      {
        dropdownType === 'contact'
          ?
          <DropdownMain title='Contact' color='green' ref={dropdownRef}>
            <ContactDdSection/>
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