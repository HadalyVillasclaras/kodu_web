import { Link, Logo } from '../../design-system/atoms';
import { useContext, useLayoutEffect, useEffect, useRef, useState } from 'react';
import { useGsapSlidesUp } from '../../hooks/gsap';
import { NavIconContext } from '../../contexts/NavIconContext';
import { useOnviewObserver } from '../../hooks/useOnviewObserver';
import styles from './Footer.module.scss';
import navItems from '../../config/data/NavItems.json';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  const listRefs = useRef<HTMLElement[]>([]);
  const policiesRef = useRef<HTMLElement>(null!);
  const footerRef = useRef<HTMLElement>(null!);
  const [hasIntersected, setHasIntersected] = useState(false);
  const { setHidden } = useContext(NavIconContext);
  
  const { slidesUpOnScroll } = useGsapSlidesUp();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      slidesUpOnScroll(listRefs.current, footerRef.current);

      //  ScrollTrigger.create({
      //   trigger: footerRef.current,
      //   start: "top 50%",
      //   end: "bottom 50%",
      //   markers: true,
      //   onEnter: () => {
      //     setHidden(true);
      //   },
      //   onLeave: () => {
      //     setHidden(false);
      //   },
      //   onEnterBack: () => {
      //     setHidden(true);

      //   },
      //   onLeaveBack: () => {
      //     setHidden(false);
      //   }
      // });
    }, footerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const refsToObserve = {
    footer: footerRef
  };

  const inViewSectionId = useOnviewObserver(refsToObserve);

  function hideNavIconOnFooter() {
    if (inViewSectionId === "footer") {
      setHidden(true);
      setHasIntersected(true);
    }
    if (hasIntersected && inViewSectionId !== "footer") {
      setHidden(false);
    }
  }

  useEffect(() => {
    hideNavIconOnFooter();
  }, [inViewSectionId]);

  return (
    <footer id="footer" ref={footerRef} className={styles["footer"]}>
      <section>
        <Logo color='cream' size='15rem' />
      </section>
      <ul className={styles["footer__nav-list"]}>
        {navItems.map((navItem, index) => (
          <li
            key={index}
            ref={el => { if (el) listRefs.current[index] = el }}
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