import { Destination } from "../../core/destination/domain/Destination";
import { MappedList } from "../../design-system/molecules";
import styles from "./DestinationCheckContainer.module.scss";
import { DestinationCheckForm } from "./DestinationCheckForm";

type Props =  {
  destination: Destination
}
export const DestinationCheckContainer = ({destination}: Props) => {
  
  return (
    <section className={`${styles['dest-check-container']}`}>
      <MappedList color="green" size="l" items={destination?.details.amenities} />
      <DestinationCheckForm destinationId={destination.id.toString()} />
    </section>
  )
}
