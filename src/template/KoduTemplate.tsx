import { Outlet } from 'react-router-dom'
import { Header, Navbar, Footer, Credits } from "../sections/layout" 
import { Cookies } from '../sections/layout/Cookies'

export const KoduTemplate = () => {
  return (
    <>
      <Header isDinamic={true}/>
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