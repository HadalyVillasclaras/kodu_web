import { Destination } from '../../core/destination/domain/Destination';
import { Heading } from '../../design-system/atoms'
import styles from "./DestinationMainInfo.module.scss";

type Props = {
  destination: Destination
}

export const DestinationMainInfo = ({ destination }: Props) => {
  return (
    <>
      <header className={styles['detail-header']}>
        <section>
          <Heading as="h3" color="green">{destination.name}</Heading>
          <p className={styles['detail-header__location']}>{destination.location}</p>
        </section>
        <section>
          <p>{` > ${destination.details.persons} persons | `}</p>
          <p>{`${destination.details.persons} beds`}</p>
        </section>
      </header>
      <section className={styles['detail-info']}>
        <p className={`${styles['detail-info__description']}`}>{destination.description}</p>
        <ul className={`${styles['detail-info__list']}`}>
          {
            destination.details.amenities.map((am: string, key: number) => (
              <li key={key}>+ {am}</li>
            ))
          }
        </ul>
      </section>
    </>
  )
}