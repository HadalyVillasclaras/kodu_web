import { useContext, useLayoutEffect, useRef } from 'react';
import styles from './HorizontalSection.module.scss';
import gsap from 'gsap';
import sectionImages from '../../../core/data/SectionImages.json';
import { Heading } from '../../../../design-system/components/atoms';
import { CareAbout } from './CareAbout';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NavIconContext } from '../../../contexts/NavIconContext';
import { Colors } from '../../../../design-system/tokens';

const BASE_ASSETS = import.meta.env.VITE_BASE_ASSETS;
gsap.registerPlugin(ScrollTrigger);

export const HorizontalSection = () => {
  const horContainerRef = useRef<any>(null!);
  const panelsRef = useRef<any>(null!);
  const { setIconColor } = useContext(NavIconContext);

  const sectionRefs = {
    horCareAbout: useRef(null),
    horText: useRef(null),
    horImg: useRef(null),
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let panels = panelsRef.current?.children;
      const iconColors = ['cream', 'brown', 'green'];

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: panelsRef.current,
          pin: true,
          scrub: 0.3,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + panelsRef?.current?.offsetWidth,
          onUpdate: self => {
            const panelIndex = Math.round(self.progress * (panels.length - 1));
            setIconColor(iconColors[panelIndex] as Colors);
          }
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
        <section id="horCareAbout" ref={sectionRefs.horCareAbout} className={`${styles.panel} ${styles['panel-care']}`}>
          <CareAbout />
        </section>
        <section id="horText" ref={sectionRefs.horText} className={`${styles.panel} ${styles['panel-text']}`}>
          <Heading font='fancy' as='h2' color='brown'>Tincidaant a faucibus exum, cras tincidunt exum non lacus </Heading>
        </section>
        <section id="horImg" ref={sectionRefs.horImg} className={`${styles.panel} ${styles['panel-img']}`}>
          <img src={BASE_ASSETS + sectionImages.aboutUs[1].src} alt={sectionImages.aboutUs[1].alt} />
        </section>
      </section>
    </div>
  );
};