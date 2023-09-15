import { Outlet, useMatches } from 'react-router-dom'
import { Header, Navbar, Footer, Credits } from "../sections/layout" 
import { Cookies } from '../sections/layout/Cookies'
import { DropdownFrieze } from '../sections/shared/DropdownFrieze/DropdownFrieze';

export const KoduTemplate = () => {
  const routesData = useMatches();
  const isHomePage = routesData.some((route) => (route?.id === 'home'));

  return (
    <>
    {
      !isHomePage 
      ? <DropdownFrieze hasLogo={true}/>
      : <Header/>
    }
      <Navbar/>
      <main>
        <Outlet/>
      </main>
      <Footer />
      <Credits/>
      <Cookies/>
    </>
  )
}