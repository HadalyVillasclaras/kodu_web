import { Outlet } from 'react-router-dom';
import { Navbar, Credits } from '../sections/layout';
import { type ReactNode, useContext, useEffect } from 'react';
import { NavIconContext } from '../context/NavIconContext';

interface ErrorTemplateProps {
  children: ReactNode
}

export const ErrorTemplate = ( { children }: ErrorTemplateProps ) => {
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
