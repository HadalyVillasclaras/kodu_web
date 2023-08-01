import { DropdownList } from './DropdownList';
import lodgins from "../../data/Lodgins.json"
import { Colors } from '../types';

type Props = {
  color?: Colors;
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const trimestry = ["January - March", "April - June", "July - September", "October - December"]

export const CheckAvailabilityForm = ({color = "green"}: Props) => {
  const destinationsOptions = lodgins.map((lodgin) => lodgin.name);

  return (
    <section style={{ display: "flex" }}>
      <DropdownList color={color} label='Destinations' options={destinationsOptions} />
      <DropdownList color={color} label='Dates' options={trimestry} />
      <DropdownList color={color} label='Travelers' options={["1", "2", "3", "4"]} />
    </section>
  )
}