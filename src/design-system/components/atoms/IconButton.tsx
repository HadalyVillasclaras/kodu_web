import { Icon } from '.';
import icons from "../../assets/icons/Icons";
import { Colors, Size } from '../../tokens';
import styles from "./Icon.module.scss";

export type Icons = keyof typeof icons;

type IconButtonProps = {
  icon: Icons;
  text?: string;
  color?: Colors;
  size?: Size;
  variant?: "simple" | "circle";
  ariaLabel: string;
  customStyle?: React.CSSProperties;
  onClick?: () => void;
}

export const IconButton = ({ icon, size = "m", text, color = "green", variant="simple", ariaLabel, customStyle, onClick }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${styles["iconbutton"]}`}
      style={customStyle}
    >
      <Icon icon={icon} size={size} color={color} variant={variant}/>
      {
        text &&
        <span className={`${styles["iconbutton__text"]} ${styles[`iconbutton__text__color--${color}`]} ${styles[`iconbutton__text__size--${size}`]}`}>
          {text}
        </span>
      }
    </button>
  )
}