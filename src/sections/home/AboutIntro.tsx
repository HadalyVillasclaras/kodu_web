import styles from "./AboutUs.module.scss";
import { Heading } from '../../design-system/atoms';
import { DeviceType, useDeviceType } from "../../shared/useDeviceType";

export const AboutIntro = () => {
  const deviceType = useDeviceType();
  const text = "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque congue non augue eleifend iaculis. Mauris posuere ex justo, sit amet faucibus diam faucibus sollicitudin. Pellentesque efficitur tortor ac varius tincidunt.";
  const BASE_ASSETS = import.meta.env.VITE_BASE_ASSETS;

  const imageElement = (
    <img className={`${styles['intro-about-left']}`} src={BASE_ASSETS + 'imgs/homes/paraty/paraty-3.png'} alt="description" />
  );

  return (
    <>
      <header className={styles['intro-about__header']}>
        <Heading font='fancy' as='h1'>Nourish Nature</Heading>
        <Heading font='fancy' as='h1'>Your Next Getaway</Heading>
      </header>
      <section className={`${styles['intro-about']}`}>
        {deviceType === DeviceType.MOBILE && imageElement}
        <div className={`${styles['intro-about-right']}`}>
          {deviceType === DeviceType.DESKTOP && imageElement}
          <section>
            <Heading as='h3' color='brown' font='fancy'>Sustainable lodgings</Heading>
            <p>{text}</p>
          </section>
          {deviceType === DeviceType.MOBILE && imageElement}
        </div>
      </section>
    </>
  )
}
