import { Colors } from "../../tokens";
import styles from './Frieze.module.scss'; 
import { ReactNode } from 'react';

type Props = {
  color?: Colors;
  children: ReactNode;
}

export const Frieze = ({ color = "brown", children }: Props) => {
  return (
    <div className={`${styles[`frieze`]} ${styles[`frieze__bg--${color}`]}`}>
      {children}
    </div>
  )
}