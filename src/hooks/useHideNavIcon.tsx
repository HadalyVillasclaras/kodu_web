// import { useContext, useEffect, useState } from 'react';
// import { NavIconContext } from '../contexts/NavIconContext';
// import { useOnviewObserver } from '.';

// export function useHideNavIcon(sectionId, ref) {
//   const { setHidden } = useContext(NavIconContext);
  
//   const refsToObserve = {
//     [sectionId]: ref
//   };

//   const inViewSectionId = useOnviewObserver(refsToObserve);
//   useEffect(() => {
//     if (inViewSectionId === sectionId) {
//       setHidden(true);
//     } else if (inViewSectionId !== sectionId) {
//       setHidden(false);
//     }
//   }, [inViewSectionId, sectionId, setHidden]);

//   return inViewSectionId;
//   }
  