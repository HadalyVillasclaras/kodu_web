import { Colors } from '../types';
import styles from './Marquee.module.scss';

interface MarqueeProps {
  text?: string;
  speed?: number;
  color?: Colors;
}

export const Marquee = ({text, color='green'}: MarqueeProps) => {
  const marqueeColor = color ? styles[`marquee__color-${color}`] : '';
  return (
    <section className={styles.marqueeContainer}>
      <p className={`${styles.marquee} ${marqueeColor}`} data-text={text}>
        {text}
      </p>
    </section>
  );
};