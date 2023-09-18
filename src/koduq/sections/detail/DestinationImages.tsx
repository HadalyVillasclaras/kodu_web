import { DestinationCard, Gallery, Swipe } from '../../../design-system/components/molecules';
import { DestinationCardData } from '../../../design-system/components/molecules/DestinationCard';
import styles from "./DestinationImages.module.scss";

type DestinationImagesProps = {
  imgs: string[];
}

export const DestinationImages = ({ imgs }: DestinationImagesProps) => {
  const imgsData = imgs.map(img => ({ img }));
  return (
    <>
      <section className={styles['swipe-sect']}>
        <Swipe
          elementsData={imgsData}
          renderElement={(data, paginationData) =>
            <DestinationCard data={data as DestinationCardData} paginationData={paginationData} />
          }
        />
      </section>
      <section className={styles['gallery-sect']}>
        <Gallery imgs={imgs} />
      </section>
    </>
  )
}