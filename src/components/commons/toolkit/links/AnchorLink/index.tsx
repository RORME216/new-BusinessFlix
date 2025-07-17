// Functions
import scrollToSection from "../../../../../utiils/helpers/scroll";

// Types
import type { Anchor } from "../../../../../types/links";

// Styles
import styles from "./styles.module.css";

export default function AnchorLink({ label, sectionBlock }: Anchor) {
  return (
    <a
      className={styles.anchorLink}
      onClick={() => scrollToSection(sectionBlock)}
    >
      {label}
    </a>
  );
}
