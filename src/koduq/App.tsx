import { RouterProvider } from 'react-router-dom';
import { router } from './core/config/router';
import { NavIconProvider } from './contexts/NavIconProvider';
import '../design-system/index.scss';
import Lenis from '@studio-freight/lenis';

function App () {
  const lenis = new Lenis();

  lenis.on('scroll', (e: Event) => {
    console.log(e);
  });
  
  function raf(time:number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);
  return (
    <NavIconProvider>
      <RouterProvider router={router}/>
    </NavIconProvider>
  );
}
export default App;
