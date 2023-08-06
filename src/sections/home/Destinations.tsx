import { Heading } from '../../design-system/atoms'
import {DestinationsSlider} from './DestinationsSlider';
import styles from './Destinations.module.scss';
import { Section } from '../../design-system/objects/Section';
import { Container } from '../../design-system/objects/Container';

export const Destinations = () => {
  const imgArray = ['/src/assets/imgs/homes/paraty/paraty-1.png', '/src/assets/imgs/homes/dunlap/dunlap-1.png', '/src/assets/imgs/homes/bloom/bloom-3.png', '/src/assets/imgs/homes/dunlap/dunlap-1.png', '/src/assets/imgs/homes/dunlap/dunlap-1.png'];

  return (
    <>
    <div className={styles["destinations__sect-heading"]}>
      <Heading color='green' as='h1'>Destinations</Heading>
    </div>
      {/* <section className={styles["destinations__slider-sect"]}> */}
        <DestinationsSlider images={imgArray}/>
      {/* </section> */}
    </>
  )
}
