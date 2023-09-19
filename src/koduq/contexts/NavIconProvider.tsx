import { useState, type ReactNode } from 'react';
import { type Colors } from '../../design-system/tokens';
import { NavIconContext } from './NavIconContext';

interface NavIconProviderProps {
  children: ReactNode
}

export const NavIconProvider = ({ children }: NavIconProviderProps) => {
  const [color, setIconColor] = useState<Colors>('green');
  const [rotate, setRotate] = useState(false);
  const [hidden, setHidden] = useState(false);

  return (
    <NavIconContext.Provider value={{ color, setIconColor, rotate, setRotate, hidden, setHidden }}>
      {children}
    </NavIconContext.Provider>
  );
};
