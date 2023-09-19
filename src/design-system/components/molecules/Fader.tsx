import { useEffect, useState } from 'react';
import styles from './Fader.module.scss';
import { Logo } from '../atoms/Logo';

export const Fader = () => {
  const [topStyle, setTopStyle] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);

    setTimeout(() => {
      setTopStyle('-110vh');
    }, 2300);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <section className={styles.fader} style={{ top: topStyle }}>
      <span className={`${styles.fader__logo} ${isLoaded ? styles['fader__logo--visible'] : ''}`}>
        <Logo clickable={false} color='brown' size='25rem'/>
      </span>
    </section>
  );
};
