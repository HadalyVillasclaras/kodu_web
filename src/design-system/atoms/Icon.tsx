import icons from "../../assets/icons/Icons";
import { Size, Colors } from "../types";
import styles from "./Icon.module.scss";

export type Icons = keyof typeof icons;

export interface IconProps {
  icon: Icons;
  size?: Size;
  color?: Colors;
  width?: string;
  className?: string
}

export const Icon = ({ size = "m", icon, color, width = "1", ...props }: IconProps) => {
  const SvgIcon = icons[icon];
  return (
    <SvgIcon
      className={`${styles["icon"]} ${styles[`icon--${size}`]} ${props.className}`} style={{ stroke: `var(--${color})`, strokeWidth: width }}
      {...props}
    />
  );
};