import { ReactNode, forwardRef, CSSProperties } from "react";
import styles from "./Section.module.scss";
import { Colors, SectionSize } from "../types";

type SectionProps = {
  id?: string,
  children: ReactNode;
  ariaLabel?: string;
  ariaLabelledby?: string;
  customStyle?: CSSProperties;
  bgColor?: Colors;
  bgImage?: string;
  size?: SectionSize;
}

export const Section = forwardRef<HTMLDivElement, SectionProps>(
  (
    {
      id,
      bgColor = 'cream',
      size = "full",
      customStyle,
      children,
      ...props
    },
    ref
  ) => {
    const bgColorClass = styles[`section__bg--${bgColor}`];
    const sectionSize = size ? styles[`section__${size}`] : "";

    return (
      <section 
        id={id}
        className={`${styles["section"]} ${bgColorClass} ${sectionSize} ${size === "full" ? styles["section--full"] : ""}`} 
        style={customStyle}
        ref={ref}
        {...props}
      >
        {children}
      </section>
    );
  }
);
