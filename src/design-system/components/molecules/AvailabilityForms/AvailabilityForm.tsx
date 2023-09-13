import React, { useEffect, useState } from 'react'
import { DropdownList } from "../";
import quartersData from "../../../../koduq/core/data/AvailabilityQuarters.json"
import destinations from "../../../../koduq/core/data/Destinations.json"
import { useAvailability } from "../../../../koduq/hooks/useAvailability";
import { Button, Heading } from "../../atoms";
import { Quarter } from "../../../../koduq/core/common/quarters/domain/Quarter";
import styles from './AvailabilityForm.module.scss';
import { DropdownRenderData } from '../DropdownList';
import { getDestinationById } from '../../../../koduq/core/destination/application/getDestinationById';
import { Destination } from '../../../../koduq/core/destination/domain/Destination';

const destinationData = destinations.map(dest => ({
  id: dest.id.toString(),
  label: dest.name,
}));

export type QuarterAvailability = {
  quarter: Quarter;
  availableDestinations: Destination[]
}

type AvailabilityFormProps = {
  formType: 'destination' | 'quarter';
  setDestinationPreview: (destinationPrev: any) => void;
  setQuarterPreview: (quarter: Quarter) => void;
  setDestination: (destination: Destination | null) => void;
  setQuarter: (quarterData: QuarterAvailability | null) => void;
};

type FormData = {
  name: "quarter" | "destination";
  label: string;
  dropdownLabel: string;
  dropdownData: DropdownRenderData[];
  dropDownOnHoverOption?: (id: string, label: string) => void;
}

export const AvailabilityForm = ({ formType, setDestinationPreview, setQuarterPreview, setDestination, setQuarter }: AvailabilityFormProps) => {
  const [formTypeData, setFormtypeData] = useState<FormData | null>(null);

  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [selectedQuarter, setSelectedQuarter] = useState<Quarter | null>(null);

  const { checkAvailabilityByDestination, checkAvailabilityByQuarter } = useAvailability();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (selectedQuarter) {
      const avlbDestinations = checkAvailabilityByQuarter(selectedQuarter.id);
      setQuarter({
        quarter: selectedQuarter,
        availableDestinations: avlbDestinations
      });
      setDestination(null);
    }

    if (selectedDestination) {
      const avlbQuarters: Quarter[] = checkAvailabilityByDestination(selectedDestination.id);
      setDestination({
        ...selectedDestination,
        availability: avlbQuarters
      });
      setQuarter(null);
    }
  }

  const handleSelectedOption = (optionData: DropdownRenderData) => {
    if (formType === 'destination') {
      if (optionData.id) {
        const destination: Destination | undefined = getDestinationById(optionData.id)
        if (destination) {
          setSelectedDestination(destination);
          setSelectedQuarter(null);
          setDestination(null);
        }
      }
    } else if (formType === 'quarter') {
      setSelectedQuarter(optionData);
      setSelectedDestination(null);
      setQuarter(null);
    }
  }

  const handleOnHoverDestination = (destinationId: string, label: string) => {
    if (formType === 'destination') {
      if (destinationId) {
        const destination = getDestinationById(destinationId)
        if (destination) {
          setDestinationPreview(
            {
              name: destination.name,
              location: destination.location,
              img: destination.images[0],
            }
          )
        }
      }
    }


  }
  const handleOnHoverQuarter = (quarterId: string, label: string) => {
    console.log(quarterId);
    console.log(quarterId);

    if (formType === 'quarter') {
      setQuarterPreview({
        id: quarterId,
        label
      })
    }
  }

  const setFormDataByType = (formType: "quarter" | "destination") => {
    let newFormData: FormData | null = null;
    if (formType === 'quarter') {
      newFormData = {
        name: "quarter",
        label: 'Please, select the yearly quarter that better fits your needs',
        dropdownLabel: "Select a quarter",
        dropdownData: quartersData,
        dropDownOnHoverOption: handleOnHoverQuarter
      }
    } else if (formType === 'destination') {
      newFormData = {
        name: "destination",
        label: 'Please, select the destination you prefer',
        dropdownLabel: "Select a destination",
        dropdownData: destinationData,
        dropDownOnHoverOption: handleOnHoverDestination
      }
    }
    setFormtypeData(newFormData);
  }

  useEffect(() => {
    setFormDataByType(formType);
    setDestinationPreview('');
    setDestination(null);
    setQuarter(null)
  }, [formType]);

  return (
    <>
      {formTypeData &&
        <form className={`${styles[`avlblty-form`]}`} onSubmit={handleSubmit}>
          <Heading id='form-title' as="h4" color="green">Check by {formTypeData.name}</Heading>
          <fieldset>
            <label id="dropdown-label">{formTypeData.label}</label>
            <DropdownList
              label={formTypeData.dropdownLabel}
              onSelectChange={(selected) => handleSelectedOption(selected)}
              onHoverOption={(id, label) => formTypeData?.dropDownOnHoverOption && formTypeData?.dropDownOnHoverOption(id, label)}
              color="green"
              data={formTypeData.dropdownData}
            />
          </fieldset>
          <Button type='submit' text='Check' />
        </form>
      }
    </>
  );
}