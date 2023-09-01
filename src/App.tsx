import "./design-system/index.scss";
import { RouterProvider } from 'react-router-dom'
import { router } from "./core/config/router";
import { NavIconProvider } from "./contexts/NavIconProvider";
function App() {

  return (
    <NavIconProvider>
      <RouterProvider router={router} />
    </NavIconProvider>
  )
}
export default App