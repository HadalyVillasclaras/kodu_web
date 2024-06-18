import { DestinationCard, Gallery, Swipe } from '../../../design-system/components/molecules';
import { type DestinationCardData } from '../../../design-system/components/molecules/DestinationCard';
import styles from './DestinationImages.module.scss';

interface DestinationImagesProps {
  imgs: string[]
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
  );
};
