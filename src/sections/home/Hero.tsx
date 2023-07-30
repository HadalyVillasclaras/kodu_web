import styles from "./Hero.module.scss";
import { Heading } from '../../design-system/atoms/Heading';


export const Hero = () => {
  return (
    <>
    <section className={styles['hero']}>
    <img className={styles['hero__image']} src="/src/assets/imgs/homes/paraty/paraty1.jpeg" alt="description" />
      <section className={styles['hero__text']}>
        <Heading as='h2'>Sustainable lodgings that take care of the planet</Heading>
      </section>
    </section>
    </>
  )
}
