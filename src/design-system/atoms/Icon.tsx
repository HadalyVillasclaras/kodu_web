import icons from "../../assets/icons/Icons";
import { Size, Colors } from "../types";
import styles from "./Icon.module.scss";

export type Icons = keyof typeof icons;

export interface IconProps {
  icon: Icons;
  size?: Size;
  color?: Colors;
  className?: string
}

export const Icon = ({ size = "m", icon, color, ...props }: IconProps) => {
  const SvgIcon = icons[icon];

  return (
    <SvgIcon
      className={`${styles["icon"]} ${styles[`icon__size-${size}`]} ${styles[`icon__color-${color}`]}`} 
      {...props}
    />
  );
};