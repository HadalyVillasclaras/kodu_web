import { useState, useEffect } from 'react';
import { breakpointValues } from '../design-system/types/Breakpoints';

export enum DeviceType {
  MOBILE = 'mobile',
  TABLET = 'tablet',
  DESKTOP = 'desktop'
}

export const useDeviceType = (): DeviceType => {
  const [deviceType, setDeviceType] = useState(DeviceType.MOBILE); // Default to MOBILE

  useEffect(() => {
    const matchDesktop = window.matchMedia(breakpointValues.desktop).matches;
    const matchTablet = window.matchMedia(breakpointValues.tablet).matches;
    
    if (matchDesktop) {
      setDeviceType(DeviceType.DESKTOP);
    } else if (matchTablet) {
      setDeviceType(DeviceType.TABLET);
    } else {
      setDeviceType(DeviceType.MOBILE);
    }
  }, []);

  return deviceType;
}

