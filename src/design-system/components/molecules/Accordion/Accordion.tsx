import { Divider } from '../../atoms/Divider';
import { useLayoutEffect, useRef, useState } from 'react';
import { AccordionItem } from './AccordionItem';
import styles from './Accordion.module.scss';
import features from '../../../../koduc/core/data/FeaturesSect.json';
import gsap from 'gsap';
import { expandWidthOnScroll, slidesUpOnScroll } from '../../../animations/gsap';

export const Accordion = () => {
  const [openedItem, setOpenedItem] = useState<number | null>(0);
  const accordionRef = useRef<HTMLElement>(null!);
  const dividerRefs = useRef<Array<HTMLHRElement | null>>([]);

  const handleTitleClick = (index: number) => {
    setOpenedItem(prevIndex => (prevIndex === index ? null : index));
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const accordionItems = Array.from(accordionRef.current.children);
      slidesUpOnScroll(accordionItems as HTMLElement[], accordionRef.current, 0);

      const nonNullDividers = dividerRefs.current.filter(divider => divider !== null) as HTMLElement[];
      expandWidthOnScroll(nonNullDividers, accordionRef.current);
    }, accordionRef);
    return () => { ctx.revert(); };
  }, []);

  return (
    <section ref={accordionRef} className={styles.accordion}>
      {features.map((feature, index) => (
        <div
          className={styles.accordion__item}
          key={index}
        >
          <AccordionItem
            title={feature.name}
            content={feature.description}
            isOpen={openedItem === index}
            onTitleClick={() => { handleTitleClick(index); }}
          />
          <Divider ref={el => { if (el) dividerRefs.current[index] = el; }} color={openedItem === index ? 'cream' : 'cream'} customStyle={{ marginTop: '1rem' }} />
        </div>
      ))}
    </section>
  );
};
