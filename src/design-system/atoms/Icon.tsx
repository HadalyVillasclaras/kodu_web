import icons from "../icons/Icons";


import styles from "./Icon.module.scss";

export type Icons = keyof typeof icons;
type Colors = "cream" | "green" | "brown";

export interface IconProps {
  icon: Icons;
  size?: "small" | "medium" | "large" | "xl";
  color?: Colors;
}

export const Icon = ({ size = "medium", icon, color,  ...props }: IconProps) => {
  const SvgIcon = icons[icon];
  return (
    <span className={`${styles["icon"]} ${styles[`icon--${size}`]}`} {...props}>
      <SvgIcon className={`${styles["icon"]}`} style={{stroke:`var(--${color})`, strokeWidth:"2"}} />
    </span>
  );
};
