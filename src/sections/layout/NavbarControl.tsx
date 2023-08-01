import { IconButton } from '../../design-system/atoms';

type NavbarControlProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export const NavbarControl = ({ isOpen, toggleSidebar }: NavbarControlProps) => {
  return (
    <div style={{ position: "fixed", height: "100vh", right: "1rem", display: "flex", alignItems: "center", zIndex: "3" }}>
      <IconButton 
        icon={isOpen ? 'less' : 'plus'} 
        color={isOpen ? 'cream' : 'green'} 
        ariaLabel={isOpen ? "Close" : "Open"}
        onClick={toggleSidebar}
      />
    </div>
  )
}