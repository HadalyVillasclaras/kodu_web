import { type ReactNode } from 'react';
import { type Colors, type Size } from '../../tokens';
import styles from './Link.module.scss';
// import { HashLink } from 'react-router-hash-link';

export interface LinkProps {
  color?: Colors
  size?: Size
  href: string
  children: string | ReactNode
  openInNewTab?: boolean
}

export const Link = ({ color = 'green', size = 's', children, href, openInNewTab = false }: LinkProps) => {
  return (
    <a
      target={openInNewTab ? '_blank' : '_self'}
      className={`${styles.link} ${styles[`link__color--${color}`]} ${styles[`link__size--${size}`]}`}
      href={href} 
      rel="noreferrer"
    >
      {children}
    </a>
  );
};
