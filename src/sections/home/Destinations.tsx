import { Heading } from '../../design-system/atoms'
import { DestinationsSlider } from '../../design-system/molecules/DestinationSlider/DestinationsSlider';
import styles from './Destinations.module.scss';
import { useState } from 'react';
import { useBreakpointSetter } from '../../hooks/useBreakPointSetter';
import { Swipe } from '../../design-system/molecules/Swipe/Swiper';
import { useDeviceType, DeviceType } from '../../hooks/useDeviceType';

export const Destinations = () => {
  const [visibleSlides, setVisibleSlides] = useState(3);
  const deviceType = useDeviceType();
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
      {
        deviceType === DeviceType.MOBILE
          ? <section className={styles["destinations__sect-swipe"]}>
            <Swipe />
          </section>
          : <section style={{ height: "70vh" }}>
            <DestinationsSlider visibleSlides={visibleSlides} />
          </section>
      }
    </>
  )
}