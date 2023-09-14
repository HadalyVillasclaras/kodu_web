import React, { useState } from 'react';
import { useAvailability } from '../../hooks/useAvailability';
import allQuarters from '../../core/data/AvailabilityQuarters.json';
import { DropdownRenderData, DropdownList } from '../../../design-system/components/molecules/DropdownList';
import { Button, Heading, Loader } from '../../../design-system/components/atoms';
import styles from "./DestinationCheckForm.module.scss";
import { Quarter } from '../../core/common/quarters/domain/Quarter';

type DestinationCheckFormProps = {
  destinationId: string
}

export const DestinationCheckForm = ({ destinationId }: DestinationCheckFormProps) => {
  const [selectedQuarter, setSelectedQuarter] = useState<Quarter | null>(null);
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasRequested, setHasRequested] = useState<boolean>(false);

  const { isQuarterAvailableOnDestination } = useAvailability();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
    setHasRequested(true);
    console.log('request?: ' + hasRequested);
  };

  const renderButtonOrLoader = () => {
    if (isAvailable) return <Button onClick={handleRequestClick} color='brown' text="Request for stay" />;
    return <Button type='submit' text='Check' />;
  };

  return (
    <form className={`${styles['avblty-form']}`} onSubmit={handleSubmit} aria-labelledby="form-title">
      <Heading id='form-title' as="h4" color="brown">Check availability</Heading>
      <fieldset >
        <label id="dropdown-label">Please, select the year period that better fits with your needs</label>
        <DropdownList
          label="Select a quarter"
          onSelectChange={(selected) => {
            setSelectedQuarter(selected);
            setIsAvailable(null);
          }}
          color="green"
          data={allQuarters as DropdownRenderData[]}
        />
      </fieldset>
      <section>
        {renderButtonOrLoader()}
      </section>
      { loading && <Loader /> }
      {isAvailable != null && !loading && (
        <section>
          <p className={`${styles['avblty-form__feedback']}`}>
            {isAvailable ? "The selected quarter is available!. Please, click on the request button to continue with the reservation process." : "Sorry, the selected quarter is not available. Check another quarter."}
          </p>
        </section>
      )}
    </form>
  )
}
