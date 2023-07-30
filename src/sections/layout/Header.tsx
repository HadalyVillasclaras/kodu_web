import { Logo } from '../../design-system/atoms/Logo';
import styles from './Header.module.scss';
import { Button } from '../../design-system/atoms/Button';
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