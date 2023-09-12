import "./design-system/index.scss";
import { RouterProvider } from 'react-router-dom'
import { router } from "./koduq/core/config/router";
import { NavIconProvider } from "./koduq/contexts/NavIconProvider";
const VITE_BASE_ASSETS = import.meta.env.VITE_BASE_ASSETS;
const VITE_BASE_PATH = import.meta.env.VITE_BASE_PATH;


function App() {
  console.log(VITE_BASE_PATH);
  console.log(VITE_BASE_ASSETS);

  return (
    <NavIconProvider>
      <RouterProvider router={router} />
    </NavIconProvider>
  )
}
export default App