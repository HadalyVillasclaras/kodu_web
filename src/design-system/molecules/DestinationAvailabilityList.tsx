import React from 'react'

type Props = {
  destinations: any;
  quarter: any
}

export const DestinationAvailabilityList = ({destinations, quarter}: Props) => {
  return (
    <section>
      <p>Destinations available in {quarter.label} quarter:</p>
      <ul>
        {destinations.map((dest) => (
          <li key={dest.id}>{dest.label}</li>
        ))}
      </ul>
    </section>
  );
}