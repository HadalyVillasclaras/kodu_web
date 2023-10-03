import { Heading, Pagination } from '../atoms';
import styles from './DestinationCard.module.scss';

export interface DestinationCardData {
  id?: number
  destinationName?: string
  img?: string
  alt?: string
}

interface PaginationData {
  currentIndex: number
  totalSlides: number
}

interface DestinationCardProps {
  data?: DestinationCardData
  paginationData?: PaginationData
}
const VITE_BASE_PATH = import.meta.env.VITE_BASE_PATH;
const VITE_BASE_ASSETS = import.meta.env.VITE_BASE_ASSETS;

export const DestinationCard = ({ data, paginationData }: DestinationCardProps) => {
  let destinationData;

  if (data) {
    destinationData = {
      id: data.id,
      destinationName: data.destinationName,
      src: data.img,
      alt: data.alt
    };
  }
  const pagAtImgCorner = paginationData && !destinationData?.destinationName;
  const destinationUrl = destinationData?.id ? `${VITE_BASE_PATH}#/destination/${destinationData.id}` : null;
  const destinationImgPath = VITE_BASE_ASSETS + destinationData?.src;

  return (
    <>
      {
        destinationData &&
        <article className={styles['destination-card']}>
          <a
            href={destinationUrl || '#'}
            className={styles['destination-card__image-wrapper']}
            onClick={(e) => { !destinationUrl && e.preventDefault(); }}
          >
            <img className={styles['destination-card__image']} src={destinationImgPath} alt={destinationData.alt} />
            <div className={styles['destination-card__info-dk']}>
              <Heading as="h4" color="cream">{destinationData.destinationName}</Heading>
            </div>
            {
              pagAtImgCorner &&
              <Pagination color='cream' current={paginationData.currentIndex} total={paginationData.totalSlides}/>
            }
          </a>
          {
            !pagAtImgCorner &&
            <section className={styles['destination-card__info-mb']}>
              {
                destinationData.destinationName &&
                <a
                  href={destinationUrl || '#'}
                  onClick={(e) => { !destinationUrl && e.preventDefault(); }}
                >
                  <Heading as="h4" color="green">{destinationData.destinationName}</Heading>
                </a>
              }
              {
                paginationData &&
                <Pagination current={paginationData.currentIndex} total={paginationData.totalSlides} color='brown'/>
              }
            </section>
          }
        </article>
      }
    </>
  );
};
