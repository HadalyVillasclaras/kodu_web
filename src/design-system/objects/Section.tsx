import { ReactNode } from "react";
import styles from "./Section.module.scss";

type BgColors = "cream" | "green" | "brown";

type SectionProps = {
  children: ReactNode;
  ariaLabel?: string;
  ariaLabelledby?: string;
  customStyle?: any;
  bgColor?: BgColors;
  bgImage?: string;
}

export const Section = ({
  bgColor = 'cream',
  bgImage,
  ariaLabel,
  ariaLabelledby,
  customStyle,
  children
}: SectionProps) => {
  const bgColorClass = styles[`section__bg-${bgColor}`];
  const bgImageClass = bgImage ? { backgroundImage: `url(${bgImage})` } : {};

  return (
    <section
      className={`${styles["section"]} ${bgColorClass} ${customStyle}`}
    >
      {
        bgImage
        ?
        <div className={styles["section__bg-image"]} style={bgImageClass}>
          {children}
        </div>
        : children
      }
    </section>
  );
}
