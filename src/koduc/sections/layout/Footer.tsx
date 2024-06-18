import { Link, Logo } from '../../../design-system/components/atoms';
import { useLayoutEffect, useRef } from 'react';
import styles from './Footer.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { slidesUpOnScroll } from '../../../design-system/animations/gsap';
import { Credits } from '.';
import { useHideNavIcon } from '../../hooks';

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  const footerRef = useRef<HTMLElement>(null!);
  const fContactRef = useRef<HTMLElement>(null!);
  const policiesRef = useRef<HTMLElement>(null!);
  const footerLogoRef = useRef<HTMLElement>(null!);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      const footerChildrenRefs = [footerLogoRef];
      
      footerChildrenRefs.forEach(childRef => {
        const childItems = Array.from(childRef.current.children);
        slidesUpOnScroll(childItems as HTMLElement[], footerRef.current);
      });
    }, footerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const refsToObserve = {
    footer: footerRef
  };
  useHideNavIcon('footer', refsToObserve);

  return (
    <footer ref={footerRef} id="footer">
      <section ref={footerLogoRef} className={styles['footer-sect']}>
        <section >
          <Logo color='cream'/>
        </section>
  
        <section className={styles['footer-sect__footer']}>
          <section ref={fContactRef} className={styles['footer-sect__contact']}>
            <p>info@koduc.com</p>
            <p>+45 564 545 342</p>
          </section>
          <section ref={policiesRef} className={styles['footer-sect__policies']}>
            <Link color='cream' size="xs" href=''>Terms & Conditions</Link>
            <Link color='cream' size="xs" href=''>Cookies</Link>
            <Link color='cream' size="xs" href=''>Privacy Policy</Link>
          </section>
        </section>
      </section>
      <Credits />
    </footer>
  );
};
