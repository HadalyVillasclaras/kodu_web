import { Destination } from '../../core/destination/domain/Destination';
import { Heading } from '../../design-system/atoms'
import styles from "./DetailHeader.module.scss";

type Props = {
  destination: Destination
}

export const DetailHeader = ({ destination }: Props) => {
  return (
    <>
      <header className={styles['detail-header']}>
        <section>
        <Heading as="h3" color="green">{destination.name}</Heading>
        <p className={styles['detail-header__location']}>{destination.location}</p>
        </section>
        <p className={styles['detail-header__detail']}>
          {` > ${destination.details.persons} persons |  ${destination.details.beds} beds`}
        </p>
      </header>
    </>

  )
}