import styles from './FormPicker.module.scss';

type FormPickerProps = {
  currentChoice: 'destination' | 'quarter';
  setChoice: (choice: 'destination' | 'quarter') => void;
};

export const FormPicker = ({currentChoice, setChoice}: FormPickerProps) => {
  return (
    <div className={`${styles[`avlbty__form-picker`]}`}>
      <label>
        <input
          type="radio"
          value="destination"
          checked={currentChoice === 'destination'}
          onChange={() => setChoice('destination')}
        />
        By Destination
      </label>
      <label>
        <input
          type="radio"
          value="quarter"
          checked={currentChoice === 'quarter'}
          onChange={() => setChoice('quarter')}
        />
        By Quarter
      </label>
    </div>
  )
}