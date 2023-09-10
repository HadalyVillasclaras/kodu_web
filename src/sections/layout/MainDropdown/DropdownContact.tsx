import { Heading } from '../../../design-system/atoms';
import styles from './DropdownContact.module.scss';

type Props = {}

export const DropdownContact = () => {
  return (
    <section className={`${styles[`dd-contact`]}`}>
      <div>Contact data</div>
      <div className={`${styles[`dd-contact__destination`]}`}>
        <div>
          <Heading as='h4' color='cream' font='fancy'>Feel free to contact us</Heading>
          <div>contact form</div>
        </div>
      </div>
    </section>
  )
}
