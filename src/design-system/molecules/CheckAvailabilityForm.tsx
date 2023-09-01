import destinations from "../../core/data/Destinations.json"
import { Colors } from '../types';
import styles from "./CheckAvailabilityForm.module.scss";
import { Button } from '../atoms';
import { DropdownMenu } from "./DropdownMenu";

type Props = {
  color?: Colors;
}

const trimestry = ["January - March", "April - June", "July - September", "October - December"]

export const CheckAvailabilityForm = ({color = "green"}: Props) => {
  const destinationsOptions = destinations.map((destination) => destination.name);

  return (
    <>
    <section className={styles["availability-form"]} >
      <span>
      <DropdownMenu color={color} label='Destinations' options={destinationsOptions} />
      <DropdownMenu color={color} label='Dates' options={trimestry} />
      </span>
    <Button variant='default' color='green' text='Check' />
    </section>
    </>
)
}