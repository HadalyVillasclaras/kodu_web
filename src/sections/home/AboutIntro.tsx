import styles from "./AboutUs.module.scss";
import { Heading } from '../../design-system/atoms';
import { useEffect, useRef } from "react";
import { useGsapFadeIn } from "../../shared/hooks/useGsapFadeIn";

export const AboutIntro = () => {
  const text = "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque congue non augue eleifend iaculis. Mauris posuere ex justo, sit amet faucibus diam faucibus sollicitudin. Pellentesque efficitur tortor ac varius tincidunt.";
  const BASE_ASSETS = import.meta.env.VITE_BASE_ASSETS;

  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const headingRef = useRef<HTMLElement>(null!);
  const { fadeInOnScroll } = useGsapFadeIn();

  useEffect(() => {
    if(paragraphRef.current) {
      fadeInOnScroll(paragraphRef.current, paragraphRef.current);
    }

    if(headingRef.current) {
      fadeInOnScroll(headingRef.current, headingRef.current);
    }
  }, []);


return (
  <>
    <header ref={headingRef} className={styles['intro-about__header']}>
      <Heading font='fancy' as='h1'>Nourish Nature</Heading>
      <Heading font='fancy' as='h1'>Your Next Getaway</Heading>
    </header>
    <section className={`${styles['intro-about']}`}>
      <img className={`${styles['intro-about-left']}`} src={BASE_ASSETS + 'imgs/homes/paraty/paraty-3.png'} alt="description" />
      <div className={`${styles['intro-about-right']}`}>
      <img src={BASE_ASSETS + 'imgs/homes/bloom/bloom-1.png'} alt="description" />
        <section ref={paragraphRef}>
          <Heading as='h4' color='brown' font='fancy'>Sustainable lodgings</Heading>
          <p >{text}</p>
        </section>
      </div>
    </section>
  </>
)
}
