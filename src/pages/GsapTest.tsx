import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with gsap
gsap.registerPlugin(ScrollTrigger);

interface Props {
  text?: string;
}

export const GsapTest = ({ text = 'GSAP + ScrollTrigger' }: Props) => {
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = boxRef.current;

    gsap.from(element, {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true,
        toggleActions: 'restart none none reset',
      },
    });
  }, []);

  return (
    <div style={styles.container}>
      <div ref={boxRef} style={styles.box}>
        {text}
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '2000px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: '150px',
    width: '300px',
    backgroundColor: '#0070f3',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
  },
};

