import { useLayoutEffect, useRef } from 'react';
import { Icon, Link } from '../../design-system/atoms'
import styles from './Credits.module.scss';
import { gsap } from 'gsap';

export const Credits = () => {
  const creditsBgRef = useRef(null);
  let toggleCredits: any;


  function handleToggle() {
    if (toggleCredits.progress() === 0) {
      toggleCredits.play();
    } else {
      toggleCredits.reverse();
    }
}
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
    toggleCredits = gsap.fromTo(creditsBgRef.current, {
      height: "35vh",
      duration: 0.5,
      paused: true,
      ease: "power1.in",
    }, 
    {
      height: "38px",
      duration: 0.5,
      paused: true,
      ease: "power1.out",

    })}, creditsBgRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className={`${styles["credits__container"]}`} >
    <div className={`${styles["credits__bg"]}`} ref={creditsBgRef}>
      <section className={`${styles["credits"]}`}>
        <section className={`${styles["credits__sect"]} ${styles["credits__sect-up"]}`}>
          <div>
            <p>KODU is a fictional project made with</p>
            <p>React | Typescript | SCSS | NodeJS</p>
          </div>
          <Link openInNewTab={true} size='s' color="green" href='https://github.com/HadalyVillasclaras/kodu_web'>GitHub</Link>
        </section>
        <section className={`${styles["credits__sect"]} ${styles["credits__sect-down"]}`}>
          <p>Design & web development by Hadaly Villasclaras © 2023</p>
        </section>
      </section>
    </div>
      <span onClick={handleToggle} className={`${styles["credits__toggle"]}`} >
        <Icon color='cream' variant='circle' icon='plus' />
      </span>
    </div>
  )
}