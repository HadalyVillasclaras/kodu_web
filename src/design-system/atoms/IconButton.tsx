import { Icon } from '.';
import icons from "../../assets/icons/Icons";
import { Colors, Size } from '../types';

export type Icons = keyof typeof icons;

type IconButtonProps = {
  icon: Icons;
  color?: Colors;
  width?: string;
  size?: Size;
  ariaLabel: string;
  onClick?: () => void;
}

export const IconButton = ({ icon, size="m", width, color="green", ariaLabel, onClick}: IconButtonProps) => {
  return (
    <button onClick={onClick} aria-label={ariaLabel}>
      <Icon icon={icon} size={size} color={color} width={width} />
    </button>
  )
}