import { Outlet, useMatches } from 'react-router-dom'
import { Header, Navbar, Footer, Credits } from "../sections/layout" 
import { Cookies } from '../sections/layout/Cookies'

export const KoduTemplate = () => {
  const routesData = useMatches();
  const isDestinationPage = routesData
  .some((route) => (route?.id === 'destination'));

  return (
    <>
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