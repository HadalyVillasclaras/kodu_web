import { Destination } from '../../core/destination/domain/Destination';
import { Divider, Heading } from '../../../design-system/components/atoms'
import styles from "./DestinationMainInfo.module.scss";

type Props = {
  destination: Destination
}

export const DestinationMainInfo = ({ destination }: Props) => {
  return (
    <header className={styles['detail-header']}>
      <Heading as="h3" color="green">{destination.name}</Heading>
      <p className={styles['detail-header__location']}>{destination.location}</p>
      <Divider color="green" />
    </header>
  )
}