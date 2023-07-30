import { DropdownList } from './DropdownList';

type Colors = "cream" | "green" | "brown";

type Props = {
  color?: Colors;
}

export const CheckAvailabilityForm = ({color = "green"}: Props) => {
  return (
    <section style={{ display: "flex" }}>
      <DropdownList color={color} label='Destinations' options={["Bloom House", "Dunlap Tipi", "Paraty"]} />
      <DropdownList color={color} label='Dates' options={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]} />
      <DropdownList color={color} label='Travelers' options={["1", "2", "3", "4"]} />
      {/*<Input placeholder='Dates (dd/mm/YYYY - dd/mm/YYYY)'/>*/}
    </section>
  )
}