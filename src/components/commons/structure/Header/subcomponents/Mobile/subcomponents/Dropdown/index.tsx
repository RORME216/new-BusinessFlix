// External library
import { motion, AnimatePresence } from "framer-motion";

// Components
import AnchorLink from "@components/commons/toolkit/links/AnchorLink";

// Styles
import styles from "./styles.module.css";

// Animations
import { DROP } from "@animations/drop";

// Types
import type { NavigationList } from "../../../../types";

export default function DropdownMenu({ links, isOpen }: NavigationList) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div {...DROP}>
          <div className={styles.dropdownList}>
            {links.map((link, index) => (
              <div className={styles.dropdownRow}>
                <AnchorLink
                  key={index}
                  label={link.label}
                  sectionBlock={link.sectionBlock}
                />
              </div>
            ))}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
