import { useRef, useEffect } from 'react';
import styles from './Accordion.module.scss';
import { gsap } from 'gsap';

interface AccordionProps {
  title: string;
  content: string;
  isOpen: boolean;
  onTitleClick: () => void;
}

export const AccordionItem = ({ title, content, isOpen, onTitleClick }: AccordionProps) => {
  const accContentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<GSAPAnimation | null>(null);

  useEffect(() => {
    if (accContentRef.current) {
      if (isOpen) {
        gsap.set(accContentRef.current, { height: accContentRef.current.scrollHeight + 'px' });
      } else {
        gsap.set(accContentRef.current, { height: 'auto' });
        animationRef.current = gsap.from(accContentRef.current, {
          height: 0,
          duration: 0.5,
          ease: 'power1.inOut',
        }).reverse();
      }
    }
  }, []);

  useEffect(() => {
    if (accContentRef.current) {
      if (isOpen) {
        gsap.to(accContentRef.current, {
          height: accContentRef.current.scrollHeight + 'px',
          duration: 0.5,
          ease: 'power1.inOut',
        });
      } else {
        gsap.to(accContentRef.current, {
          height: 0,
          duration: 0.5,
          ease: 'power1.inOut',
        });
      }
    }
  }, [isOpen]);

  return (
    <>
      <button className={` ${isOpen && styles.opened }`} onClick={onTitleClick}>
        {title}
      </button>
      <div className={styles['accordion__content']} ref={accContentRef}>
        <p>{content}</p>
      </div>
    </>
  );
};