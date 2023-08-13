import styles from './Accordion.module.scss';
import features from "../../../config/data/FeaturesSect.json";
import { Divider } from '../../atoms/Divider';
import { useLayoutEffect, useRef, useState } from 'react';
import { AccordionItem } from './AccordionItem';
import { useGsapFadeIn } from '../../../shared/hooks/useGsapFadeIn';
import { useGsapWidthExpand } from '../../../shared/hooks/useGsapWidthExpand';

export const Accordion = () => {
  const [openedItem, setOpenedItem] = useState<number | null>(null);

  const fadeRefs = useRef<HTMLElement[]>([]);
  const { fadeInOnScroll } = useGsapFadeIn();

  const topDividerRef = useRef<HTMLHRElement | null>(null);
  const dividerRefs = useRef<(HTMLHRElement | null)[]>([]);
  const { expandWidthOnScroll } = useGsapWidthExpand();

  const handleTitleClick = (index: number) => {
    setOpenedItem(prevIndex => (prevIndex === index ? null : index));
  };

  useLayoutEffect(() => {
    fadeInOnScroll(fadeRefs.current, `.${styles['accordion']}`);
    expandWidthOnScroll(topDividerRef.current, `.${styles['accordion']}`);
    expandWidthOnScroll(dividerRefs.current, `.${styles['accordion']}`); 
}, []);

  return (
    <section className={styles['accordion']}>
      <Divider ref={topDividerRef} color='cream' customStyle={{ marginTop: '1rem' }} />

      {features.map((feature, index) => (
        <div
          className={styles['accordion__item']}
          key={index}
          ref={el => { if (el) fadeRefs.current[index] = el }}
        >
          <AccordionItem
            title={feature.name}
            content={feature.description}
            isOpen={openedItem === index}
            onTitleClick={() => handleTitleClick(index)}
          />
          <Divider ref={el => { if (el) dividerRefs.current[index] = el }} color='cream' customStyle={{ marginTop: '1rem' }} />
        </div>

      ))}
    </section>
  );
};
