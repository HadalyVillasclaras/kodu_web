import React, { useEffect, useState } from 'react';
import allQuarters from '../../../core/data/AvailabilityQuarters.json';
import { type DropdownRenderData, DropdownList } from '../../../../design-system/components/molecules/DropdownList';
import { Button, Heading, Loader } from '../../../../design-system/components/atoms';
import { type Quarter } from '../../../core/common/quarters/domain/Quarter';
import { Feedback } from '../../../../design-system/components/molecules';
import styles from './DestinationCheckForm.module.scss';
import { useAvailability } from '../../../hooks';

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
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
      setIsLoading(true);
      const availability = isQuarterAvailableOnDestination(selectedQuarter.id, destinationId);

      setTimeout(() => {
        setIsAvailable(availability);
        setIsLoading(false);
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
      <div className={`${styles['avblty-form__wp']}`}>
        <fieldset >
          <label id="dropdown-label">
            {
              isAvailable && !isLoading && isSettedFromAvailabilityForm
                ? <Feedback isActive={isAvailable && !isLoading && isSettedFromAvailabilityForm} color={isAvailable ? 'brown' : 'green'}>
                  <>
                    <p>Please, click on the <b>request button</b> to continue with the reservation process.</p>
                    <p>Or select another quarter to check availability.</p>
                  </>
                </Feedback>
                : 'Please, select the year period that better fits with your needs'
            }
          </label>
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

      </div>

      {
        hasError &&
        <p className={`${styles['avblty-form__error']}`}>Please, select a year quarter to check availability.</p>
      }
      {
        // !loading &&
        <Loader isActive={isLoading} />
      }
      {
        isAvailable !== null && !isLoading && !isSettedFromAvailabilityForm &&
        <Feedback isActive={isAvailable !== null && !isLoading && !isSettedFromAvailabilityForm} color={isAvailable ? 'brown' : 'green'}>
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
    </form>
  );
};