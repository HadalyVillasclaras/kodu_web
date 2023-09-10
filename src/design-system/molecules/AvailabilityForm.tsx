import { DropdownMenu } from ".";
import quartersData from "../../core/data/AvailabilityQuarters.json"
import destinationData from "../../core/data/Destinations.json"
import React, { useEffect, useState } from 'react'
import { useAvailability } from "../../hooks/useAvailability";
import { Button, Heading } from "../atoms";
import { Quarter } from "../../core/common/quarters/domain/Quarter";
import styles from './AvailabilityForm.module.scss';

const destinations = destinationData.map(dest => ({
  id: dest.id.toString(),
  label: dest.name,
}));

type AvailabilityFormProps = {
  currentChoice: 'destination' | 'quarter';
};

type DropdownRenderData = {
  id: string;
  label: string;
}

type FormData = {
  label: string;
  dropdownLabel: string;
  dropdownData: DropdownRenderData[];
}

export const AvailabilityForm = ({ currentChoice }: AvailabilityFormProps) => {
  const [formData, setFormData] = useState<FormData | null>(null);
  const [selectedOption, setSelectedOption] = useState<DropdownRenderData>(null!);


  const [availableDestinations, setAvailableDestinations] = useState<string[] | undefined>();
  const [availableDQuarters, setAvailableDQuarters] = useState<Quarter[] | undefined>();

  const { checkAvailabilityByDestination, checkAvailabilityByQuarter } = useAvailability();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (currentChoice === 'quarter') {
      const avlbDestinations = checkAvailabilityByQuarter(selectedOption.id);
      console.log("Destinations available in", selectedOption.id, ":", avlbDestinations);
      setAvailableDestinations(avlbDestinations);
    }

    // if (selectedDestination) {
    //   const quarters = checkAvailabilityByDestination(selectedDestination);
    //   setSubmitted(true)
    //   setAvailableDQuarters(quarters)
    //   console.log("Quarters available for", selectedDestination, ":", quarters);
    // }
  }

  useEffect(() => {
    let newFormData: FormData | null = null;
    if (currentChoice === 'quarter') {
      newFormData = {
        label: 'Please, select the yearly quarter that better fits your needs',
        dropdownLabel: "Select a quarter",
        dropdownData: quartersData,
      }
    } else if (currentChoice === 'destination') {
      newFormData = {
        label: 'Please, select the destination you prefer',
        dropdownLabel: "Select a destination",
        dropdownData: destinations,
      }
    }
    setFormData(newFormData);
  }, [currentChoice]);

  return (
    <>
      {formData  &&
        <form className={`${styles[`avlblty-form`]}`} onSubmit={handleSubmit}>
          <Heading id='form-title' as="h4" color="green">Check by {currentChoice}</Heading>
          <fieldset>
            <label id="dropdown-label">{formData.label}</label>
            <DropdownMenu
              label={formData.dropdownLabel}
              onSelectChange={ (selected) => setSelectedOption(selected)}
              color="green"
              data={formData.dropdownData}
            />
          </fieldset>
          <Button type='submit' text='Check' />
        </form>
      }
    </>
  );
}