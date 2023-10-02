import { Heading, Curtain } from '../../../design-system/components/atoms';
import { useLayoutEffect, useEffect, useRef } from 'react';
import sectionImages from '../../core/data/SectionImages.json';
import styles from './Hero.module.scss';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { slidesUpOnScroll } from '../../../design-system/animations/gsap';

gsap.registerPlugin(ScrollTrigger);

const BASE_ASSETS = import.meta.env.VITE_BASE_ASSETS;
export const Hero = ({setLogoColor}: any) => {
  const introTextRef = useRef<HTMLDivElement>(null!);
  const introImgRef = useRef<HTMLImageElement>(null!);
  const curtainHero = useRef<HTMLDivElement>(null!);

  useLayoutEffect(() => {
    if (!introTextRef.current || !introImgRef.current) {
      return;
    }
    const ctx = gsap.context(() => {
      const introTextChildren = Array.from(introTextRef.current.children);
      slidesUpOnScroll(introTextChildren as HTMLElement[], introTextRef.current, 1.8);

      gsap.to(introImgRef.current, {
        scrollTrigger: {
          trigger: introImgRef.current,
          start: '-=200 100',
          end: '100 100',
          scrub: true,
          toggleActions: 'play none none reverse',
          // markers: true,
          onLeave: () => {handleEnd('cream');}, 
          onLeaveBack: () => {handleEnd('brown');}, 
          onEnterBack:  () => {handleEnd('brown');}, 
        },
        width: '100%',
        borderRadius: '0px'
      });
    },  introImgRef);

    return () => { ctx.revert(); };
  }, []);

  function handleEnd(color) {
    console.log(color);
    setLogoColor(color);
  }

  return (
    <>
      <section className={styles['hero__sect-text']}>
        <div ref={introTextRef} className={styles['hero__sect-text-content']}>
          <Heading color='brown' as='h4'>Sustainable destinations</Heading>
          <p>Lorem ipsum dolor sit amet. Nunc auctor, et risus lacus quis sem. Sed sodales lorem, at lobortis odio porta vel. Nunc auctor. Class aptent et risus lacus quis sem taciti sociosqu ad litora torquent per nostra.</p>
        </div>
      </section>
      <section className={styles['hero__sect-img']}>
        <Curtain elementRef={curtainHero} bgColor="cream" triggerElement={introTextRef} delay={3}>
          <img ref={introImgRef}   src={`${BASE_ASSETS}${sectionImages.hero.src}`} alt={sectionImages.hero.alt} />
        </Curtain>
      </section>
    </>
  );
};
