import styles from "./Hero.module.scss";
import { Heading } from '../../design-system/atoms';
import sectionImages from '../../config/data/SectionImages.json';
import { Divider } from "../../design-system/atoms/Divider";

export const Hero = () => {
  return (
    <>
      <section className={styles['hero']}>
        <section className={styles['hero__textblock']}>
          <Heading as='h3' color="green">Sustainable lodgings that take care of the planet</Heading>
        </section>
        <Divider />
        <section className={styles['hero__image-container']}>
          <img className={styles['hero__image']} src={sectionImages.hero.src} alt={sectionImages.hero.alt} />
        </section>
      </section>
    </>
  )
}
