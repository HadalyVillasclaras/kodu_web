import styles from "./Divider.module.scss";
import { Colors } from '../types';

type Props = {
  color?: Colors;
}

export const Divider = ({color="brown"}: Props) => {
  return (
    <hr className={`${styles['hr']} ${styles[`hr-${color}`]}`}/>
  )
}