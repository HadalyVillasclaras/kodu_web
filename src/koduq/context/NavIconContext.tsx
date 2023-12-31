import { createContext } from 'react';
import { type Colors } from '../../design-system/tokens';

interface NavIconContextType {
  color: Colors
  setIconColor: (color: Colors) => void
  rotate: boolean
  setRotate: (rotate: boolean) => void
  hidden: boolean
  setHidden: (hidden: boolean) => void
}

const defaultValue: NavIconContextType = {
  color: 'green',
  setIconColor: () => {},
  rotate: false,
  setRotate: () => {},
  hidden: false,
  setHidden: () => {}
};

export const NavIconContext = createContext<NavIconContextType>(defaultValue);