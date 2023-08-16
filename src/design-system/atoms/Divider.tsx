import styles from "./Divider.module.scss";
import { Colors } from '../types';
import { forwardRef, useLayoutEffect, useRef } from "react";
import { useGsapWidthExpand } from "../../shared/hooks/useGsapWidthExpand";

type Props = {
  color?: Colors;
  customStyle?: React.CSSProperties;
}

export const Divider = forwardRef<HTMLHRElement, Props>(({color="brown", customStyle}, ref) => {

  const dividerRef = useRef<HTMLHRElement | null>(null);
  const { expandWidthOnScroll } = useGsapWidthExpand();

  useLayoutEffect(() => {
    expandWidthOnScroll(dividerRef.current, dividerRef.current as HTMLElement);
}, []);
let divRef = ref ? ref : dividerRef;
  return (
    <hr ref={divRef} className={`${styles['hr']} ${styles[`hr-${color}`]}`}  style={customStyle}/>
  )
});