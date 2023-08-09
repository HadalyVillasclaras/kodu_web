import { Heading } from '../../design-system/atoms'
import { DestinationsSlider } from './DestinationSlider/DestinationsSlider';
import styles from './Destinations.module.scss';
import { useState } from 'react';
import { useBreakpointSetter } from '../../shared/useBreakPointSetter';

export const Destinations = () => {
  const BASE_ASSETS = import.meta.env.VITE_BASE_ASSETS;
  const imgArray = [
    `${BASE_ASSETS}imgs/homes/paraty/paraty-1.png`,
    `${BASE_ASSETS}imgs/homes/dunlap/dunlap-1.png`,
    `${BASE_ASSETS}imgs/homes/bloom/bloom-3.png`,
    `${BASE_ASSETS}imgs/homes/dunlap/dunlap-1.png`,
    `${BASE_ASSETS}imgs/homes/dunlap/dunlap-1.png`
];
  const [visibleSlides, setVisibleSlides] = useState(3);

  useBreakpointSetter(setVisibleSlides, {
    desktop: 3,
    tablet: 2,
    mobile: 1
  });

  return (
    <>
      <div className={styles["destinations__sect-heading"]}>
        <Heading color='green' font='fancy' as='h2'>Destinations</Heading>
      </div>
      <div style={{ height: "70vh" }}>
        <DestinationsSlider images={imgArray} visibleSlides={visibleSlides}/>
      </div>
      {/* <section className={styles["destinations__slider-sect"]}> */}
      {/* </section> */}
    </>
  )
}
