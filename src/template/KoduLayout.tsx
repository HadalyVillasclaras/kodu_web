import { Outlet } from 'react-router-dom'
import { Cookies } from "../design-system/molecules/Cookies.tsx"
import { Credits } from "../design-system/molecules/Credits.tsx"
import { Header, Navbar, Footer } from "../sections/layout/index.ts"

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