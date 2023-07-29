import styles from "./Link.module.scss";

export interface LinkProps {
  mode?: "primary" | "secondary" | "tertiary";
  href: string;
  children: string;
  rel?: string;
}

export const Link = ({ mode = "secondary", children, href, ...props }: LinkProps) => {
  return (
      <a href={href} className={`${styles["link"]} ${styles[`link--${mode}`]}`} {...props}>
        {children}
      </a>
  );
};
