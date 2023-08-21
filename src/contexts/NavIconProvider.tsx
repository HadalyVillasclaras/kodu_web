import { useState, ReactNode } from 'react';
import { Colors } from '../design-system/types';
import { NavIconContext } from './NavIconContext';

type NavIconProviderProps = {
  children: ReactNode;
}

export const NavIconProvider = ({ children }:NavIconProviderProps) => {
  const [color, setIconColor] = useState<Colors>('green');
  const [rotate, setRotate] = useState(false);
  return (
    <NavIconContext.Provider value={{ color, setIconColor, rotate, setRotate  }}>
      {children}
    </NavIconContext.Provider>
  );
};