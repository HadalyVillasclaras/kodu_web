import { Heading } from '../../design-system/atoms'
import { DestinationsSlider } from './DestinationSlider/DestinationsSlider';
import styles from './Destinations.module.scss';
import { useState } from 'react';
import { useBreakpointSetter } from '../../shared/useBreakPointSetter';

export const Destinations = () => {
  const [visibleSlides, setVisibleSlides] = useState(3);

  useBreakpointSetter(setVisibleSlides, {
    desktop: 3,
    tablet: 2,
    mobile: 1
  });

  return (
    <>
      <section className={styles["destinations__sect-heading"]}>
        <Heading color='green' font='fancy' as='h2'>Destinations</Heading>
      </section>
      <section style={{ height: "70vh" }}>
        <DestinationsSlider visibleSlides={visibleSlides} />
      </section>
    </>
  )
}