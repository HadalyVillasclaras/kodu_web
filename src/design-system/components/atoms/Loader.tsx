import { Colors } from "../../tokens";
import styles from "./Loader.module.scss";

type LoaderProps = {
  size?: number;
  color?: Colors;
};

export const Loader = ({ size = 40, color = "brown" }: LoaderProps) => {
  return (
    <div className={`${styles["loaderwrapper"]} ${styles[`loaderwrapper__color--${color}`]}`}>
      <span
        className={`${styles["loader"]} ${styles[`loader__color--${color}`]}`}
        style={{ width: `${size}px`, height: `${size}px`, borderWidth: `${size * 0.1}px` }}
      ></span>
    </div>
  )
}