// External library
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

// Styles
import "./styles.css";

// Animation
import { LEVITATION } from "../../../../../animations/levitation";

// Types
import type { ArrowScrool } from "./types";

export default function ArrowButton({ section }: ArrowScrool) {
  return (
    <motion.div
      className="arrow-container"
      onClick={() => console.log(section)}
      {...LEVITATION}
    >
      <IoIosArrowDown className="arrow-icon" />
    </motion.div>
  );
}