import logoCream from '../../assets/logo/logo-cream.png';
import logoGreen from '../../assets/logo/logo-green.png';
import logoBrown from '../../assets/logo/logo-brown.png';

type LogoProps = {
  color?: "cream" | "green" | "brown";
  size: number;
};

const logoMap = {
  cream: logoCream,
  green: logoGreen,
  brown: logoBrown
};


export const Logo = ({ color="brown", size }: LogoProps) => {
  return (
    <img 
      src={logoMap[color]} 
      alt="Logo" 
      style={{ width: `${size}rem`, height: 'auto' }}
    />
  );
};