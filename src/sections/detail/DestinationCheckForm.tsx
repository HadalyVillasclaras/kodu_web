import React, { useState } from 'react'
import { useAvailability } from '../../hooks/useAvailability'
import allQuarters from '../../core/data/AvailabilityQuarters.json'
import { DropdownRenderData, DropdownMenu } from '../../design-system/molecules/DropdownMenu'
import { Button, Heading, Loader } from '../../design-system/atoms'
import styles from "./DestinationCheckForm.module.scss";

type Props = {
  destinationId?: string
}

export const DestinationCheckForm = ({ destinationId }: Props) => {
  const [selectedQuarter, setSelectedQuarter] = useState<string | null>(null);
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasRequested, setHasRequested] = useState<boolean>(false);

  const { isQuarterAvailableOnDestination } = useAvailability();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedQuarter) {
      setLoading(true);
      const availability = isQuarterAvailableOnDestination(selectedQuarter, destinationId);

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
    if (isAvailable) return <Button onClick={handleRequestClick} text="Request for stay" />;
    return <Button type='submit' text='Check' />;
  };

  return (

    <form className={`${styles['avblty-form']}`} onSubmit={handleSubmit} aria-labelledby="form-title">
      <Heading id='form-title' as="h4" color="brown">Check availability</Heading>
      <fieldset >
        <label id="dropdown-label">Please, select the year period that better fits with your needs</label>
        <DropdownMenu
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
      {loading && 
      <section className={`${styles['avblty-form__loader']}`}>
        <Loader />
      </section>
      }
      {isAvailable != null && !loading &&(
        <section>
          <p className={`${styles['avblty-form__feedback']}`}>
            {isAvailable ? "The selected quarter is available!" : "Sorry, the selected quarter is not available. Try with another quarter."}
          </p>
        </section>
      )}
    </form>
  )
}
