// External library
import type { PropsWithChildren } from "react";

// Types
import type { Section } from "../../../../types/sections";

export interface SectionProps extends PropsWithChildren {
  backgroundColor?: string;
  width?: string;
  height?: string;
  currentSection: Section;
  nextSection: Section;
}
