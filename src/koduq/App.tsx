import { RouterProvider } from 'react-router-dom'
import { router } from "./core/config/router";
import { NavIconProvider } from "./contexts/NavIconProvider";
import "../design-system/index.scss";

function App() {
  return (
    <NavIconProvider>
      <RouterProvider router={router} />
    </NavIconProvider>
  )
}
export default App