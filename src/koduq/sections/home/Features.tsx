import { useState, useRef } from 'react';
import styles from './Features.module.scss';
import featureData from '../../core/data/FeaturesSect.json';
import { Heading, Divider } from '../../../design-system/components/atoms';

interface Feature {
  name: string
  description: string
}

export const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(featureData[0]);
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
  const featureListRefs = useRef<HTMLElement[]>([]);

  const handleFeatureClick = (feature: Feature) => {
    setSelectedFeature(feature);

    if (expandedFeature === feature.name) {
      setExpandedFeature(null);
    } else {
      setExpandedFeature(feature.name);
    }
  };

  return (
    <div className={styles.features__container}>
      <section className={styles.features__displayed}>
        <Heading as='h2' font='fancy'>{selectedFeature?.name}</Heading>
        <p>{selectedFeature?.description}</p>
      </section>
      <section>
        <ul className={styles.features__list}>
          {featureData.map((feature, index) => (
            <li
              key={index}
              ref={el => {
                if (el) {
                  featureListRefs.current[index] = el;
                }
              }}
              className={selectedFeature?.name === feature.name ? styles['features__list__item--selected'] : styles.features__list__item}
            >
              <button onClick={() => { handleFeatureClick(feature); }}>{feature.name}</button>
              <Divider />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
