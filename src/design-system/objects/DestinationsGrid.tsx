import styles from './DestinationsGrid.module.scss';
import { DestinationCard } from '../molecules/DestinationCard';
import lodgins from '../../config/data/Lodgins.json';

type GridProps = {
  // children: ReactNode; 
}

export const DestinationsGrid = ({  }: GridProps) => {
  return (
    <section className={styles["destinations-grid"]}>
      {
        lodgins.map((lodgin, index) => {
          return (
          <a key={index} href={`/house/${lodgin.id}`}>
          <DestinationCard  homeName={lodgin.name} price={lodgin.price} src={lodgin.images[0]}/>
          </a> 
       ) })
      }
    </section>
  )
}
