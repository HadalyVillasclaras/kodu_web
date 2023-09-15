import React, {  useState } from 'react'
import { DropdownList } from "../";
import quartersData from "../../../../koduq/core/data/AvailabilityQuarters.json"
import { useAvailability } from "../../../../koduq/hooks/useAvailability";
import { Button, Heading } from "../../atoms";
import { Quarter } from "../../../../koduq/core/common/quarters/domain/Quarter";
import styles from './AvailabilityForm.module.scss';
import { DropdownRenderData } from '../DropdownList';
import { Destination } from '../../../../koduq/core/destination/domain/Destination';

export type QuarterAvailability = {
  quarter: Quarter;
  availableDestinations: Destination[]
}

type AvailabilityFormProps = {
  isSubmited: boolean;
  setIsSelected:(x: boolean) => void;
  setIsSubmited:(x: boolean) => void;
  setQuarterPreview: (quarter: Quarter) => void;
  setQuarter: (quarterData: QuarterAvailability | null) => void;
};

type FormData = {
  name: string;
  label: string;
  dropdownLabel: string;
  dropdownData: DropdownRenderData[];
  dropDownOnHoverOption: (id: string, label: string) => void;
}

export const AvailabilityQuarterForm = ({ setIsSelected, isSubmited, setIsSubmited, setQuarterPreview, setQuarter }: AvailabilityFormProps) => {
  const [selectedQuarter, setSelectedQuarter] = useState<Quarter | null>(null);
  const { checkAvailabilityByQuarter } = useAvailability();
  const [showError, setShowError] = useState<boolean>(false);

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowError(false);

    if (!selectedQuarter && !isSubmited) {
      setShowError(true);
      return;
    }
    setIsSelected(false);

    if (selectedQuarter) {
      try {
        const avlbDestinations = checkAvailabilityByQuarter(selectedQuarter.id);
        setQuarter({
          quarter: selectedQuarter,
          availableDestinations: avlbDestinations
        });
        setIsSubmited(true);
      } catch (error) {
        setQuarter(null);
      }
      setSelectedQuarter(null);
    }
  }

  const handleOnSelectOption = (optionData: DropdownRenderData) => {
    setShowError(false);
    setSelectedQuarter(optionData);
    setIsSelected(true);
    setIsSubmited(false);
  }

  const handleOnHoverOption = (id: string, label: string) => {
    setIsSelected(false);
    setIsSubmited(false);
    console.log(id);
    console.log(label);

    setQuarterPreview({
      id: id,
      label
    })
  }

  const quarterFormData: FormData = {
    name: "quarter",
    label: 'Please, select the yearly quarter that better fits your needs',
    dropdownLabel: "Select a quarter",
    dropdownData: quartersData,
    dropDownOnHoverOption: handleOnHoverOption
  }

  return (
    <>
      {quarterFormData &&
        <form className={`${styles[`avlblty-form`]}`} onSubmit={handleOnSubmit}>
          <Heading id='form-title' as="h4" color="green">Check by quarter</Heading>
          <fieldset>
            <label id="dropdown-label">{quarterFormData.label}</label>
            <DropdownList
              label={quarterFormData.dropdownLabel}
              onSelectChange={(selected) => handleOnSelectOption(selected)}
              onHoverOption={(id, label) => quarterFormData?.dropDownOnHoverOption(id, label)}
              color="green"
              data={quarterFormData.dropdownData}
            />
          </fieldset>
          <Button type='submit' text='Check' />
          {
            showError && <span>Please, select an option before check</span>
          }
        </form>
      }
    </>
  );
}