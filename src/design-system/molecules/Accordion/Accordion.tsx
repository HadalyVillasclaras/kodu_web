import styles from './Accordion.module.scss';
import features from "../../../config/data/FeaturesSect.json";
import { Divider } from '../../atoms/Divider';
import { useState } from 'react';
import { AccordionItem } from './AccordionItem';

export const Accordion = () => {
  const [openedItem, setOpenedItem] = useState<number | null>(null);

  const handleTitleClick = (index: number) => {
    setOpenedItem(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section className={styles['accordion']}>
      <Divider color='cream' customStyle={{ marginTop: '1rem' }} />
      {features.map((feature, index) => (
        <AccordionItem
          key={index}
          title={feature.name}
          content={feature.description}
          isOpen={openedItem === index}
          onTitleClick={() => handleTitleClick(index)}
        />
      ))}
    </section>
  );
};
