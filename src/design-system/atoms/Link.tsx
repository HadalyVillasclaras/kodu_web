import { Colors, Size } from "../types";
import styles from "./Link.module.scss";

export interface LinkProps {
  color?: Colors;
  size?: Size;
  href: string;
  children: string;
  openInNewTab?: boolean; 
}

export const Link = ({ color = "green", size = "s", children, href, openInNewTab = false, ...props }: LinkProps) => {
  const target = openInNewTab ? "_blank" : "_self";

  return (
      <a 
        href={href} 
        target={target} 
        className={`${styles["link"]} ${styles[`link__color-${color}`]} ${styles[`link__size-${size}`]}`} 
      >
        {children}
      </a>
  );
};
