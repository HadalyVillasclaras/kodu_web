import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from "./Features.module.scss";
import featureData from "../../config/data/FeaturesSect.json";
import { ShowMoreText } from '../../shared/ShowMoreText';

gsap.registerPlugin(ScrollTrigger);

export const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(featureData[0]);
  const [expandedFeature, setExpandedFeature] = useState(null);
  const featureListRefs = useRef([]);
  let isMobile = false;

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);

    if (expandedFeature === feature.name) {
      setExpandedFeature(null);
    } else {
      setExpandedFeature(feature.name);
    }
  }

  // useEffect(() => {
  //   const featureListClass = `.${styles["features__list"]}`; 
  //   const featuresContainer = `.${styles["features__container"]}`; 

  //   if (featureListRefs.current) {
  //     gsap.from(featureListRefs.current, {
  //       scrollTrigger: {
  //         trigger: featuresContainer,
  //         toggleActions: "restart none none pause",
  //         // markers:true
  //       },
  //       y: 50,
  //       stagger: 0.1,
  //       opacity: 0,
  //       duration: 2,
  //       onComplete: function() {
  //         gsap.set(featureListRefs.current, { clearProps: 'all' });
  //       }
  //     });
  //   }
  // }, []);


  return (
    <div className={styles["features__container"]}>
      {
        !isMobile &&
        (
          <section className={styles["features__displayed"]}>
            <h3>{selectedFeature?.name}</h3>
            <p>{selectedFeature?.description}</p>
          </section>
        )
      }
      <section>
        <ul className={styles["features__list"]}>
          {featureData.map((feature, index) => (
            <li
              key={index}
              ref={el => featureListRefs.current[index] = el}
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
