import { DropdownMenu } from ".";
import quartersData from "../../core/data/AvailabilityQuarters.json"
import destinationData from "../../core/data/Destinations.json"
import React, { useState } from 'react'
import { useAvailability } from "../../hooks/useAvailability";
import { DestinationAvailabilityList } from "./DestinationAvailabilityList";

const destinations = destinationData.map(dest => ({
  id: dest.id.toString(),
  label: dest.name,
}));
export const AvailabilityForm = () => {
  const [selectedQuarter, setSelectedQuarter] = useState<string>(null!);
  const [selectedDestination, setSelectedDestination] = useState<string>(null!);
  const [submitted, setSubmitted] = useState(false)
  const [availableDestinations, setAvailableDestinations] = useState<string[] | undefined>();
  const { checkAvailabilityByDestination, checkAvailabilityByQuarter } = useAvailability();

  const [choice, setChoice] = useState<'destination' | 'quarter'>('destination');
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
console.log(availableDestinations);
    if (selectedQuarter) {
      const destinations = checkAvailabilityByQuarter(selectedQuarter);
      console.log("Destinations available in", selectedQuarter, ":", destinations);
      setSubmitted(true)

      //try catch
      setAvailableDestinations(destinations)
    }

    if (selectedDestination) {
      const quarters = checkAvailabilityByDestination(selectedDestination);
      console.log("Quarters available for", selectedDestination, ":", quarters);
    }
  }

  return (
    <>
      <div>
        <label>
          <input
            type="radio"
            value="destination"
            checked={choice === 'destination'}
            onChange={() => setChoice('destination')}
          />
          Choose by Destination
        </label>
        <label>
          <input
            type="radio"
            value="quarter"
            checked={choice === 'quarter'}
            onChange={() => setChoice('quarter')}
          />
          Choose by Quarter
        </label>
      </div>

      <form onSubmit={handleSubmit}>
          {choice === 'quarter' && (
          <DropdownMenu
            label="Select a Quarter"
            onSelectChange={(selected) => setSelectedQuarter(selected)}
            color="green"
            data={quartersData}
          />
        )}
        {choice === 'destination' && (
          <DropdownMenu
            label="Select a destination"
            onSelectChange={(selected) => setSelectedDestination(selected)}
            color="green"
            data={destinations}
          />
        )}
        <br /><br /><br /><br />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {
        submitted &&
        <section>
          <DestinationAvailabilityList
            destinations={destinations}
            // quarter={selectedQuarter}
          />

        </section>
      }
    </>

  );
}