import { Outlet, useMatches, ScrollRestoration } from 'react-router-dom';
import { Navbar, Footer} from '../sections/layout';
import { Cookies } from '../sections/layout/Cookies';
import { DropdownFrieze } from '../sections/shared/DropdownFrieze/DropdownFrieze';
import { Header } from '../sections/home/Header';

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
      <Cookies/>
      <ScrollRestoration  getKey={() => {
        return Math.random().toString();
      }}/>
    </>
  );
};
