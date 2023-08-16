import { RefObject, useEffect, useState } from "react";

export function useOnviewObserver(refs: Record<string, RefObject<HTMLElement>>) {
  const [inViewSectionId, setInViewSectionId] = useState<string | null>(null);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      console.error('IntersectionObserver is not supported in this browser.');
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '-50%',
      threshold: 0
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting && entry.target.id !== inViewSectionId) {
            setInViewSectionId(entry.target.id);
          }
        }
      },
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
  }, [refs]);

  return inViewSectionId;
}
