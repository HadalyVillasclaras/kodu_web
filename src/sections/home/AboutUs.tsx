import styles from "./AboutUs.module.scss";
import { Button } from '../../design-system/atoms/Button';
import { Heading } from '../../design-system/atoms/Heading';
import { ArrowsNav } from "../../design-system/molecules/ArrowsNav";


export const AboutUs = () => {
  return (
    <>
      <section className={styles['about-us']}>
      <div className={styles['']}>
        <Heading as='h1'>This is what we care about</Heading>
        <div className={styles['about-us__text-block']}>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
          <p>Adipiscing elit. Nunc auctor, ante in rhoncus pulvinar, arcu orci dapibus nisl, et dictum risus lacus quis sem. Sed ultrices sodales lorem, at lobortis odio porta vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque congue non augue eleifend iaculis. Mauris posuere ex justo, sit amet faucibus diam faucibus sollicitudin. Pellentesque efficitur tortor ac varius tincidunt. </p>
        </div>
        <Button variant='underline' color='cream' text='Know more about it +'/>
      </div>
      <div className={styles['about-us__image-container']}>
        <img className={styles['about-us__image']} src="/src/assets/imgs/homes/paraty/paraty2.png" alt="description" />
      </div>
    </section>
    <ArrowsNav color="cream"/>
    </>
  )
}
