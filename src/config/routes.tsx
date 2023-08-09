import { createBrowserRouter } from 'react-router-dom'
import { HomePage, HouseDetailPage, NotFoundPage } from '../pages'
import { KoduLayout } from '../template/KoduLayout'

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <KoduLayout />,
    errorElement: <NotFoundPage />,
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
        handle: {
          crumb: () => 'House'
        },
        element: <HouseDetailPage />
      }
    ]
  }
],{
basename: "/kodu_web"}
);