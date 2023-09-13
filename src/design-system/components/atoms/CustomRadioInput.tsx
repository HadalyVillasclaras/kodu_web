import styles from './CustomRadioInput.module.scss';

type CustomRadioInputProps = {
  label: string;
  value: string;
  currentChoice: string;
  onChange: (choice: string) => void;
};

export const CustomRadioInput = ({ label, value, currentChoice, onChange }: CustomRadioInputProps) => {
  return (
    <label className={styles.customRadio}>
      <input
        type="radio"
        value={value}
        checked={currentChoice === value}
        onChange={() => onChange(value)}
      />
      <span></span>
      {label}
    </label>
  );
};