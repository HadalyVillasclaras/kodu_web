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
  customStyle?: React.CSSProperties;
  onClick?: () => void;
}

export const IconButton = ({ icon, size="m", width, color="green", ariaLabel, customStyle, onClick}: IconButtonProps) => {
  return (
    <button onClick={onClick} aria-label={ariaLabel} style={customStyle}>
      <Icon icon={icon} size={size} color={color} width={width} />
    </button>
  )
}