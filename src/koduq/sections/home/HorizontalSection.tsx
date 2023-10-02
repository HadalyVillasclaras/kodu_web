import React, { useRef, useLayoutEffect, useEffect } from 'react';
import { AboutUs, Destinations, Features } from '.';
import styles from './HorizontalSection.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
        duration: 3,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end:`+=${getScrollAmount() * -1}`,
          pin: true,
          scrub: 2,
          invalidateOnRefresh: true,
        }
      });
    }, containerRef);
    return () => { ctx.revert(); };
  }, []);

  return (
    <div ref={containerRef} className={`${styles['horizontal-container']}`}>
      <section ref={panelsRef} className={`${styles['horizontal-panels']}`}>
        <section className={`${styles.panel}`}>
          <AboutUs/>
        </section>
        <section className={`${styles.panel}`}>
          <Features/>
        </section>
        <section className={`${styles.panel}`}>
          <Destinations/>
        </section>
        <section className={`${styles.panel}`}>C</section>
      </section>
    </div>
  );
};