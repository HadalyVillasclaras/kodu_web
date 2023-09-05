import styles from "./DetailInfo.module.scss";

type Props = {
  description: string,
  details: {
    person?: number,
    bathroom?: number,
    bed?: number,
  }
}

export const DetailInfo = ({ description, details }: Props) => {
  console.log(details);
  return (
    <section className={styles['detail-info']}>
      <p>{description}</p>
      {
        details.person && details.bathroom && details.bed &&
        <ul className={`${styles['detail-info__list']}`}>
          <li>{details.person} {details.person > 1 ? "persons" : "person"}</li>
          <li>{details.bathroom} {details.bathroom > 1 ? "bathrooms" : "bathroom"}</li>
          <li>{details.bed} {details.bed > 1 ? "beds" : "bed"}</li>
        </ul>
      }
    </section>
  )
}