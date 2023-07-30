import { Logo } from '../../design-system/atoms/Logo';
import styles from './Footer.module.scss';
import navItems from '../../data/NavItems.json';
import { Link } from '../../design-system/atoms/Link';
import { Credits } from '../../design-system/molecules/Credits';

export const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <Logo color='cream' size={12} />
      <ul className={styles["footer__nav-list"]}>
        {navItems.map((navItem, index) => (
          <li key={index}>
            <Link size='mid' href={navItem.link}>{navItem.name}</Link>
          </li>
        ))}
      </ul>
      <section className={styles["footer__contact"]}>
        <p>info@koduhost.com</p>
        <p>+45 564 545 342</p>
      </section>
      <section className={styles["footer__policies"]}>
        <p><Link mode='tertiary' size="xs" href='#'>Terms & Conditions</Link></p>
        <p><Link mode='tertiary' size="xs" href='#'>Cookies</Link></p>
        <p><Link mode='tertiary' size="xs" href='#'>Privacy Policy</Link></p>
      </section>
    </footer>
  )
}
