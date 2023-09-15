import { Destination } from "../../core/destination/domain/Destination";
import { MappedList } from "../../../design-system/components/molecules";
import { DestinationCheckForm } from "./DestinationCheckForm";
import styles from "./DestinationCheckSection.module.scss";
import { Divider } from "../../../design-system/components/atoms";

type Props = {
  destination: Destination
}

export const DestinationCheckSection = ({ destination }: Props) => {

  return (
    <section className={`${styles['dest-check__container']}`}>
      <section className={`${styles['dest-info']}`}>
        <div className={`${styles['dest-info__capacity']}`}>
          <p>{` > ${destination.details.persons} persons`}</p>
          <p>{`${destination.details.persons} beds`}</p>
        </div>
        <p className={`${styles['dest-info__description']}`}>{destination.description}</p>
        <MappedList color="green" size="m" items={destination?.details.amenities} />
      </section>
      <Divider/>
      <section className={`${styles['dest-form']}`}>
        <DestinationCheckForm destinationId={destination.id.toString()} />
      </section>
    </section>
  )
}
