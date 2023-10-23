import { type Colors } from '../../tokens';
import styles from './Loader.module.scss';

interface LoaderProps {
  size?: number
  color?: Colors
  isActive?: boolean;
}

export const Loader = ({ size = 40, color = 'brown',  isActive = false  }: LoaderProps) => {

  return (
    <div className={`
      ${styles.loaderwrapper} 
      ${styles[`loaderwrapper__color--${color}`]} 
      ${isActive ? styles['loaderwrapper--active'] : ''}
    `}>
      <span
        className={`${styles.loader}  ${isActive ? styles['loader--active'] : ''} ${styles[`loader__color--${color}`]}`}
        style={{ width: `${size}px`, height: `${size}px`, borderWidth: `${size * 0.1}px` }}
      ></span>
    </div>
  );
};
