import { Colors } from '../../design-system/types'
import { useState, useRef } from 'react';
import { Button } from '../../design-system/atoms';
import { DropdownMain, DropdownRef } from '../../design-system/molecules/DropdownMain';
import { AvailabilityDdSection } from './MainDropdownSections/AvailabilityDdSection';
import { ContactDdSection } from './MainDropdownSections/ContactDdSection';
import { AvailabilityFormPicker } from '../../design-system/molecules/AvailabilityForms/AvailabilityFormPicker';
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

  return (
    <>
      <div className={`${styles[`frieze`]} ${styles[`frieze__bg--${color}`]}`} style={{ position: isOpen ? 'fixed' : 'relative' }}>
        <Button color='cream' variant='underline' text='Contact' onClick={handleContactBtn} />
        <Button color='cream' variant='underline' text='Availability' onClick={handleAvlbtyBtn} />
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
            <AvailabilityDdSection formChoice={choice} />
          </DropdownMain>
      }
    </>
  )
}