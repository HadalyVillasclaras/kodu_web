import styles from "./DestinationCard.module.scss";

type DestinationCardProps = {
  homeName: string | null;
  price: number | null;
  src: string;
  alt?: string;
}

export const DestinationCard = ({homeName, price, src, alt}: DestinationCardProps) => {
  return (
    <article className={styles['destination-card']}>
     <img className={styles['destination-card__image']} src={src} alt={alt} />
     {
      price !== null && homeName !== null &&
      <section className={styles['destination-card__info']}>
        <p>{homeName}</p>
        <p>{price}€ night</p>
      </section>
     }
    </article>
  )
}