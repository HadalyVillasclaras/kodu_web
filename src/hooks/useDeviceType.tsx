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
      const matchDesktop = window.matchMedia(breakpointValues.desktop).matches;
      const matchTablet = window.matchMedia(breakpointValues.tablet).matches;
      
      if (matchDesktop) {
        setDeviceType(DeviceType.DESKTOP);
      } else if (matchTablet) {
        setDeviceType(DeviceType.TABLET);
      } else {
        setDeviceType(DeviceType.MOBILE);
      }
    }
    window.addEventListener('resize', determineDevice);
    return () => window.removeEventListener('resize', determineDevice);
  }, []); 

  return deviceType;
}