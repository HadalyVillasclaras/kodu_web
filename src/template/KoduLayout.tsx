import { Outlet } from 'react-router-dom'
import { Header, Navbar, Footer, Credits } from "../sections/layout" 
import { Cookies } from '../sections/layout/Cookies'

export const KoduLayout = () => {
  return (
    <>
      <Header />
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