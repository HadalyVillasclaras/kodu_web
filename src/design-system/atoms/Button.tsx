import styles from "./Button.module.scss";

type ButtonProps = {
  variant?: "default" | "underline";
  text: string;
  color?: "green" | "cream" | "brown";
  size?: number;
  onClick?: () => void;
};

export const Button = ({ variant="default", size, color="green", text="Button", onClick}: ButtonProps) => {
  return (
   <button 
    className={`${styles['button']} ${styles[`button__${variant}-${color}`]}`}
    onClick={onClick}
   >
    <span>{text}</span> 
   </button>
  );
};