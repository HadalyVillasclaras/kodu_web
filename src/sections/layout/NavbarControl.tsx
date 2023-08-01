import { Icon } from '../../design-system/atoms/index'

type NavbarControlProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export const NavbarControl = ({ isOpen, toggleSidebar }: NavbarControlProps) => {
  return (
    <div style={{ position: "fixed", height: "100vh", right: "1rem", display: "flex", alignItems: "center", zIndex: "3" }}>
      <button onClick={toggleSidebar} aria-label={isOpen ? "Close" : "Open"}>
        <Icon icon={isOpen ? 'less' : 'plus'} size='large' color={isOpen ? 'cream' : 'green'} />
      </button>
    </div>
  )
}