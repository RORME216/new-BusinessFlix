// External library
import { easeInOut } from "framer-motion";

export const DROP = {
  initial: { y: "-15%" },
  animate: { y: "2%" },
  exit: { y: "-2%" },
  transition: { duration: 0.25, ease: easeInOut },
};
