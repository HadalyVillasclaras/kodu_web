import styles from "./DetailInfo.module.scss";

type Props = {
  description: string,
  amenities: any
}

export const DetailInfo = ({ description, amenities }: Props) => {
  return (
    <section className={styles['detail']}>
      <p className={`${styles['detail__description']}`}>{description}</p>
      {
        <ul className={`${styles['detail__list']}`}>
          {
            amenities.map((am: string, key: number) => (
              <li key={key}>+ {am}</li>
            ))
          }
        </ul>
      }
    </section>
  )
}