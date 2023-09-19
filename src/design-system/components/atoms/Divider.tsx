import styles from './Divider.module.scss';
import { type Colors } from '../../tokens';
import { forwardRef } from 'react';

interface Props {
  color?: Colors
  customStyle?: React.CSSProperties
}

export const Divider = forwardRef<HTMLHRElement, Props>(({ color = 'brown', customStyle }, ref) => {
  return (
    <hr ref={ref} className={`${styles.hr} ${styles[`hr__bg--${color}`]}`} style={customStyle}/>
  );
});
