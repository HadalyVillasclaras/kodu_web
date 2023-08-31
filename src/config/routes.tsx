import { createBrowserRouter } from 'react-router-dom'
import { HomePage, HouseDetailPage, NotFoundPage } from '../pages'
import { KoduTemplate } from '../template/KoduTemplate'
import { ErrorTemplate } from '../template/ErrorTemplate';

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <KoduTemplate />,
    errorElement: <ErrorTemplate><NotFoundPage/></ErrorTemplate> ,
    children: [
      {
        path: "/",
        element: <HomePage />,

        handle: {
          crumb: () => 'Home'
        }
      },
      {
        path: "house/:id",
        element: <HouseDetailPage />,
        handle: {
          crumb: () => 'House'
        }
      }
    ]
  }
],{
basename: "/kodu_web"}
);