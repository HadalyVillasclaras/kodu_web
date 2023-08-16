import { useState, useEffect, useRef } from 'react';
import styles from "./Features.module.scss";
import featureData from "../../config/data/FeaturesSect.json";
import { ShowMoreText } from '../../design-system/molecules/ShowMoreText';
import { useGsapFadeIn } from '../../shared/hooks/useGsapFadeIn';
import { Heading } from '../../design-system/atoms';
import { Divider } from '../../design-system/atoms/Divider';

type Feature = {
  name: string;
  description: string;
};

export const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(featureData[0]);
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
  const featureListRefs = useRef<HTMLElement[]>([]);
  const { fadeInOnScroll } = useGsapFadeIn();

  const isMobile = false;

  const handleFeatureClick = (feature: Feature) => {
    setSelectedFeature(feature);

    if (expandedFeature === feature.name) {
      setExpandedFeature(null);
    } else {
      setExpandedFeature(feature.name);
    }
  }

  useEffect(() => {
    fadeInOnScroll(featureListRefs.current, `.${styles["features__container"]}`);
  }, []);

  return (
    <div className={styles["features__container"]}>
      {!isMobile && (
        <section className={styles["features__displayed"]}>
          <Heading as='h2' font='fancy'>{selectedFeature?.name}</Heading>
          <p>{selectedFeature?.description}</p>
        </section>
      )}
      <section>
        <ul className={styles["features__list"]}>
          {featureData.map((feature, index) => (
            <li
              key={index}
              ref={el => {
                if (el) {
                  featureListRefs.current[index] = el;
                }
              }}
              className={selectedFeature?.name === feature.name ? styles['features__list__item-selected'] : styles['features__list__item']}
            >
              <button onClick={() => handleFeatureClick(feature)}>{feature.name}</button>
              {
                isMobile &&
                <ShowMoreText
                  visibleText=''
                  hiddenText={feature.description}
                  showMoreText={expandedFeature === feature.name}
                  onToggle={() => handleFeatureClick(feature)}
                />
              }
              <Divider />
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
