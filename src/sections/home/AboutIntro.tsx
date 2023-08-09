import { useEffect, useRef, useState } from 'react';
import styles from "./AboutUs.module.scss";
import { Button, Heading } from '../../design-system/atoms';
import sectionImages from '../../config/data/SectionImages.json';
import { useGsapFadeIn } from '../../shared/hooks/useGsapFadeIn';
import { ShowMoreText } from '../../shared/ShowMoreText';

export const AboutIntro = () => {
  const text = "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque congue non augue eleifend iaculis. Mauris posuere ex justo, sit amet faucibus diam faucibus sollicitudin. Pellentesque efficitur tortor ac varius tincidunt.";
  const hiddenText = " Et dictum risus lacus quis sem. Sed ultrices sodales lorem, at lobortis odio porta vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque congue non augue eleifend iaculis. Mauris posuere ex justo, sit amet faucibus diam faucibus sollicitudin. Pellentesque efficitur tortor ac varius tincidunt.";
  const [showMore, setShowMore] = useState(false);
  const BASE_ASSETS = import.meta.env.VITE_BASE_ASSETS;

  return (
    <>
      <header className={styles['about__header']}>
        <Heading font='fancy' as='h1'>Nourish Nature</Heading>
        <Heading font='fancy' as='h1'>Your Next Getaway</Heading>
      </header>
      <section className={`${styles['intro-about']}`}>
        <img className={`${styles['intro-about-left']}`} src={BASE_ASSETS + 'imgs/homes/paraty/paraty-3.png'} alt="description" />
        <div className={`${styles['intro-about-right']}`}>
          <img src={BASE_ASSETS + 'imgs/homes/bloom/bloom-1.png'} alt="description" />
          <section>
            <Heading as='h3' color='brown' font='fancy'>Sustainable lodgings</Heading>
            <p>{text}</p>
          </section>
        </div>
      </section>
    </>
  )
}