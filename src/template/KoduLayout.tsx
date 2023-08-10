import { Outlet } from 'react-router-dom'
import { Cookies } from "../shared/Cookies/Cookies"
import { Header, Navbar, Footer, Credits } from "../sections/layout" 

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