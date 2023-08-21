import { Heading } from "../atoms";
import styles from "./DestinationCard.module.scss";

type DestinationCardProps = {
  id?: number;
  homeName: string | null;
  price?: number | null;
  src?: string;
  alt?: string;
}

export const DestinationCard = ({ id, homeName, src, alt }: DestinationCardProps) => {
  
const VITE_BASE_PATH = import.meta.env.VITE_BASE_PATH;
const destinationUrl = id ? `${VITE_BASE_PATH}house/${id}` : "house/901/";

  return (
    <article className={styles['destination-card']}>
      <a href={destinationUrl} className={styles['destination-card__image-wrapper']}>
        <img className={styles['destination-card__image']} src={`${VITE_BASE_PATH}${src}`} alt={alt} />
        <span className={styles['destination-card__homename-dk']}>
          <Heading as="h4" color="cream">{homeName}</Heading>
        </span>
      </a>
      <a href={destinationUrl} className={styles['destination-card__homename']}>
        <Heading as="h4" color="green">{homeName}</Heading>
      </a>
    </article>
  )
}