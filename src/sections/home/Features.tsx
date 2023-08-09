import { useState, useEffect, useRef } from 'react';
import styles from "./Features.module.scss";
import featureData from "../../config/data/FeaturesSect.json";
import { ShowMoreText } from '../../shared/ShowMoreText';
import { useGsapFadeIn } from '../../shared/hooks/useGsapFadeIn';
 
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
    console.log(feature);
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
          <h3>{selectedFeature?.name}</h3>
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
              <hr />
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
