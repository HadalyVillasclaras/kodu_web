import { Outlet } from 'react-router-dom'
import { Cookies } from "../design-system/molecules/Cookies.tsx"
import { Credits } from "../sections/layout/Credits.tsx"
import { Header, Navbar, Footer } from "../sections/layout"
import { Fader } from '../sections/home/Fader.tsx'

export const KoduLayout = () => {
  return (
    <>
      <Fader/>
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