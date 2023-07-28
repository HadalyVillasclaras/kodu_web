import { Logo } from '../../design-system/atoms/Logo';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles["footer-container"]}>
        <Logo color='cream' size={9}/>
    </footer>
  )
}
