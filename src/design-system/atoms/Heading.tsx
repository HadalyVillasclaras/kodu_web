import { ReactNode } from "react";
import styles from "./Heading.module.scss";

type BgColors = "cream" | "green" | "brown";

type HeadingProps = {
  as?: "h1" | "h2" | "h3";
  color?: BgColors;
  children: ReactNode;
}

export const Heading = ({ children, as="h1",  color}: HeadingProps) => {
  const Tag = as;

  return (
    <Tag className={`${styles["heading"]} ${styles[`heading--${as}`]}`} style={{color: `var(--${color})`}}>
      {children}
    </Tag>
  );
};