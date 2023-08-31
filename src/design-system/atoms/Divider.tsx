import styles from "./Divider.module.scss";
import { Colors } from '../types';
import { forwardRef } from "react";

type Props = {
  color?: Colors;
  customStyle?: React.CSSProperties;
}

export const Divider = forwardRef<HTMLHRElement, Props>(({color="brown", customStyle}, ref) => {
  return (
    <hr ref={ref} className={`${styles['hr']} ${styles[`hr__bg-${color}`]}`}  style={customStyle}/>
  )
});