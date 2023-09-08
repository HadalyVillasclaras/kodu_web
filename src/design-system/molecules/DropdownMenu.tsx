import { useState, useRef, useEffect } from 'react';
import styles from './DropdownMenu.module.scss';
import { Colors } from '../types';

export type DropdownRenderData = {
  id: string,
  label: string
}
type DropdownMenuProps = {
  label: string;
  color: Colors;
  data: DropdownRenderData[]
  onSelectChange?: (selectedOption: string) => void;
};

export const DropdownMenu = ({ label, onSelectChange, color, data }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const handleOptionClick = (id: string) => {
    setSelectedValue(id);
    setIsOpen(false);
    if (onSelectChange) {
      onSelectChange(id);
    }
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

  const displayedLabel = selectedValue 
    ? data.find(q => q.id === selectedValue)?.label
    : label;

  return (
    <div ref={ref} className={styles["dropdown"]} aria-multiselectable="false" aria-labelledby='dropdown-label'>
      <button 
        type="button"
        onClick={() => setIsOpen(!isOpen)} 
        className={`${styles["dropdown__button"]} ${styles[`dropdown__button--${color}`]}`} 
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-owns="dropdown-listbox"
      >
        <span>{displayedLabel}</span><span>+</span>
         
      </button>
      {isOpen && (
        <ul 
          className={`${styles["dropdown__list"]} ${isOpen ? styles["dropdown__list-open"] : ""}`} 
          role="listbox"  
          id="dropdown-listbox" 
        >
        {data.map((item, index) => (
           <li key={index} role="option" >
           <button 
             onClick={() => handleOptionClick(item.id)} 
             className={styles["dropdown__option"]} tabIndex={isOpen ? 0 : -1}
             aria-selected={selectedValue === item.id}
           >
             {item.label}
           </button>
         </li>
        ))}
      </ul>
      )}
    </div>
  )
}