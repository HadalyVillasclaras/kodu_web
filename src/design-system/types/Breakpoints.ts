export type Breakpoints = {
  desktop: string;
  tablet: string;
  mobile: string;
};

export const breakpointValues: Breakpoints = {
  desktop: '(min-width: 992px)',
  tablet: '(min-width: 768px) and (max-width: 991px)',
  mobile: '(max-width: 576px)'
};
