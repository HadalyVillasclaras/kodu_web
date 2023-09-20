import React, { useEffect, useState } from 'react';
import { useAvailability } from '../../../hooks/useAvailability';
import allQuarters from '../../../core/data/AvailabilityQuarters.json';
import { type DropdownRenderData, DropdownList } from '../../../../design-system/components/molecules/DropdownList';
import { Button, Heading, Loader } from '../../../../design-system/components/atoms';
import { type Quarter } from '../../../core/common/quarters/domain/Quarter';
import { Feedback } from '../../../../design-system/components/molecules';
import styles from './DestinationCheckForm.module.scss';

interface DestinationCheckFormProps {
  destinationId: string
  setIsRequested: (isRequested: boolean) => void
  selectedQuarter: Quarter | null
  setSelectedQuarter: React.Dispatch<React.SetStateAction<Quarter | null>>
  selectedQuarterFromUrl?: Quarter,
  isRequestFormSubmitted: boolean;
}

export const DestinationCheckForm = ({ destinationId, isRequestFormSubmitted, selectedQuarterFromUrl, setIsRequested, selectedQuarter, setSelectedQuarter }: DestinationCheckFormProps) => {
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const { isQuarterAvailableOnDestination } = useAvailability();
  const [isSettedFromAvailabilityForm, setIsSettedFromAvailabilityForm] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSettedFromAvailabilityForm(false);
    if (!selectedQuarter) {
      setHasError(true);
      return;
    }

    if (selectedQuarter) {
      setLoading(true);
      const availability = isQuarterAvailableOnDestination(selectedQuarter.id, destinationId);

      setTimeout(() => {
        setIsAvailable(availability);
        setLoading(false);
      }, 4000);
    }
  };

  const handleRequestClick = () => {
    setIsRequested(true);
  };

  useEffect(() => {
    if (selectedQuarterFromUrl !== undefined) {
      setIsSettedFromAvailabilityForm(true);
      setSelectedQuarter(selectedQuarterFromUrl);
      setIsAvailable(true);
      setHasError(false);
    }
  }, [selectedQuarterFromUrl]);

  useEffect(() => {
    if (isRequestFormSubmitted) {
      setIsAvailable(null);
      setHasError(false);
      setSelectedQuarter(null);

    }
  }, [isRequestFormSubmitted]);


  return (
    <form className={`${styles['avblty-form']}`} aria-labelledby="form-title">
      <Heading id='form-title' as="h4" color="brown">Check availability</Heading>
      <fieldset >
        <label id="dropdown-label">Please, select the year period that better fits with your needs</label>
        <DropdownList
          label={selectedQuarter ? selectedQuarter.label : 'Select a quarter'}
          onSelectChange={(selected) => {
            setSelectedQuarter(selected);
            setIsAvailable(null);
            setHasError(false);
            setIsSettedFromAvailabilityForm(false);
          }}
          color="green"
          data={allQuarters as DropdownRenderData[]}
        />
      </fieldset>
      {
        isAvailable
          ? <Button onClick={handleRequestClick} color='brown' text="Request for stay" />
          : <Button onClick={handleSubmit} text='Check' />
      }
      {
        hasError &&
        <p className={`${styles['avblty-form__error']}`}>Please, select a year quarter to check availability.</p>
      }
      {
        loading &&
        <Loader />
      }
      {
        isAvailable !== null && !loading && !isSettedFromAvailabilityForm &&
        <Feedback color={isAvailable ? 'brown' : 'green'}>
          {
            isAvailable
              ? <>
                <p>The selected quarter is available!</p>
                <p>Please, click on the <b>request button</b> to continue with the reservation process.</p>
              </>
              : <p>Sorry, the selected quarter is not available. Check another quarter.</p>
          }
        </Feedback>
      }
      {
        isAvailable && !loading && isSettedFromAvailabilityForm &&
        <Feedback color={isAvailable ? 'brown' : 'green'}>
          <>
            <p>This is the selected yearly quarter you picked in form.</p>
            <p>Please, click on the <b>request button</b> to continue with the reservation process.</p>
          </>
        </Feedback>
      }
    </form>
  );
};