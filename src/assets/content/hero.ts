// Images
import heroImage from "../images/sections/hero/preSample.png";

// Types
import type { AppImage } from "../../types/images";

type HeroSectionContent = {
  highlightText: string;
  highlightImage: AppImage;
};

export const heroContent: HeroSectionContent = {
  highlightText:
    "Microtreinamentos\nque transformam,\n gamificação\nque engaja",
  highlightImage: {
    src: heroImage,
    alt: "Smartphone exibindo vídeo educativo da empresa",
  },
};

export default heroContent;
