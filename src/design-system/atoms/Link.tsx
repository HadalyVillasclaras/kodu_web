import styles from "./Link.module.scss";

export interface LinkProps {
  mode?: "primary" | "secondary" | "tertiary";
  size?: "xs" | "small" | "mid" | "big";
  href: string;
  children: string;
  rel?: string;
}

export const Link = ({ mode = "secondary", size, children, href, ...props }: LinkProps) => {
  return (
      <a href={href} 
        className={`${styles["link"]} ${styles[`link__color-${mode}`]} ${styles[`link__size-${size}`]}`} 
        {...props}
      >
        {children}
      </a>
  );
};
