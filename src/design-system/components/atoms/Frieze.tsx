import { type Colors } from '../../tokens';
import styles from './Frieze.module.scss';
import { type ReactNode } from 'react';

interface Props {
  color?: Colors
  children: ReactNode
}

export const Frieze = ({ color = 'brown', children }: Props) => {
  return (
    <div className={`${styles.frieze} ${styles[`frieze__bg--${color}`]}`}>
      {children}
    </div>
  );
};
