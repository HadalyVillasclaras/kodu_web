import styles from "./DestinationCard.module.scss";

type DestinationCardProps = {
  id?: number;
  homeName?: string | null;
  price?: number | null;
  src?: string;
  alt?: string;
}

export const DestinationCard = ({ id, homeName, src, alt }: DestinationCardProps) => {
  return (
    <article className={styles['destination-card']}>
      <a href={id ? `/house/${id}` : "house/902/"} className={styles['destination-card__image-wrapper']}>
        <img className={styles['destination-card__image']} src={src} alt={alt} />
        {homeName && <span className={styles['destination-card__home-name']}>{homeName}</span>}
      </a>
    </article>
  )
}