import { Heading, Curtain } from '../../../design-system/components/atoms';
import { useContext, useLayoutEffect, useRef } from 'react';
import sectionImages from '../../core/data/SectionImages.json';
import styles from './Hero.module.scss';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { slidesUpOnScroll } from '../../../design-system/animations/gsap';
gsap.registerPlugin(ScrollTrigger);
import { NavIconContext } from '../../contexts/NavIconContext';

const BASE_ASSETS = import.meta.env.VITE_BASE_ASSETS;
export const Hero = ({setLogoColor, isMobile}: any) => {
  const introTextRef = useRef<HTMLDivElement>(null!);
  const introImgRef = useRef<HTMLImageElement>(null!);
  const curtainHero = useRef<HTMLDivElement>(null!);
  const imgContainerRef = useRef<HTMLDivElement>(null!);
  const tlRef = useRef<any>(null!);
  const tlIconRef = useRef<any>(null!);

  const { setIconColor } = useContext(NavIconContext);

  
  useLayoutEffect(() => {
    if (!introTextRef.current || !introImgRef.current) {
      return;
    }
    const ctx = gsap.context(() => {
      const introTextChildren = Array.from(introTextRef.current.children);
      slidesUpOnScroll(introTextChildren as HTMLElement[], introTextRef.current, 1.8);

      tlRef.current = gsap.timeline({
        scrollTrigger: {
          trigger: imgContainerRef.current,
          start: '-=200 100',
          end: '50 100',
          scrub: 1,
          toggleActions: 'play none none reverse',
          onLeave: () => {setLogoColor('cream'); setIconColor('cream');}, 
          onLeaveBack: () => {setLogoColor('brown'); setIconColor('green');}, 
          onEnterBack:  () => {setLogoColor('brown'); setIconColor('cream');}, 
        },
      });

      tlRef.current
      .to(introImgRef.current, {
        width: '100%',
        borderRadius: '0px',
      });
      
      tlIconRef.current = gsap.timeline({
        scrollTrigger: {
          trigger: imgContainerRef.current,
          start: isMobile ? '+=10 center' : '+=150 center',
          end: '50 100',
          toggleActions: 'play none none reverse',
          onEnter: () => {setIconColor('cream');},
          onLeave: () => {setIconColor('cream');}, 
          onLeaveBack: () => {setIconColor('green');}, 
          onEnterBack:  () => {setIconColor('cream');}, 
        },
      });

    },  imgContainerRef);

    return () => { ctx.revert(); };
  }, []);
 
  return (
    <>
      <section className={styles['hero__sect-text']}>
        <div ref={introTextRef} className={styles['hero__sect-text-content']}>
          <Heading color='brown' as='h1'>Low-impact retreats</Heading>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eros justo, viverra non malesuada sit amet, ultricies at risus. Quisque quis nisl sit amet libero ullamcorper scelerisque. Proin finibus commodo ornare. Sed at mauris vel neque tincidunt condimentum.</p>
        </div>
      </section>
      <section ref={imgContainerRef} className={styles['hero__sect-img']}>
        <Curtain elementRef={curtainHero} bgColor="cream" triggerElement={introTextRef} delay={3}>
          <img ref={introImgRef}   src={`${BASE_ASSETS}${sectionImages.hero.src}`} alt={sectionImages.hero.alt} />
        </Curtain>
      </section>
    </>
  );
};
