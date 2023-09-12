import { Destination } from "../../core/destination/domain/Destination";
import { MappedList } from "../../../design-system/components/molecules";
import { DestinationCheckForm } from "./DestinationCheckForm";
import styles from "./DestinationInfoContainer.module.scss";

type Props = {
  destination: Destination
}
export const DestinationInfoContainer = ({ destination }: Props) => {

  return (
    <section className={`${styles['dest-x__container']}`}>
      <section className={`${styles['dest-info']}`}>
        <div className={`${styles['dest-info__capacity']}`}>
          <p>{` > ${destination.details.persons} persons`}</p>
          <p>{`${destination.details.persons} beds`}</p>
        </div>
        <p className={`${styles['dest-info__description']}`}>{destination.description}</p>
        <MappedList color="green" size="m" items={destination?.details.amenities} />
      </section>
      <section className={`${styles['dest-form-wrapper']}`}>
        <DestinationCheckForm destinationId={destination.id.toString()} />
      </section>
    </section>
  )
}
