import icons from "../icons/Icons";


import styles from "./Icon.module.scss";

export type Icons = keyof typeof icons;
type Colors = "cream" | "green" | "brown";

export interface IconProps {
  icon: Icons;
  size?: "small" | "medium" | "large" | "xl";
  color?: Colors;
  width?: string;
}

export const Icon = ({ size = "medium", icon, color, width="1",  ...props }: IconProps) => {
  const SvgIcon = icons[icon];
  return (
      <SvgIcon className={`${styles["icon"]} ${styles[`icon--${size}`]}`} style={{stroke:`var(--${color})`, strokeWidth:width}} />
  );
};
