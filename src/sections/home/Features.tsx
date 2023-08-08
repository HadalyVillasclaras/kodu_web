import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from "./Features.module.scss";
import featureData from "../../config/data/FeaturesSect.json";
import { ShowMoreText } from '../../shared/ShowMoreText';

gsap.registerPlugin(ScrollTrigger);

export const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [expandedFeature, setExpandedFeature] = useState(null);
  const featureListRefs = useRef([]);
  let isMobile = true;

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);

    if (expandedFeature === feature.name) {
      setExpandedFeature(null);
    } else {
      setExpandedFeature(feature.name);
    }
  }


  useEffect(() => {
    const delay = setTimeout(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: `.${styles["features__container"]}`,
          start: "top top",
          toggleActions: "play none none reverse",
        }
      });

      timeline.from(featureListRefs.current, {
        y: 50,
        stagger: 0.1,
        opacity: 0,
        duration: 1,
      });

      return () => {
        timeline.scrollTrigger.kill();
        timeline.kill();
      }
    }, 100);

    return () => clearTimeout(delay);

  }, []);

  return (
    <div className={styles["features__container"]}>
      {
        !isMobile &&
        (
          <section className={styles["features__displayed"]}>
            {selectedFeature &&
              <>
                <h3>{selectedFeature?.name}</h3>
                <p>{selectedFeature?.description}</p>
              </>
            }
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
              <ShowMoreText 
                visibleText='' 
                hiddenText={feature.description}
                showMoreText={expandedFeature === feature.name}
                onToggle={() => handleFeatureClick(feature)}
              />
              <hr />
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
