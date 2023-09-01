import "./design-system/index.scss";
import { RouterProvider } from 'react-router-dom'
import { routes } from "./core/config/routes";
import { NavIconProvider } from "./contexts/NavIconProvider";

function App() {
  return (
    <NavIconProvider>
      <RouterProvider router={routes} />
    </NavIconProvider>
  )
}
export default App