import { useLayoutEffect, useRef} from 'react';
import styles from './HorizontalSection.module.scss';
import gsap from 'gsap';
import sectionImages from '../../../core/data/SectionImages.json';
import { Heading } from '../../../../design-system/components/atoms';
import { CareAbout } from './CareAbout';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const BASE_ASSETS = import.meta.env.VITE_BASE_ASSETS;
gsap.registerPlugin(ScrollTrigger);

export const HorizontalSection = () => {
  const horContainerRef = useRef<any>(null!);
  const panelsRef = useRef<any>(null!);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let panels = panelsRef.current?.children;
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: panelsRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + panelsRef?.current?.offsetWidth,
          // markers: true
        }
      });

   
    }, horContainerRef);
    return () => { 
      ctx.revert(); 
    };
  }, []);

  return (
    <div ref={horContainerRef} className={`${styles['horizontal-container']}`}>
      <section ref={panelsRef} className={`${styles['horizontal-panels']}`}>
        <section className={`${styles.panel} ${styles['panel-care']}`}>
          <CareAbout/>
        </section>
        <section className={`${styles.panel} ${styles['panel-text']}`}>
          <Heading font='fancy' as='h1' color='brown'>Class taciti sociosqu ad litora torquent per conubia nostra</Heading>
        </section>
        <section className={`${styles.panel} ${styles['panel-img']}`}>
          <img src={BASE_ASSETS + sectionImages.aboutUs[1].src} alt={sectionImages.aboutUs[1].alt} />
        </section>
      </section>
    </div>
  );
};