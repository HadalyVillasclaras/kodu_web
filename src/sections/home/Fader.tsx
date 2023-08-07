import { useEffect, useState } from 'react';
import styles from './Fader.module.scss';
import { Logo } from '../../design-system/atoms';

export const Fader = () => {
  const [topStyle, setTopStyle] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const handleLoad = () => {
console.log('fader');

    setIsLoaded(true);
    setTimeout(() => {
      setTopStyle('-110vh');
    }, 2500);
  };

  useEffect(() => {
    handleLoad()

  }, []);

  return (
    <section className={styles["fader"]} style={{ top: topStyle }}>
      <span className={`${styles["fader__logo"]} ${isLoaded ? styles['fader__logo-visible'] : ''}`}>
        <Logo color='brown' size={25}/>
      </span>
    </section>
  )
}
