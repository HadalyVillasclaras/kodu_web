import styles from "./AboutUs.module.scss";
import { Heading } from '../../design-system/atoms';
import { useEffect, useRef } from "react";
import { useGsapFadeIn } from "../../hooks/gsap/useGsapFadeIn";
import { useGsapImgCurtain } from "../../hooks/gsap/useGsapImgCurtain";

export const AboutIntro = () => {
  const text = "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque congue non augue eleifend iaculis. Mauris posuere ex justo, sit amet faucibus diam faucibus sollicitudin. Pellentesque efficitur tortor ac varius tincidunt.";
  const BASE_ASSETS = import.meta.env.VITE_BASE_ASSETS;

  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const headingRef = useRef<HTMLElement>(null!);
  const img1Ref = useRef<HTMLImageElement>(null!);
  const img2Ref = useRef<HTMLImageElement>(null!);


  const { fadeInOnScroll } = useGsapFadeIn();
  const { verticalCurtainOnScroll } = useGsapImgCurtain();


  useEffect(() => {
    if (paragraphRef.current) {
      fadeInOnScroll(paragraphRef.current, paragraphRef.current);
    }

    if (headingRef.current) {
      fadeInOnScroll(headingRef.current, headingRef.current);
    }

    if (img1Ref.current) {
      verticalCurtainOnScroll(img1Ref.current, img1Ref.current);
    }

    if (img2Ref.current) {
      verticalCurtainOnScroll(img2Ref.current, img2Ref.current);
    }
  }, []);


  return (
    <>
      <header ref={headingRef} className={styles['intro-about__header']}>
        <Heading font='fancy' as='h1'>Nourish Nature</Heading>
        <Heading font='fancy' as='h1'>Your Next Getaway</Heading>
      </header>
      <section className={`${styles['intro-about']}`}>
        <div className={`${styles['intro-about-left']}`}>
          <img src={BASE_ASSETS + 'imgs/homes/paraty/paraty-3.png'} alt="description" />
          <div ref={img1Ref} className={`${styles['curtain']}`}></div>
        </div>
        <div className={`${styles['intro-about-right']}`}>
          <div>
            <img src={BASE_ASSETS + 'imgs/homes/bloom/bloom-1.png'} alt="description" />
            <div ref={img2Ref} className={`${styles['curtain']}`}></div>
          </div>
          <section ref={paragraphRef}>
            <Heading as='h4' color='brown' font='fancy'>Sustainable lodgings</Heading>
            <p >{text}</p>
          </section>
        </div>
      </section>
    </>
  )
}
