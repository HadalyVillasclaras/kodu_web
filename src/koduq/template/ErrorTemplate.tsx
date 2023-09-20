import { Outlet } from 'react-router-dom';
import { Navbar, Credits } from '../sections/layout';
import { type ReactNode, useContext, useEffect } from 'react';
import { NavIconContext } from '../contexts/NavIconContext';
import { ScrollToTop } from '../sections/shared/ScrollToTop';

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
      <ScrollToTop/>
      <Navbar />
      <main>
        {children ?? <Outlet />}
      </main>
      <Credits />
    </>
  );
};
