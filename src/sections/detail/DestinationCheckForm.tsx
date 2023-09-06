import React, { useEffect, useState } from 'react'
import { DropdownMenu } from '../../design-system/molecules'
import { useAvailability } from '../../hooks/useAvailability'
import { Quarter } from '../../core/common/quarters/domain/Quarter'
import allQuarters  from '../../core/data/AvailabilityQuarters.json'

import { DropdownRenderData } from '../../design-system/molecules/DropdownMenu'
import { Button, Heading } from '../../design-system/atoms'
import styles from "./DestinationCheckForm.module.scss";

type Props = {
  destinationId: string
}

export const DestinationCheckForm = ({ destinationId }: Props) => {
  const [selectedQuarter, setSelectedQuarter] = useState<string | null>(null);
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const {  checkAvailabilityByDestination, isQuarterAvailableOnDestination } = useAvailability();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedQuarter) {
      const availability = isQuarterAvailableOnDestination(selectedQuarter, destinationId);
      setIsAvailable(availability);
    }
  }

  function getAvailableQuarters() {
    const availableQuarters = checkAvailabilityByDestination(destinationId);
    return availableQuarters;
  }



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
        <div>
          <Button type='submit' onClick={handleSubmit} text='Check' />
        </div>
        {isAvailable !== null && (
          <p>
            {isAvailable ? "The selected quarter is available!" : "Sorry, the selected quarter is not available."}
          </p>
        )}
      </form>
    </section>

  )
}
