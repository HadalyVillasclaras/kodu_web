import { useState, useRef, useEffect } from 'react';
import styles from './DropdownList.module.scss';
import { Colors } from '../../tokens';
import { Icon } from '../atoms';

export type DropdownRenderData = {
  id: string,
  label: string
}
type DropdownListProps = {
  label: string;
  color: Colors;
  data: DropdownRenderData[]
  onSelectChange?: (selectedOption: DropdownRenderData) => void;
  onHoverOption?: (id: string, label: string) => void;
};

export const DropdownList = ({ label, onSelectChange, onHoverOption, color='green', data }: DropdownListProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<DropdownRenderData | null>(null);
  const [displayedLabel, setDisplayedLabel] = useState<string>();
  const ref = useRef<HTMLDivElement>(null);

  const handleOptionClick = (event: any, id: string, label: string) => {
    event.preventDefault();
    setSelectedValue({
      id: id,
      label: label
    });

    setDisplayedLabel(label);
    setIsOpen(false);

    if (onSelectChange) {
      onSelectChange({
        id: id,
        label: label
      });
    }
  };

  const handleOnMouseOver = (id: string, label: string) => {
    onHoverOption && onHoverOption(id, label);
  }

  const closeOnClickOutside = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    setDisplayedLabel(label)
  }, [label])

  useEffect(() => {
    document.addEventListener("mousedown", closeOnClickOutside);
    return () => {
    document.removeEventListener("mousedown", closeOnClickOutside);
    };
  }, []);

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
        <span>{displayedLabel}</span>
        <span><Icon icon='plus' color='green' size='s'/></span>
      </button>
        <ul
          className={`${styles["dropdown__list"]} ${isOpen ? styles["dropdown__list-open"] : ""}`}
          role="listbox"
          id="dropdown-listbox"
        >
          {data.map((item, index) => (
            <li key={index} role="option" >
              <button
                onClick={(e) => handleOptionClick(e, item.id, item.label)}
                onMouseOver={() => handleOnMouseOver(item.id, item.label)}
                className={styles["dropdown__option"]} tabIndex={isOpen ? 0 : -1}
                aria-selected={selectedValue?.id === item.id}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
    </div>
  )
}