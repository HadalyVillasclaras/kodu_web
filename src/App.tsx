import "./design-system/index.scss";
import { RouterProvider } from 'react-router-dom'
import { router } from "./koduq/core/config/router";
import { NavIconProvider } from "./koduq/contexts/NavIconProvider";

function App() {
  return (
    <NavIconProvider>
      <RouterProvider router={router} />
    </NavIconProvider>
  )
}
export default App