import { Logo  } from '../../design-system/atoms';
import styles from './Header.module.scss';
import { CheckAvailabilityForm } from '../../design-system/molecules/CheckAvailabilityForm';

export const Header = () => {
  return (
    <>
    <div className={styles["header-navtool"]}>
    </div>
    <header className={styles["header"]}>
        <Logo height='100%' size={18} />
        <CheckAvailabilityForm />
    </header>
    </>
  )
}