import { useEffect, useRef, useState } from 'react';
import styles from "./AboutUs.module.scss";
import { Heading, Button } from '../../design-system/atoms';
import sectionImages from '../../config/data/SectionImages.json';
import { ShowMoreText } from "../../shared/ShowMoreText";
import { useGsapFadeIn } from '../../shared/hooks/useGsapFadeIn';

export const AboutUs = () => {
  const text = "Adipiscing elit. Nunc auctor, ante in rhoncus pulvinar, arcu orci dapibus nisl, et dictum risus lacus quis sem. Sed ultrices sodales lorem, at lobortis odio porta vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque congue non augue eleifend iaculis. Mauris posuere ex justo, sit amet faucibus diam faucibus sollicitudin. Pellentesque efficitur tortor ac varius tincidunt.";
  const hiddenText = " Et dictum risus lacus quis sem. Sed ultrices sodales lorem, at lobortis odio porta vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque congue non augue eleifend iaculis. Mauris posuere ex justo, sit amet faucibus diam faucibus sollicitudin. Pellentesque efficitur tortor ac varius tincidunt.";
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(prevState => !prevState);
  };

  const animatedDivRef = useRef<HTMLDivElement>(null!);
  const { fadeInOnScroll } = useGsapFadeIn();

  useEffect(() => {
    fadeInOnScroll(animatedDivRef.current, `.${styles['about-us']}`);
  }, []);

  return (
    <section className={styles['about-us']}>
      <div ref={animatedDivRef}>
        <Heading as='h1'>This is what we care about</Heading>
        <ShowMoreText visibleText={text} hiddenText={hiddenText} showMoreText={showMore} onToggle={toggleShowMore} />
        <Button
          variant='underline'
          color='cream'
          text={showMore ? 'Show less -' : 'Know more about it +'}
          onClick={toggleShowMore}
        />
      </div>
      <div className={styles['about-us__image-container']} >
        <img className={styles['about-us__image']} src={sectionImages.aboutUs[0].src} alt="description" />
      </div>
    </section>
  )
}