import React, { useEffect, useState } from 'react';
import { DropdownList } from '../../../../../design-system/components/molecules';
import quartersData from '../../../../core/data/AvailabilityQuarters.json';
import destinations from '../../../../core/data/Destinations.json';
import { useAvailability } from '../../../../hooks/useAvailability';
import { Button, Heading } from '../../../../../design-system/components/atoms';
import { type Quarter } from '../../../../core/common/quarters/domain/Quarter';
import styles from './AvailabilityForm.module.scss';
import { type DropdownRenderData } from '../../../../../design-system/components/molecules/DropdownList';
import { getDestinationById } from '../../../../core/destination/application/getDestinationById';
import { type Destination } from '../../../../core/destination/domain/Destination';

const destinationData = destinations.map(dest => ({
  id: dest.id.toString(),
  label: dest.name
}));

export interface QuarterAvailability {
  quarter: Quarter
  availableDestinations: Destination[]
}

interface AvailabilityFormProps {
  formType: 'destination' | 'quarter'
  isSubmited: boolean
  setIsSelected: (x: boolean) => void
  setIsSubmited: (x: boolean) => void
  setDestinationPreview: (destinationPrev: any) => void
  setQuarterPreview: (quarter: any) => void
  setDestination: (destination: Destination | null) => void
  setQuarter: (quarterData: QuarterAvailability | null) => void
}

interface FormData {
  name: 'quarter' | 'destination'
  label: string
  dropdownLabel: string
  dropdownData: DropdownRenderData[]
  dropDownOnHoverOption?: (id: string, label: string) => void
}

export interface DestinationPreviewType {
  name: string
  location: string
  img: string
}

export const AvailabilityForm = ({ formType, setIsSelected, isSubmited, setIsSubmited, setDestinationPreview, setQuarterPreview, setDestination, setQuarter }: AvailabilityFormProps) => {
  const [formTypeData, setFormtypeData] = useState<FormData | null>(null);

  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [selectedQuarter, setSelectedQuarter] = useState<Quarter | null>(null);

  const { checkAvailabilityByDestination, checkAvailabilityByQuarter } = useAvailability();
  const [showError, setShowError] = useState<boolean>(false);
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowError(false);

    if (!selectedQuarter && !selectedDestination && !isSubmited) {
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
        setDestination(null);
        setIsSubmited(true);
      } catch (error) {
        setQuarter(null);
      }
      setSelectedQuarter(null);
    }

    if (selectedDestination) {
      try {
        const avlbQuarters: Quarter[] = checkAvailabilityByDestination(selectedDestination.id);
        setDestination({
          ...selectedDestination,
          availability: avlbQuarters
        });
        setQuarter(null);
        setIsSubmited(true);
      } catch (error) {
        setDestination(null);
      }
      setSelectedDestination(null);
    }
  };

  const handleOnSelectOption = (optionData: DropdownRenderData) => {
    setShowError(false);
    if (formType === 'destination' && optionData.id) {
      const destination: Destination | undefined = getDestinationById(optionData.id);
      if (destination) {
        setSelectedDestination(destination);
        setDestination(null);
        setIsSelected(true);
        setSelectedQuarter(null);
      }
    } else if (formType === 'quarter') {
      setSelectedQuarter(optionData);
      setIsSelected(true);
      setSelectedDestination(null);
    }
    setIsSubmited(false);
  };

  const handleOnHoverOption = (id: string, label: string) => {
    setIsSelected(false);
    setIsSubmited(false);

    if (formType === 'destination' && id) {
      const destination = getDestinationById(id);
      if (destination) {
        setDestinationPreview(
          {
            name: destination.name,
            location: destination.location,
            img: destination.images[0]
          }
        );
      }
    }

    if (formType === 'quarter') {
      setQuarterPreview({
        id,
        label
      });
    }
  };

  const setFormDataByType = (formType: 'quarter' | 'destination') => {
    let newFormData: FormData | null = null;
    if (formType === 'quarter') {
      newFormData = {
        name: 'quarter',
        label: 'Please, select the yearly quarter that better fits your needs',
        dropdownLabel: 'Select a quarter',
        dropdownData: quartersData,
        dropDownOnHoverOption: handleOnHoverOption
      };
    } else if (formType === 'destination') {
      newFormData = {
        name: 'destination',
        label: 'Please, select the destination you prefer',
        dropdownLabel: 'Select a destination',
        dropdownData: destinationData,
        dropDownOnHoverOption: handleOnHoverOption
      };
    }
    setFormtypeData(newFormData);
  };

  useEffect(() => {
    setFormDataByType(formType);
    setDestinationPreview('');
    setDestination(null);
    setQuarter(null);
  }, [formType]);

  return (
    <>
      {formTypeData &&
        <form className={`${styles['avlblty-form']}`} >
          <Heading id='form-title' as="h4" color="green">Check by {formTypeData.name}</Heading>
          <fieldset>
            <label id="dropdown-label">{formTypeData.label}</label>
            <DropdownList
              label={formTypeData.dropdownLabel}
              onSelectChange={(selected) => { handleOnSelectOption(selected); }}
              onHoverOption={(id, label) => { formTypeData?.dropDownOnHoverOption && formTypeData?.dropDownOnHoverOption(id, label); }}
              color="green"
              data={formTypeData.dropdownData}
            />
          </fieldset>
          <Button onClick={handleOnSubmit} text='Check' />
          {
            showError && <span>Please, select an option before check</span>
          }
        </form>
      }
    </>
  );
};
