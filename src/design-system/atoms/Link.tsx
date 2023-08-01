import { Size } from "../types";
import styles from "./Link.module.scss";

export interface LinkProps {
  mode?: "primary" | "secondary" | "tertiary";
  size?: Size;
  href: string;
  children: string;
  rel?: string;
}

export const Link = ({ mode = "secondary", size = "s", children, href, ...props }: LinkProps) => {
  return (
      <a href={href} 
        className={`${styles["link"]} ${styles[`link__color-${mode}`]} ${styles[`link__size-${size}`]}`} 
        {...props}
      >
        {children}
      </a>
  );
};
