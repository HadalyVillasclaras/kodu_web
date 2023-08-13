import { Logo  } from '../../design-system/atoms';
import styles from './Header.module.scss';
import { CheckAvailabilityForm } from '../../design-system/molecules/CheckAvailabilityForm';
import { Divider } from '../../design-system/atoms/Divider';
import { useEffect,  useRef } from 'react';
import { useGsapWidthExpand } from '../../shared/hooks/useGsapWidthExpand';

export const Header = () => {
  const dividerRef = useRef<HTMLHRElement | null>(null);
  const { expandWidthOnScroll } = useGsapWidthExpand();

  useEffect(() => {
    setTimeout(() => {
      expandWidthOnScroll(dividerRef.current, `.${styles['header']}`);
    }, 4000);
}, []);

  return (
    <>
    <div className={styles["header-navtool"]}>
    </div>
    <header className={styles["header"]}>
        <Logo color='brown' height='100%' size={18} />
        <CheckAvailabilityForm />
    </header>
    <Divider ref={dividerRef}/>

    </>
  )
}