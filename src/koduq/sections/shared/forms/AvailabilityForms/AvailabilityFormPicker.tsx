import { CustomRadioInput } from '../../../../../design-system/components/atoms/CustomRadioInput';
import styles from './AvailabilityFormPicker.module.scss';

type AvailabilityFormPickerProps = {
  currentChoice: 'destination' | 'quarter';
  setChoice: (choice: 'destination' | 'quarter') => void;
};

export const AvailabilityFormPicker = ({ currentChoice, setChoice }: AvailabilityFormPickerProps) => {
  return (
    <div className={`${styles[`avlbty__form-picker`]}`}>
      <CustomRadioInput
        label="By Destination"
        value="destination"
        currentChoice={currentChoice}
        onChange={(value) => setChoice(value as 'destination' | 'quarter')}
      />
      <CustomRadioInput
        label="By Quarter"
        value="quarter"
        currentChoice={currentChoice}
        onChange={(value) => setChoice(value as 'destination' | 'quarter')}
      />
    </div>
  )
}