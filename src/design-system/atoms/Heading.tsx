import { ReactNode } from 'react'; // Import CSSProperties
import styles from "./Heading.module.scss"; 
import { Colors } from '../types';

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4";
  font?: "simple" | "fancy";
  color?: Colors;
  children: ReactNode;
  onClick?: () => void;
}
export const Heading = ({ children, as = "h1", color='cream', font = 'simple', onClick }: HeadingProps) => { 
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
        color: `var(--${color})`, 
      }}
      onClick={onClick}
    >
      {children}
    </Tag>
  );
};
