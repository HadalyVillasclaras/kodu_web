import { type Colors } from '../../tokens';
import styles from './Frieze.module.scss';
import { type ReactNode } from 'react';

interface FriezeProps {
  color?: Colors
  children: ReactNode
}

export const Frieze = ({ color = 'brown', children }: FriezeProps) => {
  return (
    <div className={`${styles.frieze} ${styles[`frieze__bg--${color}`]}`}>
      {children}
    </div>
  );
};
