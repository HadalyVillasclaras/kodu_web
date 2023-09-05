import { Colors } from '../types'
import styles from './Frieze.module.scss';
import { useState, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { AvailabilityForm } from '../molecules/AvailabilityForm';
type Props = {
  color?: Colors;
}

export const Frieze = ({ color = "brown" }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const menuTween = useRef<gsap.core.Tween | null>(null);

  useLayoutEffect(() => {
    if (!menuTween.current) {
      menuTween.current = gsap.to(menuRef.current, {
        y: '0%',
        borderBottomLeftRadius: '35px',
        borderBottomRightRadius: '35px',
        ease: 'linear',
        paused: true
      });
    }
    return () => {
      menuTween.current?.kill();
    };
  }, []);

  const toggleMenu = () => {
    if (!isMenuOpen) {
      menuTween.current?.play();
    } else {
      menuTween.current?.reverse();
    }
     setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div onClick={toggleMenu} className={`${styles[`frieze`]} ${styles[`frieze__bg--${color}`]}`} >
      </div>
      <div
        ref={menuRef}
        className={`${styles[`dropdown`]}`}
      >
        <section>
          <section >
            <div>
              <p>KODU is a fictional project made with</p>
              <p>React | Typescript | SCSS | NodeJS</p>
            </div>
          </section>
          <section>
            <p>Design & web development by Hadaly Villasclaras © 2023</p>
          </section>

          <AvailabilityForm />

        </section>
      </div>
    </>
  )
}