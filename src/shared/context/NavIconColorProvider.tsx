import React, { useState, ReactNode } from 'react';
import { Colors } from '../../design-system/types';
import { NavIconColorContext } from './NavIconColorContext';

type NavIconColorProviderProps = {
  children: ReactNode;
}

const NavIconColorProvider: React.FC<NavIconColorProviderProps> = ({ children }) => {
  const [color, setColor] = useState<Colors>('green');

  return (
    <NavIconColorContext.Provider value={{ color, setColor }}>
      {children}
    </NavIconColorContext.Provider>
  );
};

export default NavIconColorProvider; 
