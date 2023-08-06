import { useState } from 'react';
import styles from './Fader.module.scss';
import { Logo } from '../../design-system/atoms';

type Props = {}

export const Fader = (props: Props) => {
  const [topStyle, setTopStyle] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    setTimeout(() => {
      setTopStyle('-105vh');
    }, 2500);
  };

  window.onload = handleLoad;

  return (
    <section className={styles["fader"]} style={{ top: topStyle }}>
      <span className={`${styles["fader__logo"]} ${isLoaded ? styles['fader__logo-visible'] : ''}`}>
        <Logo color='brown' size={25}/>
      </span>
    </section>
  )
}
