import { Outlet } from 'react-router-dom';
import { Navbar, Credits } from '../sections/layout';
import { type ReactNode, useContext, useEffect } from 'react';
import { NavIconContext } from '../contexts/NavIconContext';

interface Props {
  children: ReactNode
}

export const ErrorTemplate = ( { children }: Props ) => {
  const { setIconColor } = useContext(NavIconContext);

  useEffect(() => {
    setIconColor('cream');
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {children ?? <Outlet />}
      </main>
      <Credits />
    </>
  );
};
