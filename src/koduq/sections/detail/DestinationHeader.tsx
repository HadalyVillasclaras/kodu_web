import { type Destination } from '../../core/destination/domain/Destination';
import { Divider, Heading } from '../../../design-system/components/atoms';
import styles from './DestinationHeader.module.scss';

interface Props {
  destination: Destination
}

export const DestinationHeader = ({ destination }: Props) => {
  return (
    <header className={styles['detail-header']}>
      <Heading as="h2" color="green" font='fancy'>{destination.name}</Heading>
      <p className={styles['detail-header__location']}>{destination.location}</p>
      <Divider color="green" />
    </header>
  );
};
