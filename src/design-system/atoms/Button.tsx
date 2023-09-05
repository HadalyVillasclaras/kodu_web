import { Colors } from "../types";
import { ButtonVariants } from "../types/Button";
import styles from "./Button.module.scss";

type ButtonProps = {
  variant?: ButtonVariants;
  text: string;
  color?: Colors;
  customStyle?: React.CSSProperties;
  onClick?: () => void;
  type?:  React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
};

export const Button = ({ variant="default", type="button", color="green", text="Button", customStyle, onClick}: ButtonProps) => {
  return (
   <button 
    className={`${styles['button']} ${styles[`button__${variant}--${color}`]}`}
    onClick={onClick}
    style={customStyle}
    type={type}
   >
    {text}
   </button>
  )
}