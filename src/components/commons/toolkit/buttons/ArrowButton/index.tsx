// External library
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

// Styles
import styles from "./styles.module.css";

// Animation
import { LEVITATION } from "../../../../../animations/levitation";

// Types
import type { ArrowScrool } from "./types";
import scrollToSection from "../../../../../utiils/helpers/scroll";

export default function ArrowButton({ section }: ArrowScrool) {
  return (
    <motion.div
      className={styles.container}
      onClick={() => scrollToSection(section)}
      {...LEVITATION}
    >
      <IoIosArrowDown className={styles.icon} />
    </motion.div>
  );
}
