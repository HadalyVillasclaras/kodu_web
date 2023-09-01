import { createBrowserRouter } from 'react-router-dom'
import { KoduTemplate } from '../../template/KoduTemplate';
import { ErrorTemplate } from '../../template/ErrorTemplate';
import { DestinationDetailPage, HomePage, NotFoundPage } from '../../pages';


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <KoduTemplate />,
    errorElement: <ErrorTemplate><NotFoundPage/></ErrorTemplate> ,
    children: [
      {
        path: "/",
        element: <HomePage />,
        id: "home",
        handle: {
          crumb: () => 'Home'
        }
      },
      {
        path: "destination/:id",
        element: <DestinationDetailPage />,
        handle: {
          crumb: () => 'Destination'
        }
      }
    ]
  }
],{
basename: "/kodu_web"}
);