import { Outlet } from 'react-router-dom'
import { Navbar, Credits, Header } from "../sections/layout"
import { ReactNode, useContext, useEffect } from 'react'
import { NavIconContext } from '../contexts/NavIconContext';

type Props = {
  children: ReactNode;
}

export const ErrorTemplate = ({ children }: Props) => {
  const { setIconColor } =  useContext(NavIconContext);

  useEffect(() => {
    setIconColor("cream");
  }, [])

  return (
    <>
      <Header bgColor='green'/>
      <Navbar />
      <main>
        {children ?? <Outlet />}
      </main>
      <Credits />
    </>
  )
}