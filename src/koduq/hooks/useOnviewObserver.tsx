import { type RefObject, useEffect, useState } from 'react';

/* Returns current section id on view */

interface ObserverOptions {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
}

export function useOnviewObserver (refs: Record<string, RefObject<HTMLElement>>, observerOptions?: ObserverOptions) {
  const [inViewSectionId, setInViewSectionId] = useState<string | null>('hero');

  const defaultObserverOptions: ObserverOptions = {
    root: null,
    rootMargin: '-50%',
    threshold: 0
  };

  const activeSections = new Set<string>();

  const callback = (entries: IntersectionObserverEntry[]) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        activeSections.add(entry.target.id);
      } else {
        activeSections.delete(entry.target.id);
      }
    }

    if (activeSections.size > 0) {
      setInViewSectionId([...activeSections][activeSections.size - 1]);
    } else {
      setInViewSectionId(null);
    }
  };

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      console.error('IntersectionObserver is not supported in this browser.');
      setInViewSectionId('hero');
      return;
    }

    const observer = new IntersectionObserver(
      callback,
      observerOptions || defaultObserverOptions
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
