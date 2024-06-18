import { useContext, useEffect } from 'react';
import { NavIconContext } from '../context/NavIconContext';
import { useOnviewObserver } from '.';

export function useHideNavIcon (sectionId: string, ref: Record<string, React.RefObject<HTMLElement>>) {
  const { setHidden } = useContext(NavIconContext);

  const inViewSectionId = useOnviewObserver(ref);
  function hideNavIconOnSection () {
    if (inViewSectionId === sectionId) {
      setHidden(true);
    } else if (inViewSectionId !== 'footer' && inViewSectionId !== 'credits') {
      setHidden(false);
    }
  }

  useEffect(() => {
    hideNavIconOnSection();
  }, [inViewSectionId]);
}
