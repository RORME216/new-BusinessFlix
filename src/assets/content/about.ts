// Images
import engajaFlixHighlight from "../images/sections/about/engajaFlixHighlight.png";

// Types
import type { AppImage } from "../../types/images";

type AboutSectionContent = {
  title: string;
  paragraphs: string[];
  illustration: AppImage;
};

export const aboutContent: AboutSectionContent = {
  title: "Quem somos",
  paragraphs: [
    "Idealizada em 2022 com foco em ESG (Ambiental, Social e Governança), nascemos como uma plataforma de treinamentos corporativos em vídeo, apostando em uma comunicação moderna, acessível e transformadora.",
    "Em janeiro de 2024, diante dos desafios do mercado e da busca por soluções ainda mais eficazes, a BusinessFlix se reinventou, abrindo-se como uma startup disruptiva em microtreinamentos audiovisuais para quaisquer assuntos, transformando temas essenciais em vídeos curtos, dinâmicos e impactantes.",
    "Em 2025, demos mais um passo decisivo em nossa trajetória de inovação com o lançamento da EngajaFlix — nossa plataforma de gamificação corporativa, que conecta metas dos colaboradores a sistemas de pontuação, rankings e recompensas, promovendo reconhecimento, engajamento e performance em tempo real.",
    "Nossa missão é clara: transformar a cultura organizacional das empresas, unindo vídeo, gamificação e estratégia para engajar, capacitar e valorizar cada colaborador, aumentando a performance de equipes e gerando valor aos nossos clientes.",
  ],
  illustration: {
    src: engajaFlixHighlight,
    alt: "Ilustração da plataforma EngajaFlix",
  },
};

export default aboutContent;
