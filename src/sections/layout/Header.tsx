import { Logo } from '../../design-system/atoms/Logo';
import styles from './Header.module.scss';
import { Button } from '../../design-system/atoms/Button';


export const Header = () => {
  return (
    <header className={styles["header"]}>
       <Logo size={12}/>
       <Button variant='default' color='green' text='Book'/>
    </header>
  )
}
