import { Heading } from '../../../../../design-system/components/atoms';
import { ContactForm } from '../../ContactForm';
import styles from './ContactDdSection.module.scss';

export const ContactDdSection = () => {

  return (
    <section className={`${styles[`dd-contact`]}`}>
      <section className={`${styles[`dd-contact__sect`]}  ${styles[`contact`]}`}>
        <p>info@koduhost.com</p>
        <p>+45 564 545 342</p>
      </section>
      <section className={`${styles[`dd-contact__sect`]}`}>
        <Heading as='h4' color='cream' font='fancy'>Feel free to contact us</Heading>
        <ContactForm/>
      </section>
    </section>
  )
}