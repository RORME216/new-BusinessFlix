// External library
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

// Images
import contactIllustration from "../images/sections/contact/calledTheAction.png";

// Types
import type { IconType } from "react-icons";
import type { AppImage } from "../../types/images";

type ContactMethod = {
  icon: IconType;
  label: string;
  href: string;
};

type ContactSectionContent = {
  title: string;
  subtitle: string;
  contactMethods: ContactMethod[];
  illustration: AppImage;
};

export const contactContent: ContactSectionContent = {
  title: "Gamifique já!",
  subtitle: "Fale conosco por e-mail, WhatsApp ou telefone.",
  contactMethods: [
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      href: "https://wa.me/5516988041257",
    },
    {
      icon: MdOutlineMail,
      label: "E-mail",
      href: "mailto:contato@flixb.com.br",
    },
  ],
  illustration: {
    src: contactIllustration,
    alt: "Ilustração convidando o usuário a entrar em contato",
  },
};

export default contactContent;
