import { useRef, useEffect } from 'react';
import styles from './HorizontalSection.module.scss';
import gsap from 'gsap';
import sectionImages from '../../../core/data/SectionImages.json';
import { Heading } from '../../../../design-system/components/atoms';
import { CareAbout } from './CareAbout';
const BASE_ASSETS = import.meta.env.VITE_BASE_ASSETS;

export const HorizontalSection = () => {
  const containerRef = useRef(null);
  const panelsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      function getScrollAmount() {
        const panelsWidth = panelsRef.current?.offsetWidth;
        return  -(panelsWidth - window.innerWidth);
      }

      gsap.to(panelsRef.current, {
        x: getScrollAmount,
        // duration: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end:`+=${getScrollAmount() * -1}`,
          pin: true,
          anticipatePin: 1,
          scrub: 0.1,
          snap: 0,
          invalidateOnRefresh: true,
        }
      });
    }, containerRef);
    return () => { ctx.revert(); };
  }, []);

  return (
    <div ref={containerRef} className={`${styles['horizontal-container']}`}>
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