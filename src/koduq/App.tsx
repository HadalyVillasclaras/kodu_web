import { RouterProvider } from 'react-router-dom';
import { router } from './core/config/router';
import { NavIconProvider } from './contexts/NavIconProvider';
import '../design-system/index.scss';

function App() {
  console.groupCollapsed("Website credits"),
  console.log("%cDesign and development by Hadaly Villasclaras 🍃🌿", "background-color: brown; color: white"),
  console.groupEnd()
  return (
    <NavIconProvider>
      <RouterProvider router={router}/>
    </NavIconProvider>
  );
}
export default App;
