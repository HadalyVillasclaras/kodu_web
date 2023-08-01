import { useState, useRef, useEffect } from 'react';
import styles from './DropdownList.module.scss';

type Colors = "cream" | "green" | "brown";

type DropdownListProps = {
  options: Array<string>;
  label: string;
  color: Colors;
  onSelectChange?: (selectedOption: string) => void;
};

export const DropdownList = ({ options, label, color, onSelectChange }: DropdownListProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    // onSelectChange(option);
  };

  const closeOnClickOutside = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeOnClickOutside);
    return () => {
      document.removeEventListener("mousedown", closeOnClickOutside);
    };
  }, []);

  return (
    <div ref={ref} className={styles["dropdown"]}>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className={`${styles["dropdown__button"]} ${styles[`dropdown__button-${color}`]}`} 
        aria-haspopup="listbox"
        aria-expanded={isOpen}>
        {selectedOption || label }
      </button>
      {isOpen && (
        <ul className={`${styles["dropdown__list"]} ${isOpen ? styles["dropdown__list-open"] : ""}`} role="listbox">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)} className={styles["dropdown__option"]} role="option" tabIndex={0}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
