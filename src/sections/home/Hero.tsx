import styles from "./Hero.module.scss";
import { useEffect, useRef } from 'react';
import { Heading } from '../../design-system/atoms';
import sectionImages from '../../config/data/SectionImages.json';
import { useGsapFadeIn } from "../../shared/hooks/useGsapFadeIn";

export const Hero = () => {
  const animatedTextRef = useRef<HTMLElement>(null!);
  const { fadeInOnScroll } = useGsapFadeIn();
  const BASE_ASSETS = import.meta.env.VITE_BASE_ASSETS;

  useEffect(() => {
    fadeInOnScroll(animatedTextRef.current, `.${styles['hero']}`);
  }, []);

  return (
      <section className={styles['hero']}>
        <section ref={animatedTextRef} className={styles['hero__textblock']}>
          <Heading as='h4' color="brown">Sustainable lodgings that take care of the planet</Heading>
        </section>
        <section className={styles['hero__image-container']}>
          <img className={styles['hero__image']} src={`${BASE_ASSETS}${sectionImages.hero.src}`} alt={sectionImages.hero.alt} />
        </section>
      </section>
  )
}
