import React, { useEffect, useState } from 'react'
import { DropdownMenu } from '../../design-system/molecules'
import { useAvailability } from '../../hooks/useAvailability'
import { Quarter } from '../../core/common/quarters/domain/Quarter'
import { DropdownRenderData } from '../../design-system/molecules/DropdownMenu'

type Props = {
  destinationId: string
}

export const DestinationCheckForm = ({ destinationId }: Props) => {
  const [selectedQuarter, setSelectedQuarter] = useState<string | null>(null);
  const [availableQuarters, setAvailableQuarters] = useState<Quarter[]>()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(selectedQuarter);
  }
  const { checkAvailabilityByDestination } = useAvailability();

  function getAvailableQuarters() {
    const quarters = checkAvailabilityByDestination(destinationId);
    setAvailableQuarters(quarters);
  }

  useEffect(() => {
    getAvailableQuarters()
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <DropdownMenu
        label="Select a quarter"
        onSelectChange={(selected) => setSelectedQuarter(selected)}
        color="green"
        data={availableQuarters as DropdownRenderData[]}
      />
      <br /><br /><br /><br />
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}
