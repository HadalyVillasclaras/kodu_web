import { Heading, Logo } from '../../design-system/atoms';
import styles from './Header.module.scss';
import { CheckAvailabilityForm } from '../../design-system/molecules/CheckAvailabilityForm';
import { Divider } from '../../design-system/atoms/Divider';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { useGsapWidthExpand } from '../../shared/hooks/useGsapWidthExpand';
import { gsap } from 'gsap';

export const Header = () => {
  const dividerRef = useRef<HTMLHRElement | null>(null);
  const logoMain = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const { expandWidthOnScroll } = useGsapWidthExpand();

  useEffect(() => {
   
  }, []);

  useLayoutEffect(() => {
    setTimeout(() => {
      expandWidthOnScroll(dividerRef.current, `.${styles['header']}`);
    }, 3000);

    
    let ctx = gsap.context(() => {
      gsap.from(logoMain.current, 
      {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top top",
          end: "+=500px",
          pinSpacing: false,
          scrub: true,
          pin: true
        },
        transformOrigin: "top left",
        width: "55vw",
        ease: "power3.out",
        y: "50px",
        x: "20px",
        duration: 20,
      })
    }, headerRef)
    return () => ctx.revert();
    }, [])

  return (
    <>
      <header ref={headerRef} className={styles["header"]}>
        <div className={styles["header-navtool"]}>
        </div>
        <div className={styles["header__flex"]}>
          <div className={styles["header__flex-logo-place"]}>
            <div ref={logoMain} className={styles["header__flex-logo"]} >
              <a href='/kodu_web/' >
                <svg viewBox="0 0 803 299" xmlns="http://www.w3.org/2000/svg">
                  <path d="M52.4864 242H0.314453V3.14055H52.4864V242ZM92.4011 3.14055H147.716L95.5439 81.0842C102.458 55.9411 101.201 25.7693 92.4011 3.14055ZM163.116 242H108.115L55.6293 122.256C72.9152 109.37 84.8581 97.4272 93.6582 84.5413L163.116 242Z" fill="#7E3418"/>
                  <path d="M211.084 122.885C211.084 185.742 217.999 235.4 233.713 245.143C185.313 241.686 156.712 187.942 156.712 122.885C156.712 51.541 187.198 4.08342 233.713 0.940536C217.37 10.6835 211.084 60.0268 211.084 122.885ZM261.999 122.885C261.999 60.0268 255.713 10.6835 239.37 0.940536C285.885 4.08342 316.371 51.541 316.371 122.885C316.371 187.942 287.771 241.686 239.37 245.143C255.085 235.4 261.999 185.742 261.999 122.885Z" fill="#7E3418"/>
                  <path d="M386.111 242H333.939V3.14055H386.111V242ZM483.226 119.742C483.226 199.257 445.826 242 393.654 242C417.854 237.6 428.854 198.628 428.854 121.313C428.854 49.9696 415.026 8.16918 393.654 3.14055C431.997 3.14055 483.226 36.4552 483.226 119.742Z" fill="#7E3418"/>
                  <path d="M626.621 180.399C626.621 201.142 626.621 245.457 565.649 245.457C499.648 245.457 499.648 197.371 499.648 170.656V3.14055H551.82V167.199C551.82 193.6 551.82 233.514 588.592 233.514C609.963 233.514 625.678 218.743 626.621 180.399ZM594.878 3.14055H626.621V168.771C622.849 66.9412 615.621 28.9122 594.878 3.14055Z" fill="#7E3418"/>
                  <path d="M697.542 124.77C697.542 187.628 703.828 236.971 720.171 246.714C673.656 243.571 643.17 196.114 643.17 124.77C643.17 59.7125 671.77 5.96915 720.171 2.51198C704.456 12.2549 697.542 61.9126 697.542 124.77ZM748.457 124.77C748.457 61.9126 741.542 12.2549 725.828 2.51198C774.228 5.96915 802.829 59.7125 802.829 124.77C802.829 196.114 772.343 243.571 725.828 246.714C742.171 236.971 748.457 187.628 748.457 124.77ZM672.399 284.429V248.6L790.886 257.714V298.572L672.399 284.429Z" fill="#7E3418"/>
                </svg>
              </a>
            </div>
          </div>
          <p>HEY</p>
          {/* <CheckAvailabilityForm /> */}
        </div>
      {/* <Divider ref={dividerRef}/> */}
      </header>
      <main>
        <section className={styles["block1"]}>
          <div className={styles["block1__container"]}>
            <div></div>
            <div className={styles["block1__container-content"]}>
              <Heading color='brown' as='h4'>Sustainable lodgins</Heading>
              <p>Lorem ipsum dolor sit amet. Nunc auctor, et risus lacus quis sem. Sed sodales lorem, at lobortis odio porta vel. Nunc auctor. Class aptent et risus lacus quis sem taciti sociosqu ad litora torquent per nostra.</p>
            </div>
          </div>
        </section>

      </main>

    </>
  )
}