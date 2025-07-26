// Types
import type { SectionProps } from "./types";

// Styles
import styles from "./styles.module.css";
import ArrowButton from "../../toolkit/buttons/ArrowButton";

export const Section = ({
  children,
  currentSection,
  nextSection,
  backgroundColor,
}: SectionProps) => {
  return (
    <div
      className={styles.sectionContainer}
      id={currentSection}
      style={{
        backgroundColor,
      }}
    >
      <div className={styles.sectionContent}>{children}</div>
      {nextSection ? <ArrowButton section={nextSection} /> : null}
    </div>
  );
};
