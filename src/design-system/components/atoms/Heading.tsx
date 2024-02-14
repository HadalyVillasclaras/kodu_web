import { type HTMLAttributes, type ReactNode } from 'react';
import styles from './Heading.module.scss';
import { type Colors } from '../../tokens';

type ExtendedProps = Omit<HTMLAttributes<HTMLElement>, 'color' | 'font' | 'as'>;
type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4'
  font?: 'simple' | 'fancy'
  color?: Colors
  children: ReactNode
  onClick?: () => void
} & ExtendedProps;

export const Heading = ({ children, as = 'h1', color = 'cream', font = 'simple', onClick, ...props }: HeadingProps) => {
  const Tag = as;
  let fontClass = `${styles[`heading--${as}`]}`;
  if (font === 'simple') {
    fontClass += ` ${styles[`heading--${as}-simple`]}`;
  }

  return (
    <Tag
      data-gsap-target="true"
      className={`${fontClass}`}
      style={{
        color: `var(--${color})`
      }}
      onClick={onClick}
      {...props}
    >
      {children}
    </Tag>
  );
};
