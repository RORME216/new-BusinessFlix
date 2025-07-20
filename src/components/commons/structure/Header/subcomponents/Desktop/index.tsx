// Components
import AnchorLink from "../../../../toolkit/links/AnchorLink";

// Styles
import styles from "./styles.module.css";

// Types
import type { NavigationList } from "../../types";

export default function Desktop({ links }: NavigationList) {
  return (
    <div className={styles.navigationList}>
      {links.map((link, index) => (
        <div className={styles.items} key={index}>
          <AnchorLink label={link.label} sectionBlock={link.sectionBlock} />
        </div>
      ))}
    </div>
  );
}
