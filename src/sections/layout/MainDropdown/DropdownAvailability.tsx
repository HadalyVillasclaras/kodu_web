import { Heading } from '../../../design-system/atoms';
import { AvailabilityForm } from '../../../design-system/molecules/AvailabilityForm';
import styles from './DropdownAvailability.module.scss';

type Props = {
  choice: any;
}

export const DropdownAvailability = ({ choice }: Props) => {
  return (
    <section className={`${styles[`dd-avblty`]}`}>
      <AvailabilityForm currentChoice={choice} />
      <div className={`${styles[`dd-avblty__destination`]}`}>
        <img src="" alt="" />
        <div>
          <Heading as='h4' color='cream' font='fancy'>{choice}</Heading>
          <p>Home city, ES</p>
          <div>
            <p>Available quarter periods: </p>
            <ul>
              <li>ele</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
