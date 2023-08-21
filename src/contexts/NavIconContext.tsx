import { createContext, useContext } from 'react';
import { Colors } from '../design-system/types';

type NavIconContextType = {
  color: Colors;
  setIconColor: (color: Colors) => void;
  rotate: boolean;
  setRotate: (rotate: boolean) => void;
};

const defaultValue: NavIconContextType = {
  color: 'green',
  setIconColor: () => {},
  rotate: false,
  setRotate: () => {}
};

export const NavIconContext = createContext<NavIconContextType>(defaultValue);

export const useNavIconColor = () => {
  return useContext(NavIconContext);
};
