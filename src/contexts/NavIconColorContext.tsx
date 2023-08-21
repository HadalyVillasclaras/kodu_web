import { createContext, useContext } from 'react';
import { Colors } from '../design-system/types';

type NavIconColorContextType = {
  color: Colors;
  setColor: (color: Colors) => void;
};

const defaultValue: NavIconColorContextType = {
  color: 'green',
  setColor: () => {}
};

export const NavIconColorContext = createContext<NavIconColorContextType>(defaultValue);

export const useNavIconColor = () => {
  return useContext(NavIconColorContext);
};
