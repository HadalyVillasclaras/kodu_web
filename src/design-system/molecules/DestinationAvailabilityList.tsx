import { Quarter } from "../../core/common/quarters/domain/Quarter";

type Props = {
  destinations: { id: string; label: string; }[];
  quarter?: Quarter
}

export const DestinationAvailabilityList = ({destinations, quarter}: Props) => {
  return (
    <section>
      <p>Destinations available in {quarter?.label} quarter:</p>
      <ul>
        {destinations.map((dest) => (
          <li key={dest.id}>{dest.label}</li>
        ))}
      </ul>
    </section>
  );
}