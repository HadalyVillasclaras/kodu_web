import { Logo, Button } from '../../design-system/atoms/index';
import styles from './Header.module.scss';
import { CheckAvailabilityForm } from '../../design-system/molecules/CheckAvailabilityForm';

export const Header = () => {
  return (
    <header className={styles["header"]}>
      <Logo size={12} />
      <CheckAvailabilityForm />
      <Button variant='default' color='green' text='Book' />
    </header>
  )
}