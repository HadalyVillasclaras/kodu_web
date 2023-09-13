import { CustomRadioInput } from '../../atoms/CustomRadioInput';
import styles from './AvailabilityFormPicker.module.scss';

type AvailabilityFormPickerProps = {
  currentChoice: 'destination' | 'quarter';
  setChoice: (choice: string) => void;
};

export const AvailabilityFormPicker = ({ currentChoice, setChoice }: AvailabilityFormPickerProps) => {
  return (
    <div className={`${styles[`avlbty__form-picker`]}`}>
      <CustomRadioInput
        label="By Destination"
        value="destination"
        currentChoice={currentChoice}
        onChange={setChoice}
      />
      <CustomRadioInput
        label="By Quarter"
        value="quarter"
        currentChoice={currentChoice}
        onChange={setChoice}
      />
    </div>
  )
}