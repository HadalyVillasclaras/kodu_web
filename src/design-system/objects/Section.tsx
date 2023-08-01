import { ReactNode } from "react";
import styles from "./Section.module.scss";

type BgColors = "cream" | "green" | "brown";

type SectionProps = {
  id?: string,
  children: ReactNode;
  ariaLabel?: string;
  ariaLabelledby?: string;
  customStyle?: any;
  bgColor?: BgColors;
  bgImage?: string;
  size?: "small" | "big" | "full";
}

export const Section = ({
  id,
  bgColor = 'cream',
  size = "full",
  ariaLabel,
  ariaLabelledby,
  customStyle,
  children,
  ...props
}: SectionProps) => {
  const bgColorClass = styles[`section__bg-${bgColor}`];
  const sectionSize = size ? styles[`section__${size}`] : "";

  return (
    <section 
      id={id}
      className={`${styles["section"]} ${bgColorClass} ${sectionSize}`} 
      style={customStyle}
      {...props}
    >
      {children}
    </section>
  );
}
