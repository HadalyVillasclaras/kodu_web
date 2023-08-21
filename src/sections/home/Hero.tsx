import styles from "./Hero.module.scss";
import sectionImages from '../../config/data/SectionImages.json';

export const Hero = () => {
  const BASE_ASSETS = import.meta.env.VITE_BASE_ASSETS;

  return (
      <section className={styles['hero']}>
        <section className={styles['hero__image-container']}>
          <img className={styles['hero__image']} src={`${BASE_ASSETS}${sectionImages.hero.src}`} alt={sectionImages.hero.alt} />
        </section>
      </section>
  )
}
