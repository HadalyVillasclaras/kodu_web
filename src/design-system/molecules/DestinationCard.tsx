import { useDeviceType, DeviceType } from '../../hooks/useDeviceType';
import { Heading } from "../atoms";
import styles from "./DestinationCard.module.scss";

export type DestinationCardData = {
  id?: number;
  destinationName?: string;
  img: string;
  alt?: string;
};

type PaginationData = {
  currentIndex: number;
  totalSlides: number;
};

type DestinationCardProps = {
  data?: DestinationCardData;
  paginationData?: PaginationData;
}
const VITE_BASE_PATH = import.meta.env.VITE_BASE_PATH;

export const DestinationCard = ({ data, paginationData }: DestinationCardProps) => {
  const deviceType = useDeviceType();

  let destinationData;
  if (data) {
    destinationData = {
      id: data.id,
      destinationName: data.destinationName,
      src: data.img,
      alt: data.alt,
    }
  }

  const pagAtImgCorner = paginationData && !destinationData?.destinationName;
  const destinationUrl = destinationData?.id ? `${VITE_BASE_PATH}/#/destination/${destinationData.id}` : null;

  return (
    <>
      {
        destinationData
        ?
        <article className={styles['destination-card']}>
          <a 
            href={destinationUrl ? destinationUrl : '#'} 
            className={styles['destination-card__image-wrapper']}

            onClick={(e) => !destinationUrl && e.preventDefault()}
            >
            <img className={styles['destination-card__image']} src={`${VITE_BASE_PATH}${destinationData.src}`} alt={destinationData.alt} />
            <span className={styles['destination-card__info-dk']}>
              <Heading as="h4" color="cream">{destinationData.destinationName}</Heading>
            </span>
            {
              pagAtImgCorner &&
              <span className={styles['destination-card__pag-corner']}>{paginationData.currentIndex} / {paginationData.totalSlides}</span>
            }
          </a>
          {
            deviceType === DeviceType.MOBILE && !pagAtImgCorner &&
            <section className={styles['destination-card__info']}>
              {
                destinationData.destinationName &&
                <a
                  href={destinationUrl ? destinationUrl : '#'} 
                  className={styles['destination-card__image-wrapper']}
                  onClick={(e) => !destinationUrl && e.preventDefault()}
                >
                  <Heading as="h4" color="green">{destinationData.destinationName}</Heading>
                </a>
              }
              {
                paginationData  &&
                <p>
                  {paginationData.currentIndex} / {paginationData.totalSlides}
                </p>
              }
            </section>
          }
        </article>
        : <span>no destination data</span>
      }
    </>
  )
}