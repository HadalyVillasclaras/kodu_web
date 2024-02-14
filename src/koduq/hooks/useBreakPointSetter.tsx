import { useEffect } from 'react';
import { type Breakpoints, breakpointValues } from '../../design-system/tokens/Breakpoints';

/* Trigger an action with a value based on the current viewport size */

export const useBreakPointSetter = (action: (value: number) => void, values: Record<string, number>) => {
  useEffect(() => {
    const mediaQueries = Object.keys(breakpointValues).map((bp) => {
      const mediaQuery = window.matchMedia(breakpointValues[bp as keyof Breakpoints]);
      const listener = (e: MediaQueryListEvent | MediaQueryList) => {
        if (e.matches && values[bp]) {
          action(values[bp]);
        }
      };
      mediaQuery.addEventListener('change', listener);
      listener(mediaQuery);
      return { mq: mediaQuery, listener };
    });

    return () => {
      mediaQueries.forEach(({ mq, listener }) => {
        mq.removeEventListener('change', listener);
      });
    };
  }, [action, values]);
};
