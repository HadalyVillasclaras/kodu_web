import { RefObject, useEffect, useState } from "react";

export function useOnviewObserver(refs: Record<string, RefObject<HTMLElement>>) {
  const [inViewSectionId, setInViewSectionId] = useState<string | null>(null);
  const observerOptions = {
    root: null,
    rootMargin: '-50%',
    threshold: 0
  };

  const callback = (entries: IntersectionObserverEntry[]) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            setInViewSectionId(entry.target.id);
        } else {
            setInViewSectionId(null);
        }
    }
};

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      console.error('IntersectionObserver is not supported in this browser.');
      return;
    }

    const observer = new IntersectionObserver(
      callback,
      observerOptions
    );

    // Observe all refs  
    Object.values(refs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(refs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
      observer.disconnect();
    };
  }, []);

  return inViewSectionId;
}
