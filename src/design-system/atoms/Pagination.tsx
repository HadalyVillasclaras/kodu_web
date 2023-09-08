import { Colors } from '../types';
import styles from './Pagination.module.scss';

interface PaginationProps {
  current: number;
  total: number;
  color?: Colors;
}

export const Pagination = ({current, total, color='green'}: PaginationProps) => {
  const paginationColor = color ? styles[`pagination__color--${color}`] : '';
  const paginationBorderColor = color ? styles[`pagination__border--${color}`] : '';

  return (
      <span className={`${styles.pagination} ${paginationColor} ${paginationBorderColor}`}>
        {current} / {total}
      </span>
  );
};