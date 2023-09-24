import { Link, Logo } from '../../../design-system/components/atoms';
import { useLayoutEffect, useRef } from 'react';
import styles from './Footer.module.scss';
import navItems from '../../core/data/NavItems.json';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useHideNavIcon } from '../../hooks/useHideNavIcon';
import { slidesUpOnScroll } from '../../../design-system/animations/gsap';
import { useHandleNavigation } from '../../core/utils/useHandleNavigation';
import { Credits } from '.';

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  const footerRef = useRef<HTMLElement>(null!);
  const ulRefs = useRef<HTMLUListElement>(null!);
  const fContactRef = useRef<HTMLElement>(null!);
  const policiesRef = useRef<HTMLElement>(null!);
  const footerLogoRef = useRef<HTMLElement>(null!);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const footerChildrenRefs = [ulRefs, policiesRef, fContactRef, footerLogoRef];

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
  const handleNavigation = useHandleNavigation();
  useHideNavIcon('footer', refsToObserve);

  return (
    <footer ref={footerRef} id="footer">
    <section className={styles['footer-sect']}>
      <section ref={footerLogoRef}>
        <Logo color='cream' size='15rem' />
      </section>
      <ul ref={ulRefs} className={styles['footer-sect__nav-list']}
      >
        {navItems.map((navItem, index) => (
          <li key={index}
          onClick={(event) => handleNavigation(event, navItem.link)}>
            <Link color='cream' size='l' href={navItem.link}>{navItem.name}</Link>
          </li>
        ))}
      </ul>
      <section className={styles['footer-sect__footer']}>
        <section ref={fContactRef} className={styles['footer-sect__contact']}>
          <p>info@koduhost.com</p>
          <p>+45 564 545 342</p>
        </section>
        <section ref={policiesRef} className={styles['footer-sect__policies']}>
          <Link color='brown' size="xs" href='#!'>Terms & Conditions</Link>
          <Link color='brown' size="xs" href='#!'>Cookies</Link>
          <Link color='brown' size="xs" href='#!'>Privacy Policy</Link>
        </section>
      </section>
    </section>
    <Credits/>
    </footer>
  );
};
