import icons from "../../assets/icons/Icons";
import { Size, Colors } from "../types";
import styles from "./Icon.module.scss";

export type Icons = keyof typeof icons;

export interface IconProps {
  icon: Icons;
  size?: Size;
  color?: Colors;
  variant?: "simple" | "circle";
  disabled?: boolean;
  className?: string
}

export const Icon = ({ size = "m", icon, color, disabled = false, variant = "simple", ...props }: IconProps) => {
  const SvgIcon = icons[icon];

  return (
    <SvgIcon
      className={`
        ${styles["icon"]} 
        ${styles[`icon__size-${size}`]} 
        ${ variant === "simple" ? styles[`icon__simple-${color}`] : styles[`icon__circle-${color}`]}
        ${ variant === "circle" && styles[`icon__circle`]}
        ${variant === "circle" &&  styles[`icon__circle-${color}-${disabled ? 'disabled' : 'active'}`]}

      `} 
      {...props}
    />
  );
};