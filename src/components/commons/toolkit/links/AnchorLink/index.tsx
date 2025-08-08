// Functions
import scrollToSection from "@utils/helpers/scroll";

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
