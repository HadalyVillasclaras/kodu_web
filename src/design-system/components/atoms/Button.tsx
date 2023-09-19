import { type Colors } from '../../tokens';
import { type ButtonVariants } from '../../tokens/Button';
import styles from './Button.module.scss';

interface ButtonProps {
  variant?: ButtonVariants
  text: string
  color?: Colors
  customStyle?: React.CSSProperties
  onClick?: (x?: any) => void
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
}

export const Button = ({ variant = 'default', type = 'button', color = 'green', text = 'Button', customStyle, onClick }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[`button__${variant}--${color}`]}`}
      onClick={onClick}
      style={customStyle}
      type={type}
    >
      {text}
    </button>
  );
};
