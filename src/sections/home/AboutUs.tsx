import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from "./AboutUs.module.scss";
import { Heading, Button } from '../../design-system/atoms';
import sectionImages from '../../config/data/SectionImages.json';
import { ShowMoreText } from "../../design-system/molecules/ShowMoreText";
import { useGsapFadeIn } from '../../hooks/gsap/useGsapFadeIn';
import { useGsapImgCurtain } from '../../hooks/gsap/useGsapImgCurtain';
import gsap from 'gsap';

export const AboutUs = () => {
  const text = "Adipiscing elit. Nunc auctor, ante in rhoncus pulvinar, arcu orci dapibus nisl, et dictum risus lacus quis sem. Sed ultrices sodales lorem, at lobortis odio porta vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque congue non augue eleifend iaculis. Mauris posuere ex justo, sit amet faucibus diam faucibus sollicitudin. Pellentesque efficitur tortor ac varius tincidunt.";
  const hiddenText = " Et dictum risus lacus quis sem. Sed ultrices sodales lorem, at lobortis odio porta vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque congue non augue eleifend iaculis. Mauris posuere ex justo, sit amet faucibus diam faucibus sollicitudin. Pellentesque efficitur tortor ac varius tincidunt.";
  const [showMore, setShowMore] = useState(false);
  const BASE_ASSETS = import.meta.env.VITE_BASE_ASSETS;

  const toggleShowMore = () => {
    setShowMore(prevState => !prevState);
  };

  const animatedDivRef = useRef<HTMLDivElement>(null!);
  const img3Ref = useRef<HTMLImageElement>(null!);

  const { slidesUpOnScroll } = useGsapFadeIn();
  const { verticalCurtainOnScroll } = useGsapImgCurtain();

  useEffect(() => {
    if (img3Ref.current) {
      verticalCurtainOnScroll(img3Ref.current, img3Ref.current);
    }
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const animatedDivChildren = Array.from(animatedDivRef.current.children);
      slidesUpOnScroll(animatedDivChildren as HTMLElement[], animatedDivRef.current);
    }, animatedDivRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={`${styles['about']}`}>
      <div ref={animatedDivRef} className={`${styles['care-about']}`}>
        <Heading as='h3' font='fancy'>This is what we care about</Heading>
        <ShowMoreText visibleText={text} hiddenText={hiddenText} showMoreText={showMore} onToggle={toggleShowMore} />
        <Button
          variant='underline'
          color='cream'
          text={showMore ? 'Show less -' : 'Know more about it +'}
          onClick={toggleShowMore}
        />
      </div>
      <div className={`${styles['care-about']}`}>
        <img src={BASE_ASSETS + sectionImages.aboutUs[0].src} alt="description" />
        <div ref={img3Ref} className={`${styles['curtain']}`}></div>
      </div>
    </section>
  )
}