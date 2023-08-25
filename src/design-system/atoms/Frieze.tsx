import { Colors } from '../types'
import styles from './Frieze.module.scss';

type Props = {
  color?: Colors;
}

export const Frieze = ({color = "brown"}: Props) => {
  return (
    <div className={`${styles[`frieze`]} ${styles[`frieze-${color}`]}`}>
    </div>
  )
}