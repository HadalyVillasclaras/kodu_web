import { Colors, Size } from "../types";
import styles from "./Link.module.scss";

export interface LinkProps {
  color?: Colors;
  size?: Size;
  href: string;
  children: string;
  openInNewTab?: boolean; 
}

export const Link = ({ color = "green", size = "s", children, href, openInNewTab = false,}: LinkProps) => {
  return (
      <a 
        href={href} 
        target={openInNewTab ? "_blank" : "_self"} 
        className={`${styles["link"]} ${styles[`link__color-${color}`]} ${styles[`link__size-${size}`]}`} 
      >
        {children}
      </a>
  );
};
