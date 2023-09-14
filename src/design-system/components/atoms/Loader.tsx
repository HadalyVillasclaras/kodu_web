import styles from "./Loader.module.scss";

type LoaderProps = {
  size?: number;
};

export const Loader = ({ size = 40 }: LoaderProps) => {
  return (
    <div className={styles.loaderwrapper}>
      <span
        className={styles.loader}
        style={{ width: `${size}px`, height: `${size}px`, borderWidth: `${size * 0.1}px` }}
      ></span>
    </div>
  )
}