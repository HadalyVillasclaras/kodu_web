import destinations from "../../core/data/Destinations.json"
import { Colors } from '../types';
import styles from "./CheckAvailabilityForm.module.scss";
import { Button } from '../atoms';
import { DropdownMenu } from "./DropdownMenu";

type Props = {
  color?: Colors;
}

const quarters = ["January - March", "April - June", "July - September", "October - December"]

export const CheckAvailabilityForm = ({color = "green"}: Props) => {
  const destinationsOptions = destinations.map((destination) => destination.name);

    /**
   * check avaibility. u can book a retrait for a quarter of year
   * 
   * retrait {
   * avaibility: [Q1, Q3]
   * }
   * 
   * U check a quarter and it says which retrait has this q in avaibility attribute
   * 
   */
  return (
    <>
    <section className={styles["availability-form"]} >
      <span>
      <DropdownMenu color={color} label='Destinations' options={destinationsOptions} />
      <DropdownMenu color={color} label='Dates' options={quarters} />
      </span>
    <Button variant='default' color='green' text='Check' />
    </section>
    </>
)
}