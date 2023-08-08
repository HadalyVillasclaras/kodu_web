import { Colors } from '../types';
import styles from './Marquee.module.scss';

interface MarqueeProps {
  text?: string;
  speed?: number;
  color?: Colors;
}

export const Marquee = ({text, speed, color='green'}: MarqueeProps) => {
  const marqueeColor = color ? styles[`marquee-${color}`] : '';

  return (
    <div className={styles.marqueeContainer}>
      <p className={`${styles.marquee} ${marqueeColor}`} data-text={text}>
        {text}
      </p>
      {/* <p className={styles.marquee} dangerouslySetInnerHTML={{ __html: marqueeText }}></p> */}

    </div>
  );
};
