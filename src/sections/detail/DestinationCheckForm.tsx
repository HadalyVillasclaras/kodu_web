import React, { useState } from 'react'
import { useAvailability } from '../../hooks/useAvailability'
import allQuarters from '../../core/data/AvailabilityQuarters.json'
import { DropdownRenderData, DropdownMenu } from '../../design-system/molecules/DropdownMenu'
import { Button, Heading, Loader } from '../../design-system/atoms'
import styles from "./DestinationCheckForm.module.scss";

type Props = {
  destinationId: string
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

  return (
    <section className={`${styles['avblty-form']}`}>
      <Heading as="h3" color="brown">Check availability</Heading>
      <p>Please, select the year period that better fits with your needs</p>
      <form onSubmit={handleSubmit}>
        <DropdownMenu
          label="Select a quarter"
          onSelectChange={(selected) => setSelectedQuarter(selected)}
          color="green"
          data={allQuarters as DropdownRenderData[]}
        />
        <br />
        {!loading && !hasRequested && (
          <div>
            {isAvailable ? (
              <Button onClick={handleRequestClick} text="Request for stay" />
            ) : (
              <Button type='submit' text='Check' />
            )}
          </div>
        )}
        {loading && <Loader />}

        {isAvailable != null && (
          <p>
            {isAvailable ? "The selected quarter is available!" : "Sorry, the selected quarter is not available."}
          </p>
        )}
      </form>
    </section>

  )
}
