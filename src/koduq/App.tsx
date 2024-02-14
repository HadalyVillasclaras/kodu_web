import { RouterProvider } from 'react-router-dom';
import { router } from './core/config/router';
import '../design-system/index.scss';
import { NavIconProvider } from './context/NavIconProvider';

function App() {
  console.groupCollapsed("Website credits");
  console.log("%cDesign and development by Hadaly Villasclaras 🍃🌿", "background-color: brown; color: white");
  console.groupEnd();
  
  return (
    <NavIconProvider>
      <RouterProvider router={router}/>
    </NavIconProvider>
  );
}
export default App;
