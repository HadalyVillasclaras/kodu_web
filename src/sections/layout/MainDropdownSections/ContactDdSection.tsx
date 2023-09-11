import { Heading } from '../../../design-system/atoms';
import styles from './ContactDdSection.module.scss';
import ContactForm from '../../../design-system/molecules/ContactForm';

export const ContactDdSection = () => {

  return (
    <section className={`${styles[`dd-contact`]}`}>
      <section className={`${styles[`dd-contact__sect-contact`]}`}>
        <p>info@koduhost.com</p>
        <p>+45 564 545 342</p>
      </section>
      <section className={`${styles[`dd-contact__sect-form`]}`}>
        <Heading as='h4' color='cream' font='fancy'>Feel free to contact us</Heading>
        <ContactForm/>
      </section>
    </section>
  )
}