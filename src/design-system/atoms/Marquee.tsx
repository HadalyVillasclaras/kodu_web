import styles from './Marquee.module.scss';

interface MarqueeProps {
  text?: string;
  speed?: number;  
}

export const Marquee = ({ text }: MarqueeProps) => {
  const marqueeText = "Nourish Nature on Your Next Getaway. Eco Homes for Sustainable Stays";
  return (
    <div className={styles.marqueeContainer}>
      <p className={styles.marquee}>
        {marqueeText} <span className={styles.marqueeKodu}> KODU </span>  {marqueeText} <span className={styles.marqueeKodu}> KODU </span> 
      </p>
    </div>
  );
};

