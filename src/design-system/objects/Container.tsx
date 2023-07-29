import { ReactNode } from "react";
import styles from "./Container.module.scss";

type ContainerProps = {
  children: ReactNode;
  customStyle?: any;
  bgImage?: string;
  size?: "small" | "mid";
}

export const Container = ({ bgImage, size = "small", customStyle, children }: ContainerProps) => {
  const bgImageClass = bgImage ? styles['container__bg-image'] : "";
  const containerSize = size ? styles[`container__${size}`] : "";

  const bgImageUrl = bgImage ? { backgroundImage: `url(${bgImage})` } : {};
 
  return (
    <div className={`${styles["container"]} ${styles['container__pd-s']} ${bgImageClass} ${containerSize} ${customStyle}`} style={bgImageUrl}>
      {children}
    </div>
  );
}