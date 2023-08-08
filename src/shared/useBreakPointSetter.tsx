// mediaQueryUtility.tsx
import { useEffect } from 'react';
import { Breakpoints, breakpointValues } from '../design-system/types/Breakpoints';

export const useBreakpointSetter = (action: (value: number) => void, values: Record<string, number>) => {
  useEffect(() => {
    const mediaQueries = Object.keys(breakpointValues).map((bp) => {
      const mq = window.matchMedia(breakpointValues[bp as keyof Breakpoints]);
      const listener = (e: MediaQueryListEvent) => {
        if (e.matches && values[bp]) {
          action(values[bp]);
        }
      };
      mq.addEventListener('change', listener);
      listener(mq); // check immediately on component mount
      return { mq, listener };
    });

    return () => {
      mediaQueries.forEach(({ mq, listener }) => {
        mq.removeEventListener('change', listener);
      });
    };
  }, [action, values]);
};
