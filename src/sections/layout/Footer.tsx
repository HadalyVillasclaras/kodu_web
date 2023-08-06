import styles from './Footer.module.scss';
import navItems from '../../config/data/NavItems.json';
import { Link, Logo } from '../../design-system/atoms';

export const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <Logo color='cream' size={7} />
      <ul className={styles["footer__nav-list"]}>
        {navItems.map((navItem, index) => (
          <li key={index}>
            <Link color='cream' size='l' href={navItem.link}>{navItem.name}</Link>
          </li>
        ))}
      </ul>
      <section className={styles["footer__contact"]}>
        <p>info@koduhost.com</p>
        <p>+45 564 545 342</p>
      </section>
      <section className={styles["footer__policies"]}>
        <p><Link color='brown' size="xs" href='javascript:void(0);'>Terms & Conditions</Link></p>
        <p><Link color='brown' size="xs" href='javascript:void(0);'>Cookies</Link></p>
        <p><Link color='brown' size="xs" href='javascript:void(0);'>Privacy Policy</Link></p>
      </section>
    </footer>
  )
}