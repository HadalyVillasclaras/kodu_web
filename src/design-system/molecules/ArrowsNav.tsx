import { IconButton } from '../atoms/IconButton';

type Colors = "cream" | "green" | "brown";

type ArrowsNavProps = {
  color: Colors;
  width?: string;
  onLeft: () => void;
  onRight: () => void;
}

export const ArrowsNav = ({ onLeft, onRight, color, width }: ArrowsNavProps) => {
  return (
    <nav style={{ display: "flex", gap: "3rem", margin: "2rem 0" }}>
      <IconButton
        icon='arrowLeft'
        color={color}
        ariaLabel="Previous"
        onClick={onLeft}
        width={width}
      />
      <IconButton
        icon='arrowRight'
        color={color}
        ariaLabel="Next"
        onClick={onRight}
        width={width}
      />
    </nav>
  )
}