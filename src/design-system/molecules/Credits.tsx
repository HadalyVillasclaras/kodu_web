import { Section } from '../objects/Section'
import { Link } from '../atoms/index'
import styles from './Credits.module.scss';


export const Credits = () => {
  return (
    <section className={`${styles["credits"]}`}>
      <section className={`${styles["credits__sect"]} ${styles["credits__sect-up"]}`}>
        <div>
          <p>KODU is a fictional project made with</p>
          <p>React | Typescript | SASS | NodeJS</p>
        </div>
        <Link size='small' mode="primary" href='https://github.com/HadalyVillasclaras/kodu_web'>GitHub</Link>
      </section>
      <section className={`${styles["credits__sect"]} ${styles["credits__sect-down"]}`}>
        <p>Design & web development by Hadaly © 2023</p>
      </section>
    </section>
  )
}