import styles from "./Divider.module.scss";
import { Colors } from '../types';

type Props = {
  color?: Colors;
  customStyle?: React.CSSProperties;
}

export const Divider = ({color="brown", customStyle}: Props) => {
  return (
    <hr className={`${styles['hr']} ${styles[`hr-${color}`]}`}  style={customStyle}/>
  )
}