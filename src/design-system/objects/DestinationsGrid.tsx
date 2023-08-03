import styles from './DestinationsGrid.module.scss';
import { DestinationCard } from '../molecules/DestinationCard';
import lodgins from '../../config/data/Lodgins.json';

type GridProps = {
  // children: ReactNode; 
}

export const DestinationsGrid = ({  }: GridProps) => {
  console.log(lodgins);
  return (
    <section className={styles["destinations-grid"]}>
      {
        lodgins.map((lodgin) => {
          return <a href={`/house/${lodgin.id}`}>
          <DestinationCard key={lodgin.id} homeName={lodgin.name} price={lodgin.price} src={lodgin.images[0]}/>
          </a> 
        })
      }
    </section>
  )
}
