import { Outlet } from 'react-router-dom'
import { Cookies } from "../shared/cookies/Cookies"
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