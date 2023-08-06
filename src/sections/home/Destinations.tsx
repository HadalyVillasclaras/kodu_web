import { Heading } from '../../design-system/atoms'
import {DestinationsSlider} from './DestinationsSlider';
import styles from './Destinations.module.scss';

export const Destinations = () => {
  const imgArray = ['/src/assets/imgs/homes/paraty/paraty-1.png', '/src/assets/imgs/homes/dunlap/dunlap-1.png', '/src/assets/imgs/homes/bloom/bloom-3.png', '/src/assets/imgs/homes/dunlap/dunlap-1.png', '/src/assets/imgs/homes/dunlap/dunlap-1.png'];

  return (
    <>
    <div className={styles["destinations__sect-heading"]}>
      <Heading color='green' as='h1'>Destinations</Heading>
    </div>
    <div style={{height:"70vh"}}>
        <DestinationsSlider images={imgArray}/>
    </div>
      {/* <section className={styles["destinations__slider-sect"]}> */}
      {/* </section> */}
    </>
  )
}
