import styles from './Footer.module.scss';
import navItems from '../../config/data/NavItems.json';
import { Link, Logo } from '../../design-system/atoms';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { useGsapFadeIn } from '../../hooks/gsap/useGsapFadeIn';
import { useNavIconColor } from '../../contexts/NavIconContext';
import { useOnviewObserver } from '../../hooks/useOnviewObserver';
import { Colors } from '../../design-system/types';
import gsap from 'gsap';

export const Footer = () => {
  const { slidesUpOnScroll } = useGsapFadeIn();
  const listRefs = useRef<HTMLElement[]>([]); 
  const policiesRef = useRef<HTMLElement>(null!); 
  const footerRef = useRef<HTMLElement>(null!);
  
  // const { setIconColor, setRotate } = useNavIconColor();
  // const inViewSectionId = useOnviewObserver({ footer: footerRef });
  // useEffect(() => {
  //   if (inViewSectionId === "footer") {
  //     console.log('hey');
  //     setIconColor('cream' as Colors);
  //     setRotate(true);
  //     setTimeout(() => { setRotate(false) }, 1500);
  //   } else {
  //     setIconColor('green' as Colors);
  //   }
  // }, [inViewSectionId]);


  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      slidesUpOnScroll(listRefs.current, footerRef.current);
    }, footerRef);

    return () => ctx.revert();
  }, []);


  return (
    <footer id="footer" ref={footerRef}  className={styles["footer"]}>
      <section className={styles["footer__logo"]}>
      <Logo color='cream' size='15rem'/>
      </section>
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
        <Link color='brown' size="s" href='#!'>Terms & Conditions</Link>
        <Link color='brown' size="s" href='#!'>Cookies</Link>
        <Link color='brown' size="s" href='#!'>Privacy Policy</Link>
      </section>
    </footer>
  )
}