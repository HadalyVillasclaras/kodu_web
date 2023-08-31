import { Heading } from '../../design-system/atoms'
import { DinamicSlider, DestinationCard, Swipe } from '../../design-system/molecules';
import { useLayoutEffect, useRef, useState } from 'react';
import { useBreakPointSetter } from '../../hooks';
import { useDeviceType, DeviceType } from '../../hooks/useDeviceType';
import { useGsapSlidesUp } from "../../hooks/gsap";
import styles from './Destinations.module.scss';
import destinations from "../../config/data/Destinations.json";
import { gsap } from 'gsap';

type DestinationData = {
  id: number;
  homeName: string;
  img: string;
  alt: string;
};

export const Destinations = () => {
  const [visibleSlides, setVisibleSlides] = useState(3);
  const destinationHRef = useRef<HTMLImageElement>(null!);
  const deviceType = useDeviceType();
  const { slidesUpOnScroll } = useGsapSlidesUp();

  useBreakPointSetter(setVisibleSlides, {
    desktop: 3,
    tablet: 2,
    mobile: 1
  });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      slidesUpOnScroll(destinationHRef.current as HTMLElement);
    }, destinationHRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={destinationHRef} className={styles["destinations__sect-heading"]}>
        <Heading color='green' font='fancy' as='h2'>Destinations</Heading>
      </section>
      {
        deviceType === DeviceType.MOBILE
          ? <section className={styles["destinations__sect-swipe"]}>
            <Swipe
              elementsData={destinations}
              renderElement={(data) => <DestinationCard data={data as DestinationData} />}
            />
          </section>
          : <section style={{ height: "70vh" }}>
            <DinamicSlider
              elementsData={destinations}
              renderElement={(data) => <DestinationCard data={data as DestinationData} />}
              visibleSlides={visibleSlides}
            />
          </section>
      }
    </>
  )
}