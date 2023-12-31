import { createHashRouter } from 'react-router-dom';
import { KoduTemplate } from '../../templates/KoduTemplate';
import { ErrorTemplate } from '../../templates/ErrorTemplate';
import { DestinationDetailPage, HomePage, NotFoundPage } from '../../pages';

/* replaced createBrowserRouter for createHashRouter in order to make it work in GitHub pages. */
export const router = createHashRouter([
  {
    path: '/',
    element: <KoduTemplate />,
    errorElement: <ErrorTemplate><NotFoundPage /></ErrorTemplate>,
    children: [
      {
        path: '/',
        element: <HomePage />,
        id: 'home',
        handle: {
          crumb: () => 'Home'
        }
      },
      {
        path: 'destination/:id/:quarterId?',
        element: <DestinationDetailPage />,
        handle: {
          crumb: () => 'Destination'
        }
      }
    ]
  }
], {
  // basename: "/kodu_web"
}
);
