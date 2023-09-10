import { Colors } from '../../design-system/types'
import styles from './Frieze.module.scss';
import { useState, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { AvailabilityForm } from '../../design-system/molecules/AvailabilityForm';
import { Button, Heading } from '../../design-system/atoms';
import { FormPicker } from '../../design-system/molecules/AvailabilityForms/FormPicker';
import { DropdownSection } from '../../design-system/molecules/DropdownSection';
import { DropdownContact } from './MainDropdown/DropdownContact';
import { DropdownAvailability } from './MainDropdown/DropdownAvailability';
type Props = {
  color?: Colors;
}

export const Frieze = ({ color = "brown" }: Props) => {
  const [choice, setChoice] = useState<'destination' | 'quarter'>('destination');
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownType, setDropdownType] = useState<'availability' | 'contact'>()
  const dropdownRef = useRef(null);

  function handleAvlbtyBtn() {
    setIsOpen(!isOpen);
    dropdownRef.current?.toggleMenu();
    setDropdownType('availability');
  }

  function handleContactBtn() {
    setIsOpen(!isOpen);
    dropdownRef.current?.toggleMenu();
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
          ? <DropdownSection title='Contact' color='green' ref={dropdownRef} >
            <DropdownContact />
          </DropdownSection>
          : <DropdownSection title='Check availability' color='brown' ref={dropdownRef} >
            <FormPicker currentChoice={choice} setChoice={setChoice} />
            <DropdownAvailability choice={choice}/>
          </DropdownSection>
      }
    </>
  )
}