import { Colors } from "../types";
import styles from "./Button.module.scss";

type ButtonProps = {
  variant?: "default" | "underline";
  text: string;
  color?: Colors;
  onClick?: () => void;
};

export const Button = ({ variant="default", color="green", text="Button", onClick}: ButtonProps) => {
  return (
   <button 
    className={`${styles['button']} ${styles[`button__${variant}-${color}`]}`}
    onClick={onClick}
   >
    {text}
   </button>
  )
}