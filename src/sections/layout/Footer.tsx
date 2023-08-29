import styles from './Footer.module.scss';
import navItems from '../../config/data/NavItems.json';
import { Link, Logo } from '../../design-system/atoms';
import { useContext, useLayoutEffect, useRef } from 'react';
import { useGsapFadeIn } from '../../hooks/gsap/useGsapFadeIn';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavIconContext } from '../../contexts/NavIconContext';
gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  const { slidesUpOnScroll } = useGsapFadeIn();
  const listRefs = useRef<HTMLElement[]>([]);
  const policiesRef = useRef<HTMLElement>(null!);
  const footerRef = useRef<HTMLElement>(null!);

  const { setHidden } = useContext(NavIconContext);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      slidesUpOnScroll(listRefs.current, footerRef.current);
    }, footerRef);

    const trigger = ScrollTrigger.create({
      trigger: footerRef.current,
      start: "top 50%",
      end: "bottom 50%",
      markers: true,
      onEnter: () => {
        console.log("Footer entered the viewport");
        setHidden(true);
      },
      onLeave: () => {
        console.log("Footer left the viewport");
        setHidden(false);
      },
      onEnterBack: () => {
        console.log("Footer re-entered the viewport from the bottom");
        setHidden(true);

      },
      onLeaveBack: () => {
        console.log("Footer re-left the viewport from the top");
        setHidden(false);

      }
    });

    return () => {
      ctx.revert();
      trigger.kill();
    };
  }, []);

  return (
    <footer id="footer" ref={footerRef} className={styles["footer"]}>
      <section className={styles["footer__logo"]}>
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