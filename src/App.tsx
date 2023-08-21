import "./design-system/index.scss";
import "./design-system/settings/App.css";
import { RouterProvider } from 'react-router-dom'
import { routes } from "./config/routes";
import NavIconColorProvider from "./contexts/NavIconColorProvider";

function App() {
  return (
    <NavIconColorProvider>
      <RouterProvider router={routes} />
    </NavIconColorProvider>
  )
}
export default App