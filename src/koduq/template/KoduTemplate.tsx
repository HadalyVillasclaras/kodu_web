import { Outlet, useMatches } from 'react-router-dom';
import { Header, Navbar, Footer, Credits } from '../sections/layout';
import { Cookies } from '../sections/layout/Cookies';
import { DropdownFrieze } from '../sections/shared/DropdownFrieze/DropdownFrieze';
import { ScrollToTop } from '../sections/shared/ScrollToTop';

export const KoduTemplate = () => {
  const routesData = useMatches();
  const isHomePage = routesData.some((route) => (route?.id === 'home'));

  return (
    <>
      <ScrollToTop />
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
      {/* <Credits/> */}
      <Cookies/>
    </>
  );
};
