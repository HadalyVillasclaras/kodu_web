import { Heading } from '../../design-system/atoms';
import { useLayoutEffect, useRef } from "react";
import { useGsapSlidesUp } from "../../hooks/gsap";
import styles from "./AboutUs.module.scss";

import gsap from 'gsap';
import { Curtain } from '../../design-system/atoms/Curtain';

const text = "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque congue non augue eleifend iaculis. Mauris posuere ex justo, sit amet faucibus diam faucibus sollicitudin. Pellentesque efficitur tortor ac varius tincidunt.";
const BASE_ASSETS = import.meta.env.VITE_BASE_ASSETS;

export const AboutIntro = () => {
  const paragraphRef = useRef<HTMLParagraphElement>(null!);
  const bigHeadingRef = useRef<HTMLElement>(null!);
  const curtain1 = useRef<HTMLDivElement>(null!);
  const curtain2 = useRef<HTMLDivElement>(null!);

  const { slidesUpOnScroll } = useGsapSlidesUp();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const bigHeadingchildren = Array.from(bigHeadingRef.current.children);
      slidesUpOnScroll(bigHeadingchildren as HTMLElement[], bigHeadingRef.current);

      const paragraphChildren = Array.from(paragraphRef.current.children);
      slidesUpOnScroll(paragraphChildren as HTMLElement[], paragraphRef.current);
    }, bigHeadingRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <header ref={bigHeadingRef} className={styles['intro-about__header']}>
        <Heading font='fancy' as='h1'>Nourish Nature</Heading>
        <Heading font='fancy' as='h1'>Your Next Getaway</Heading>
      </header>
      <section className={`${styles['intro-about']}`}>
        <div className={`${styles['intro-about-left']}`}>
          <img src={BASE_ASSETS + 'imgs/destinations/paraty/paraty-3.png'} alt="description" />
          <Curtain elementRef={curtain1} triggerElement={curtain1}/>
        </div>
        <div className={`${styles['intro-about-right']}`}>
          <div>
            <img src={BASE_ASSETS + 'imgs/destinations/bloom/bloom-1.png'} alt="description" />
            <Curtain elementRef={curtain2} triggerElement={curtain2}/>
          </div>
          <section ref={paragraphRef}>
            <Heading as='h4' color='brown' font='fancy'>Sustainable destinations</Heading>
            <p >{text}</p>
          </section>
        </div>
      </section>
    </>
  )
}
