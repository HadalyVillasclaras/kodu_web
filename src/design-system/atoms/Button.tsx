import { Colors } from "../types";
import { ButtonVariants } from "../types/Button";
import styles from "./Button.module.scss";

type ButtonProps = {
  variant?: ButtonVariants;
  text: string;
  color?: Colors;
  customStyle?: React.CSSProperties;
  onClick?: () => void;
};

export const Button = ({ variant="default", color="green", text="Button", customStyle, onClick}: ButtonProps) => {
  return (
   <button 
    className={`${styles['button']} ${styles[`button__${variant}-${color}`]}`}
    onClick={onClick}
    style={customStyle}
   >
    {text}
   </button>
  )
}