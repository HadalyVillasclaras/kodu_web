import { ReactNode, forwardRef, CSSProperties } from "react";
import styles from "./Section.module.scss";
import { Colors, SectionSize } from "../../tokens";

type SectionProps = {
  id?: string,
  children: ReactNode;
  ariaLabel?: string;
  ariaLabelledby?: string;
  customStyle?: CSSProperties;
  bgColor?: Colors;
  bgImage?: string;
  direction?: "column" | "row";
  size?: SectionSize;
}

export const Section = forwardRef<HTMLDivElement, SectionProps>(
  (
    {
      id,
      bgColor = 'cream',
      size = "full",
      customStyle,
      direction = "column",
      children,
      ...props
    },
    ref
  ) => {
    const bgColorClass = styles[`section__bg--${bgColor}`];
    const sectionSize = size ? styles[`section__size--${size}`] : "";
    const flexDirection = direction ? styles[`section--${direction}`] : '';

    return (
      <section 
        id={id}
        className={`${styles["section"]} ${bgColorClass} ${sectionSize} ${flexDirection}`} 
        style={customStyle}
        ref={ref}
        {...props}
      >
        {children}
      </section>
    );
  }
);
