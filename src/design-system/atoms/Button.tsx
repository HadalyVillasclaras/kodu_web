import styles from "./Button.module.scss";

type ButtonProps = {
  variant?: "default" | "underline";
  text: string;
  color?: "green" | "cream" | "brown";
  size?: number;
};

export const Button = ({ variant="default", size, color="green", text="Button" }: ButtonProps) => {
  console.log(variant);
  console.log(color);
  return (
   <button className={`${styles['button']} ${styles[`button__${variant}-${color}`]}`}>
    <span>{text}</span> 
   </button>
  );
};