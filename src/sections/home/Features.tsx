import { useState } from 'react';
import styles from "./Features.module.scss";
import featureData from "../../config/data/FeaturesSect.json"

export const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
  }

  return (
    <div className={styles["features__container"]}>
      <section className={styles["features__displayed"]}>
        {selectedFeature &&
          <>
            <h3>{selectedFeature?.name}</h3>
            <p>{selectedFeature?.description}</p>
          </>
        }
      </section>
      <section>
        <ul className={styles["features__list"]}>
          {featureData.map((feature, index) => (
            <li
              key={index}
              className={selectedFeature?.name === feature.name ? styles['features__list__item-selected'] : styles['features__list__item']}
            >
              <button onClick={() => handleFeatureClick(feature)}>{feature.name}</button>
              <hr />
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
