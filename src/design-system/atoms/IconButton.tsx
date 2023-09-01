import { Icon } from '.';
import icons from "../../assets/icons/Icons";
import { Colors, Size } from '../types';
import styles from "./Icon.module.scss";

export type Icons = keyof typeof icons;

type IconButtonProps = {
  icon: Icons;
  text?: string;
  color?: Colors;
  size?: Size;
  ariaLabel: string;
  customStyle?: React.CSSProperties;
  onClick?: () => void;
}

export const IconButton = ({ icon, size = "m", text, color = "green", ariaLabel, customStyle, onClick }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${styles["iconbutton"]}`}
      style={customStyle}
    >
      <Icon icon={icon} size={size} color={color} />
      {
      text &&
        <span className={`${styles["iconbutton__text"]} ${styles[`iconbutton__text__size--${size}`]}`}>
          {text}
        </span>
      }
    </button>
  )
}