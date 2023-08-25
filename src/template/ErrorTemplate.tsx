import { Outlet } from 'react-router-dom'
import { Navbar, Credits, Header } from "../sections/layout"
import { ReactNode, useEffect } from 'react'
import { useNavIconColor } from '../contexts/NavIconContext';

type Props = {
  children: ReactNode;
}

export const ErrorTemplate = ({ children }: Props) => {
  const { setIconColor } = useNavIconColor();
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