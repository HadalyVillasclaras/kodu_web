import styles from "./Hero.module.scss";
import { Heading } from '../../design-system/atoms/index';


export const Hero = () => {
  return (
    <>
    <section className={styles['hero']}>
    <img className={styles['hero__image']} src="/src/assets/imgs/homes/paraty/paraty-1.png" alt="description" />
      <section className={styles['hero__text']}>
        <Heading as='h3'>Sustainable lodgings that take care of the planet</Heading>
      </section>
    </section>
    </>
  )
}
