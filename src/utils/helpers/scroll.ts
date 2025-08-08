// Types
import type { Section } from "../../types/sections";

export default function scrollToSection(sectionBlock: Section) {
  const targetSection = document.getElementById(sectionBlock as string);
  if (!targetSection) return;

  targetSection.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}
