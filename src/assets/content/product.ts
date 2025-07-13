// Images
import type { AppImage } from "../../types/images";
import videoSamples from "../images/sections/product/samples.png";
import expertSamples from "../images/sections/product/samplesFromExperts.png";

// Types
type Strategy = {
  title: string;
  description: string;
  complement?: string;
};

type ProductSectionContent = {
  title: string;
  strategies: Strategy[];
  sampleImages: {
    video: AppImage;
    expert: AppImage;
  };
};

export const productContent: ProductSectionContent = {
  title: "Treinamento inovador para qualquer tema!",
  strategies: [
    {
      title: "Pílulas dramatizadas",
      description: "Eficazes e envolventes.",
    },
    {
      title: "Fala do especialista",
      description:
        "Explicando o assunto, indicando a atitude correta e chamando para a ação.",
      complement: "Ou especialistas próprios dos nossos clientes.",
    },
  ],
  sampleImages: {
    video: {
      src: videoSamples,
      alt: "Amostras dos vídeos produzidos.",
    },
    expert: {
      src: expertSamples,
      alt: "Amostras das falas dos especialistas.",
    },
  },
};

export default productContent;
