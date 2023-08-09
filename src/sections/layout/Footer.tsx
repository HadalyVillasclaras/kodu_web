import styles from './Footer.module.scss';
import navItems from '../../config/data/NavItems.json';
import { Link, Logo } from '../../design-system/atoms';
import { useEffect, useRef } from 'react';
import { useGsapFadeIn } from '../../shared/hooks/useGsapFadeIn';

export const Footer = () => {
  const { fadeInOnScroll } = useGsapFadeIn();
  const listRefs = useRef<HTMLElement[]>([]); 
  const policiesRef = useRef<HTMLElement>(null!); 


  useEffect(() => {
      fadeInOnScroll(listRefs.current, `.${styles['footer']}`);
      // fadeInOnScroll(policiesRef.current, `.${styles['footer']}`);
  }, []);

  return (
    <footer className={styles["footer"]}>
      <Logo color='cream' size={7} />
      <ul className={styles["footer__nav-list"]}>
        {navItems.map((navItem, index) => (
          <li 
            key={index}
            ref={el => { if(el) listRefs.current[index] = el}}
          >
            <Link color='cream' size='l' href={navItem.link}>{navItem.name}</Link>
          </li>
        ))}
      </ul>
      <section className={styles["footer__contact"]}>
        <p>info@koduhost.com</p>
        <p>+45 564 545 342</p>
      </section>
      <section ref={policiesRef} className={styles["footer__policies"]}>
        <p><Link color='brown' size="s" href='#!'>Terms & Conditions</Link></p>
        <p><Link color='brown' size="s" href='#!'>Cookies</Link></p>
        <p><Link color='brown' size="s" href='#!'>Privacy Policy</Link></p>
      </section>
    </footer>
  )
}