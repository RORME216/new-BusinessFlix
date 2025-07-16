// Types
import type { Sections } from "../../types/sections";

export default function scrollToSection(sectionBlock: Sections) {
  const targetSection = document.getElementById(sectionBlock as string);
  if (!targetSection) return;

  targetSection.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}
