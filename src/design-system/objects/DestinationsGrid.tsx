import { ReactNode } from 'react'
import styles from './DestinationsGrid.module.scss';
import { DestinationCard } from '../molecules/DestinationCard';

type GridProps = {
  // children: ReactNode; 
}

export const DestinationsGrid = ({  }: GridProps) => {
  return (
    <section className={styles["destinations-grid"]}>
        <DestinationCard homeName="Home 1" price={39} src='/src/assets/imgs/homes/paraty/paraty1.jpeg'/>
        <DestinationCard homeName="Home 2" price={39} src='/src/assets/imgs/homes/paraty/paraty1.jpeg'/>
        <DestinationCard homeName="Home 3" price={39} src='/src/assets/imgs/homes/paraty/paraty1.jpeg'/>
        <DestinationCard homeName="Home 4" price={39} src='/src/assets/imgs/homes/paraty/paraty1.jpeg'/>
        <DestinationCard homeName="Home 5" price={39} src='/src/assets/imgs/homes/paraty/paraty1.jpeg'/>
        <DestinationCard homeName="Home 6" price={39} src='/src/assets/imgs/homes/paraty/paraty1.jpeg'/>
    </section>
  )
}
