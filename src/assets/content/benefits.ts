// Images
import engajaFlixPreview from "../images/sections/benefits/engajaFlixPreviews.png";

// Types
import type { AppImage } from "../../types/images";

type Benefit = {
  description: string;
};

type BenefitsSectionContent = {
  title: string;
  benefits: Benefit[];
  previewImage: AppImage;
};

export const benefitsContent: BenefitsSectionContent = {
  title: "Plataforma EngajaFlix",
  benefits: [
    {
      description: "Incentiva e premia com base em critérios objetivos.",
    },
    {
      description: "Metas e objetivos personalizáveis.",
    },
    {
      description: "Engajamento e competição saudáveis, gerando resultados.",
    },
    {
      description: "Relatórios de performance dos colaboradores.",
    },
  ],
  previewImage: {
    src: engajaFlixPreview,
    alt: "Imagem de pré-visualização da aplicação mobile EngajaFlix.",
  },
};

export default benefitsContent;
