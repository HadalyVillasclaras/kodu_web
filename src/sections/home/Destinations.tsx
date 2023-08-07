import { Heading } from '../../design-system/atoms'
import { DestinationsSlider } from './DestinationsSlider';
import styles from './Destinations.module.scss';
import { useEffect, useState } from 'react';

export const Destinations = () => {
  const imgArray = ['/src/assets/imgs/homes/paraty/paraty-1.png', '/src/assets/imgs/homes/dunlap/dunlap-1.png', '/src/assets/imgs/homes/bloom/bloom-3.png', '/src/assets/imgs/homes/dunlap/dunlap-1.png', '/src/assets/imgs/homes/dunlap/dunlap-1.png'];

  const [visibleSlides, setVisibleSlides] = useState(3);
console.log(visibleSlides);
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 992px)');
    const tablet = window.matchMedia('(min-width: 768px) and (max-width: 991px)');
    const mobile = window.matchMedia('(max-width: 576px)');

    function handleDesktopQuery(e) {
      if (e.matches) {
        setVisibleSlides(3);
      }
    }

    function handleTabletQuery(e) {
      if (e.matches) {
        setVisibleSlides(2);
      }
    }

    function handleMobileQuery(e) {
      if (e.matches) {
        setVisibleSlides(1);
      }
    }

    desktop.addListener(handleDesktopQuery);
    tablet.addListener(handleTabletQuery);
    mobile.addListener(handleMobileQuery);

    return () => {
      desktop.removeListener(handleDesktopQuery);
      tablet.removeListener(handleTabletQuery);
      mobile.removeListener(handleMobileQuery);
    };
  }, []);

  return (
    <>
      <div className={styles["destinations__sect-heading"]}>
        <Heading color='green' as='h1'>Destinations</Heading>
      </div>
      <div style={{ height: "70vh" }}>
        <DestinationsSlider images={imgArray} visibleSlides={visibleSlides}/>
      </div>
      {/* <section className={styles["destinations__slider-sect"]}> */}
      {/* </section> */}
    </>
  )
}
