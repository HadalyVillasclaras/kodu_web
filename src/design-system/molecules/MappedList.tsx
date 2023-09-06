import { Size, Colors } from "../types";
import styles from "./MappedList.module.scss";

type Props = {
  items: string[];
  size?: Size;
  color?: Colors;

}

export const MappedList = ({size = "m", color="green", items}: Props) => {
  return (
    <ul className={`
    ${styles['list']}
    ${styles[`list__size--${size}`]}
    ${styles[`list__color--${color}`]}
    `}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
