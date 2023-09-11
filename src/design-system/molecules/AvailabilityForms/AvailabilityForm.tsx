import React, { useEffect, useState } from 'react'
import { DropdownList } from "../";
import quartersData from "../../../core/data/AvailabilityQuarters.json"
import destinations from "../../../core/data/Destinations.json"
import { useAvailability } from "../../../hooks/useAvailability";
import { Button, Heading } from "../../atoms";
import { Quarter } from "../../../core/common/quarters/domain/Quarter";
import styles from './AvailabilityForm.module.scss';
import { DropdownRenderData } from '../DropdownList';
import { getDestinationById } from '../../../core/destination/application/getDestinationById';
import { Destination } from '../../../core/destination/domain/Destination';

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
  setDestinationImgPreview: (imgPath: string) => void;
  setDestination: (destination: Destination | null) => void;
  setQuarter: (quarterData:QuarterAvailability | null) => void;
};

type FormData = {
  name: "quarter" | "destination";
  label: string;
  dropdownLabel: string;
  dropdownData: DropdownRenderData[];
  dropDownOnHoverOption?: (destinationId: string) => void;
}

export const AvailabilityForm = ({ formType, setDestinationImgPreview, setDestination, setQuarter}: AvailabilityFormProps) => {
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
        }
      }
    } else if (formType === 'quarter') {
      setSelectedQuarter(optionData)
      setSelectedDestination(null);
    }
  }

  const handleOnHoverOption = (destinationId: string) => {
    if (formType === 'destination') {
      if (destinationId) {
        const destination = getDestinationById(destinationId)
        if (destination) {
          setDestinationImgPreview(destination.images[0])
        }
      }
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
      }
    } else if (formType === 'destination') {
      newFormData = {
        name: "destination",
        label: 'Please, select the destination you prefer',
        dropdownLabel: "Select a destination",
        dropdownData: destinationData,
        dropDownOnHoverOption: handleOnHoverOption
      }
    }
    setFormtypeData(newFormData);
  }

  useEffect(() => {
    setFormDataByType(formType);
    setDestinationImgPreview('');
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
              onHoverOption={ (selectedId) => formTypeData?.dropDownOnHoverOption && formTypeData?.dropDownOnHoverOption(selectedId)}
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