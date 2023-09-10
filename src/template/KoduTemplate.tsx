import { Outlet, useMatches } from 'react-router-dom'
import { Header, Navbar, Footer, Credits } from "../sections/layout" 
import { Cookies } from '../sections/layout/Cookies'
import { Frieze } from '../sections/layout/Frieze';

export const KoduTemplate = () => {
  const routesData = useMatches();
  const isDestinationPage = routesData
  .some((route) => (route?.id === 'home'));

  return (
    <>
      <Frieze/>
      <Header isDinamic={isDestinationPage}/>
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