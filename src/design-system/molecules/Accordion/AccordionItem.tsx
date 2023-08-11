import { useRef, useEffect } from 'react';
import styles from './Accordion.module.scss';
import { gsap } from 'gsap';
import { Heading } from '../../atoms';
import { Divider } from '../../atoms/Divider';

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
      gsap.set(accContentRef.current, { height: 'auto' });

      animationRef.current = gsap.from(accContentRef.current, {
        height: 0,
        duration: 0.5,
        ease: 'power1.inOut',
      }).reverse();
    }
  }, []);

  useEffect(() => {
    if (animationRef.current) {
      isOpen ? animationRef.current.play() : animationRef.current.reverse();
    }
  }, [isOpen]);

  return (
    <div className={styles['accordion__item']}>
      <span className={styles['accordion__title']} onClick={onTitleClick}>
        <Heading as='h4' font='fancy'>{title}</Heading>
      </span>
      <div className={styles['accordion__content']} ref={accContentRef}>
        <p>{content}</p>
      </div>
      <Divider color='cream' customStyle={{ marginTop: '1rem' }} />
    </div>
  );
};