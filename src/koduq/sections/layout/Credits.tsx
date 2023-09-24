import { Link } from '../../../design-system/components/atoms';
import styles from './Credits.module.scss';

export const Credits = () => {
  return (
    <section className={`${styles.credits}`}>
      <section className={`${styles.credits__sect} ${styles['credits__sect--up']}`}>
        <div>
          <p>KODU is a fictional project made with</p>
          <p>React | Typescript | SCSS | NodeJS</p>
        </div>
        <span>
          <Link openInNewTab={true} size='s' color="green" href='https://github.com/HadalyVillasclaras/kodu_web'>GitHub</Link>
        </span>
      </section>
      <section className={`${styles.credits__sect} ${styles['credits__sect--down']}`}>
        <p>Design & web development by Hadaly Villasclaras © 2023</p>
      </section>
    </section>
  );
};