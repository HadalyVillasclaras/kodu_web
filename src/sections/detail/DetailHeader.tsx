import { Heading } from '../../design-system/atoms'
import styles from "./DetailHeader.module.scss";

type Props = {
  name: string,
  location: string
}

export const DetailHeader = ({name, location}: Props) => {
  return (
    <header className={styles['detail-header']}>
      <Heading as="h2" color="green">{name}</Heading>
      <p className={styles['detail-header__location']}>{location}</p>
    </header>
  )
}