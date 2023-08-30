import { DestinationCard } from '../molecules';
import lodgins from '../../config/data/Lodgins.json';
import styles from './DestinationsGrid.module.scss';

export const DestinationsGrid = () => {
  return (
    <section className={styles["destinations-grid"]}>
      {
        lodgins.map((lodgin, index) => {
          return (
          <a key={index} href={`/house/${lodgin.id}`}>
          <DestinationCard data={lodgin}/>
          </a> 
       ) })
      }
    </section>
  )
}
