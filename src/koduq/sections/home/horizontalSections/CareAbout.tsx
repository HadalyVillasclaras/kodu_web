import { useLayoutEffect, useRef } from 'react';
import { Heading, Curtain } from '../../../../design-system/components/atoms';
import { ShowMoreText } from '../../../../design-system/components/molecules';
import sectionImages from '../../../core/data/SectionImages.json';
import styles from './CareAbout.module.scss';
import gsap from 'gsap';
import { slidesUpOnScroll } from '../../../../design-system/animations/gsap';

const aboutUsText = 'Adipiscing elit. Nunc auctor, ante in rhoncus pulvinar, arcu orci dapibus nisl, et dictum risus lacus quis sem. Sed ultrices sodales lorem, at lobortis odio porta vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque congue non augue eleifend iaculis. Mauris posuere ex justo, sit amet faucibus diam faucibus sollicitudin. Pellentesque efficitur tortor ac varius tincidunt. Et dictum risus lacus quis sem. Sed ultrices sodales lorem, at lobortis odio porta vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque congue non augue eleifend iaculis. Mauris posuere ex justo, sit amet faucibus diam faucibus sollicitudin. Pellentesque efficitur tortor ac varius tincidunt.';
const BASE_ASSETS = import.meta.env.VITE_BASE_ASSETS;

export const CareAbout = () => {
  const animatedDivRef = useRef<HTMLDivElement>(null!);
  const careAboutImg = useRef<HTMLImageElement>(null!);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const animatedDivChildren = Array.from(animatedDivRef.current.children);
      slidesUpOnScroll(animatedDivChildren as HTMLElement[], animatedDivRef.current);
    }, animatedDivRef);

    return () => { ctx.revert(); };
  }, []);

  return (
    <section className={`${styles['care-about']}`}>
      <div ref={animatedDivRef} className={`${styles['care-about__elm']}`}>
        <Heading as='h2' font='fancy'>This is what we care about</Heading>
        <ShowMoreText
          text={aboutUsText}
          limit={200}
          buttonShowMoreText="Know more about it +"
          buttonShowLessText="Show less -"
          buttonColor="cream"
        />
      </div>
      <div className={`${styles['care-about__elm']}`}>
        <Curtain elementRef={careAboutImg} triggerElement={careAboutImg}>
          <img src={BASE_ASSETS + sectionImages.horizontal[0].src} alt={sectionImages.horizontal[0].alt} />
        </Curtain>
      </div>
    </section>
  );
};