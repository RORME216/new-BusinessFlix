// Images
import type { LinkableImage } from "../../types/images";
import correiosLogo from "../images/sections/sponsors/Correios.png";
import ebmacLogo from "../images/sections/sponsors/EBMAC.png";
import pblLopesScaniaLogo from "../images/sections/sponsors/PblLopes&Scania.png";
import upLabsLogo from "../images/sections/sponsors/UpLabs.jpg";
import vetroSolucoesLogo from "../images/sections/sponsors/VetroSolucoes.png";

// Types
type Sponsor = {
  name: string;
  logo: LinkableImage;
};

type SponsorSectionContent = {
  title: string;
  sponsors: Sponsor[];
};

export const sponsorsContent: SponsorSectionContent = {
  title: "Quem já é nosso parceiro aprova!",
  sponsors: [
    {
      name: "Correios",
      logo: {
        src: correiosLogo,
        alt: "Logo da empresa Correios – Empresa Brasileira de Correios e Telégrafos.",
        link: "https://www.correios.com.br/",
      },
    },
    {
      name: "EBMAC",
      logo: {
        src: ebmacLogo,
        alt: "Logo da empresa EBMAC – Sustentável em todos os caminhos.",
        link: "https://ebmac.com.br/novo/",
      },
    },
    {
      name: "P.B. Lopes | Scania",
      logo: {
        src: pblLopesScaniaLogo,
        alt: "Logo da empresa P.B. Lopes | Scania.",
        link: "https://www.pblopes.com.br/",
      },
    },
    {
      name: "UpLabs",
      logo: {
        src: upLabsLogo,
        alt: "Logo da empresa UpLabs.",
        link: "https://uplab.sp.senai.br/",
      },
    },
    {
      name: "Vetro Soluções",
      logo: {
        src: vetroSolucoesLogo,
        alt: "Logo da empresa Vetro – Soluções inteligentes em tubos e conexões.",
        link: "https://www.vetro.com.br/",
      },
    },
  ],
};

export default sponsorsContent;
