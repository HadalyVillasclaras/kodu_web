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
  size?: "small" | "big" | "full";
}

export const Section = ({
  bgColor = 'cream',
  size = "full",
  ariaLabel,
  ariaLabelledby,
  customStyle,
  children
}: SectionProps) => {
  const bgColorClass = styles[`section__bg-${bgColor}`];
  const sectionSize = size ? styles[`section__${size}`] : "";


  return (
    <section className={`${styles["section"]} ${bgColorClass} ${sectionSize} ${customStyle}`}>
      {children}
    </section>
  );
}
