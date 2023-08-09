import { Logo  } from '../../design-system/atoms';
import styles from './Header.module.scss';
import { CheckAvailabilityForm } from '../../design-system/molecules/CheckAvailabilityForm';
import { Divider } from '../../design-system/atoms/Divider';

export const Header = () => {
  return (
    <>
    <div className={styles["header-navtool"]}>
    </div>
    <header className={styles["header"]}>
        <Logo color='brown' height='100%' size={18} />
        <CheckAvailabilityForm />
    </header>
    <Divider />

    </>
  )
}