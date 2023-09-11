import styles from './AvailabilityFormPicker.module.scss';

type AvailabilityFormPickerProps = {
  currentChoice: 'destination' | 'quarter';
  setChoice: (choice: 'destination' | 'quarter') => void;
};

export const AvailabilityFormPicker = ({currentChoice, setChoice}: AvailabilityFormPickerProps) => {
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