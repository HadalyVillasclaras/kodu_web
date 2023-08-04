import { Heading } from '../../design-system/atoms'
import styles from "./DetailHeader.module.scss";

type Props = {}

export const DetailHeader = (props: Props) => {
  return (
    <header className={styles['detail-header']}>
    <Heading as="h2" color="green">Bloom house</Heading>
    <p className={styles['detail-header__location']}>Austing, TX</p>
  </header>
  )
}