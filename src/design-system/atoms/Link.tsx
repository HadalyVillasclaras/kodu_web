import { Colors, Size } from "../types";
import styles from "./Link.module.scss";

export interface LinkProps {
  color?: Colors;
  size?: Size;
  href: string;
  children: string;
  rel?: string;
}

export const Link = ({ color = "green", size = "s", children, href, ...props }: LinkProps) => {
  return (
      <a href={href} 
        className={`${styles["link"]} ${styles[`link__color-${color}`]} ${styles[`link__size-${size}`]}`} 
        {...props}
      >
        {children}
      </a>
  );
};
