// Types
import type { AppImage } from "../../../../../types/images";
import type { Section } from "../../../../../types/sections";

export interface Logo extends AppImage {
  width?: string | number;
  height?: string | number;
  href?: string | Section;
}
