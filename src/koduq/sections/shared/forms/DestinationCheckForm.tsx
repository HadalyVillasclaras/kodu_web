import React, { useEffect, useState } from 'react';
import { useAvailability } from '../../../hooks/useAvailability';
import allQuarters from '../../../core/data/AvailabilityQuarters.json';
import { DropdownRenderData, DropdownList } from '../../../../design-system/components/molecules/DropdownList';
import { Button, Heading, Loader } from '../../../../design-system/components/atoms';
import { Quarter } from '../../../core/common/quarters/domain/Quarter';
import { Feedback } from '../../../../design-system/components/molecules';
import styles from "./DestinationCheckForm.module.scss";

type DestinationCheckFormProps = {
  destinationId: string,
  setIsRequested: (isRequested: boolean) => void;
  selectedQuarter: Quarter | null;
  setSelectedQuarter: React.Dispatch<React.SetStateAction<Quarter | null>>;
  selectedQuarterFromUrl?: Quarter;
}

export const DestinationCheckForm = ({ destinationId, selectedQuarterFromUrl, setIsRequested, selectedQuarter, setSelectedQuarter }: DestinationCheckFormProps) => {
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [quarterFromUrl, setQuarterFromUrl] = useState<Quarter | undefined>();

  const [loading, setLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean | null>(null);

  const { isQuarterAvailableOnDestination } = useAvailability();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setQuarterFromUrl(undefined)
    if (!selectedQuarter) {
      setHasError(true);
      return;
    }
    setHasError(false);

    if (selectedQuarter) {
      setLoading(true);
      const availability = isQuarterAvailableOnDestination(selectedQuarter.id, destinationId);

      setTimeout(() => {
        setIsAvailable(availability);
        setLoading(false);
      }, 4000);
    }
  }

  const handleRequestClick = () => {
    setIsRequested(true);
  };

  useEffect(() => {
    selectedQuarterFromUrl && setSelectedQuarter(selectedQuarterFromUrl);
    selectedQuarterFromUrl ? setIsAvailable(true) : setIsAvailable(null);
    setQuarterFromUrl(selectedQuarterFromUrl);
  }, [selectedQuarterFromUrl])

  console.log(quarterFromUrl);
  return (
    <form className={`${styles['avblty-form']}`} onSubmit={handleSubmit} aria-labelledby="form-title">
      <Heading id='form-title' as="h4" color="brown">Check availability</Heading>
      <fieldset >
        <label id="dropdown-label">Please, select the year period that better fits with your needs</label>
        <DropdownList
          label={selectedQuarterFromUrl ? selectedQuarterFromUrl.label : "Select a quarter"}
          onSelectChange={(selected) => {
            setSelectedQuarter(selected);
            setIsAvailable(null);
            setHasError(null);
          }}
          color="green"
          data={allQuarters as DropdownRenderData[]}
        />
      </fieldset>
      {
        isAvailable
          ? <Button onClick={handleRequestClick} color='brown' text="Request for stay" />
          : <Button type='submit' text='Check' />
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
        isAvailable != null && !loading &&
        <Feedback color={isAvailable ? 'brown' : 'green'}>
          {
            selectedQuarterFromUrl && isAvailable && quarterFromUrl
              ? <>
                  <p>This is the selected yearly quarter you picked in form.</p>
                  <p>Please, click on the <b>request button</b> to continue with the reservation process.</p>
                </>
              : (isAvailable
                ? <>
                    <p>The selected quarter is available!</p>
                    <p>Please, click on the <b>request button</b> to continue with the reservation process.</p>
                  </>
                : <p>Sorry, the selected quarter is not available. Check another quarter.</p>
              )
          }
        </Feedback>
      }
    </form>
  )
}