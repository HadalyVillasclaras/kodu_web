import { useLayoutEffect, useRef, useState } from 'react';
import { Heading, Button, Curtain } from '../../design-system/atoms';
import { ShowMoreText } from "../../design-system/molecules";
import { useGsapSlidesUp } from "../../hooks/gsap";
import sectionImages from '../../core/data/SectionImages.json';
import styles from "./About.module.scss";
import gsap from 'gsap';

const text = "Adipiscing elit. Nunc auctor, ante in rhoncus pulvinar, arcu orci dapibus nisl, et dictum risus lacus quis sem. Sed ultrices sodales lorem, at lobortis odio porta vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque congue non augue eleifend iaculis. Mauris posuere ex justo, sit amet faucibus diam faucibus sollicitudin. Pellentesque efficitur tortor ac varius tincidunt.";
const hiddenText = " Et dictum risus lacus quis sem. Sed ultrices sodales lorem, at lobortis odio porta vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque congue non augue eleifend iaculis. Mauris posuere ex justo, sit amet faucibus diam faucibus sollicitudin. Pellentesque efficitur tortor ac varius tincidunt.";
const BASE_ASSETS = import.meta.env.VITE_BASE_ASSETS;

export const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);
  const animatedDivRef = useRef<HTMLDivElement>(null!);
  const careAboutImg = useRef<HTMLImageElement>(null!);

  const { slidesUpOnScroll } = useGsapSlidesUp();

  const toggleShowMore = () => {
    setShowMore(prevState => !prevState);
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const animatedDivChildren = Array.from(animatedDivRef.current.children);
      slidesUpOnScroll(animatedDivChildren as HTMLElement[], animatedDivRef.current);
    }, animatedDivRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={`${styles['care-about']}`}>
      <div ref={animatedDivRef} className={`${styles['care-about__elm']}`}>
        <Heading as='h3' font='fancy'>This is what we care about</Heading>
        <ShowMoreText visibleText={text} hiddenText={hiddenText} showMoreText={showMore} onToggle={toggleShowMore} />
        <Button
          variant='underline'
          color='cream'
          text={showMore ? 'Show less -' : 'Know more about it +'}
          onClick={toggleShowMore}
        />
      </div>
      <div className={`${styles['care-about__elm']}`}>
        <Curtain elementRef={careAboutImg} triggerElement={careAboutImg}>
          <img src={BASE_ASSETS + sectionImages.aboutUs[0].src} alt="description" />
        </Curtain>
      </div>
    </section>
  )
}