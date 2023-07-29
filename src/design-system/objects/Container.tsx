import { ReactNode } from "react";
import styles from "./Container.module.scss";

type ContainerProps = {
  children: ReactNode;
  customStyle?: any;
  bgImage?: string;
}

export const Container = ({ bgImage, customStyle, children }: ContainerProps) => {
  const bgImageClass = bgImage ? styles['container__bg-image'] : "";
  const bgImageUrl = bgImage ? { backgroundImage: `url(${bgImage})` } : {};
 
  return (
    <div className={`${styles["container"]} ${bgImageClass} ${customStyle}`} style={bgImageUrl}>
      {children}
    </div>
  );
}