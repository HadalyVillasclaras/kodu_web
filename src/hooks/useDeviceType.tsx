import { useState, useEffect } from 'react';
import { breakpointValues } from '../design-system/types/Breakpoints';

export enum DeviceType {
  MOBILE = 'mobile',
  TABLET = 'tablet',
  DESKTOP = 'desktop'
}

export const useDeviceType = (): DeviceType => {

  const getInitialDeviceType = (): DeviceType => {
    const matchDesktop = window.matchMedia(breakpointValues.desktop).matches;
    const matchTablet = window.matchMedia(breakpointValues.tablet).matches;

    if (matchDesktop) {
      return DeviceType.DESKTOP;
    } else if (matchTablet) {
      return DeviceType.TABLET;
    } else {
      return DeviceType.MOBILE;
    }
  };

  const [deviceType, setDeviceType] = useState(getInitialDeviceType);

  useEffect(() => {
    const determineDevice = () => {
      setDeviceType(getInitialDeviceType());
    };

    const mediaDesktop = window.matchMedia(breakpointValues.desktop);
    const mediaTablet = window.matchMedia(breakpointValues.tablet);

    mediaDesktop.addEventListener('change', determineDevice);
    mediaTablet.addEventListener('change', determineDevice);

    return () => {
      mediaDesktop.removeEventListener('change', determineDevice);
      mediaTablet.removeEventListener('change', determineDevice);
    };
  }, []);

  return deviceType;
}
