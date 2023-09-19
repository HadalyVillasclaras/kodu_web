import { Heading, Curtain } from '../../../design-system/components/atoms';
import { useLayoutEffect, useRef } from 'react';
import styles from './About.module.scss';
import gsap from 'gsap';
import { slidesUpOnScroll } from '../../../design-system/animations/gsap';

const text = 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque congue non augue eleifend iaculis. Mauris posuere ex justo, sit amet faucibus diam faucibus sollicitudin. Pellentesque efficitur tortor ac varius tincidunt.';
const BASE_ASSETS = import.meta.env.VITE_BASE_ASSETS;

export const AboutIntro = () => {
  const paragraphRef = useRef<HTMLParagraphElement>(null!);
  const bigHeadingRef = useRef<HTMLElement>(null!);
  const curtain1 = useRef<HTMLDivElement>(null!);
  const curtain2 = useRef<HTMLDivElement>(null!);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const bigHeadingchildren = Array.from(bigHeadingRef.current.children);
      slidesUpOnScroll(bigHeadingchildren as HTMLElement[], bigHeadingRef.current);

      const paragraphChildren = Array.from(paragraphRef.current.children);
      slidesUpOnScroll(paragraphChildren as HTMLElement[], paragraphRef.current);
    }, bigHeadingRef);

    return () => { ctx.revert(); };
  }, []);

  return (
    <>
      <header ref={bigHeadingRef} className={styles['about-intro__header']}>
        <Heading font='fancy' as='h1'>Nourish Nature</Heading>
        <Heading font='fancy' as='h1'>Your Next Getaway</Heading>
      </header>
      <section className={`${styles['about-intro__content']}`}>
        <div className={`${styles['about-intro__content--left']}`}>
          <Curtain elementRef={curtain1} triggerElement={curtain1}>
            <img src={BASE_ASSETS + 'imgs/destinations/paraty/paraty-3.png'} alt="description" />
          </Curtain>
        </div>
        <div className={`${styles['about-intro__content--right']}`}>
          <div>
            <Curtain elementRef={curtain2} triggerElement={curtain2}>
              <img src={BASE_ASSETS + 'imgs/destinations/bloom/bloom-1.png'} alt="description" />
            </Curtain>
          </div>
          <section ref={paragraphRef}>
            <Heading as='h4' color='brown' font='fancy'>Sustainable destinations</Heading>
            <p >{text}</p>
          </section>
        </div>
      </section>
    </>
  );
};
