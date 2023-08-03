import styles from "./Hero.module.scss";
import { Heading } from '../../design-system/atoms';
import sectionImages from '../../config/data/SectionImages.json';

export const Hero = () => {
  return (
    <>
      <section className={styles['hero']}>
        <img className={styles['hero__image']} src={sectionImages.hero.src} alt={sectionImages.hero.alt} />
        <section className={styles['hero__textblock']}>
          <Heading as='h3'>Sustainable lodgings that take care of the planet</Heading>
        </section>
      </section>
    </>
  )
}
