import styles from "./Hero.module.scss";
import sectionImages from '../../config/data/SectionImages.json';
import { Heading } from "../../design-system/atoms";

export const Hero = () => {
  const BASE_ASSETS = import.meta.env.VITE_BASE_ASSETS;

  return (
    <>
      <section className={styles["block1"]}>
        <div className={styles["block1__container"]}>
          <div></div>
          <div className={styles["block1__container-content"]}>
            <Heading color='brown' as='h4'>Sustainable lodgins</Heading>
            <p>Lorem ipsum dolor sit amet. Nunc auctor, et risus lacus quis sem. Sed sodales lorem, at lobortis odio porta vel. Nunc auctor. Class aptent et risus lacus quis sem taciti sociosqu ad litora torquent per nostra.</p>
          </div>
        </div>
      </section>
      <section className={styles['hero']}>
        <section className={styles['hero__image-container']}>
          <img className={styles['hero__image']} src={`${BASE_ASSETS}${sectionImages.hero.src}`} alt={sectionImages.hero.alt} />
        </section>
      </section>
    </>
  )
}
