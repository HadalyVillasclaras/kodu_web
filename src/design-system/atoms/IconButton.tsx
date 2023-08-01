import { Icon } from '.';
import icons from "../../assets/icons/Icons";

export type Icons = keyof typeof icons;

type IconButtonProps = {
  icon: Icons;
  color?: "green" | "cream" | "brown";
  width?: string;
  size?: "small" | "medium" | "large" | "xl";
  ariaLabel: string;
  onClick?: () => void;
}

export const IconButton = ({ icon, size="medium", width, color="green", ariaLabel, onClick}: IconButtonProps) => {
  return (
    <button onClick={onClick} aria-label={ariaLabel}>
      <Icon icon={icon} size={size} color={color} width={width} />
    </button>
  )
}