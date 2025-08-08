// Components
import ArrowButton from "@components/commons/toolkit/buttons/ArrowButton";

// Types
import type { SectionProps } from "./types";

// Styles
import styles from "./styles.module.css";

export const Section = ({
  children,
  currentSection,
  nextSection,
  backgroundColor,
  width,
  height,
}: SectionProps) => {
  return (
    <div
      className={styles.sectionContainer}
      id={currentSection}
      style={{
        backgroundColor,
      }}
    >
      <div
        className={styles.sectionContent}
        style={{
          width,
          height,
        }}
      >
        {children}
      </div>
      {nextSection ? <ArrowButton section={nextSection} /> : null}
    </div>
  );
};
