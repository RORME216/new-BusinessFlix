// Components
import Logo from "@components/commons/toolkit/views/Logo";
import Desktop from "./subcomponents/Desktop";
import Mobile from "./subcomponents/Mobile";

// Images
import businessFlixLogo from "@assets/images/logos/logo.png";

// Types
import type { Section } from "../../../../types/sections";
import type { Anchor } from "../../../../types/links";

// Styles
import styles from "./styles.module.css";

// Collections
const navigationLinks: Anchor[] = [
  {
    label: "Produto",
    sectionBlock: "Product",
  },
  {
    label: "Benefícios",
    sectionBlock: "Benefits",
  },
  {
    label: "Quem somos",
    sectionBlock: "About",
  },
  {
    label: "Parceiros",
    sectionBlock: "Sponsors",
  },
  {
    label: "Contato",
    sectionBlock: "Contact",
  },
];

export default function Header() {
  const homeSection: Section = "Hero";

  return (
    <header className={styles.header}>
      <Logo
        src={businessFlixLogo}
        alt="Logo da empresa BusinessFlix"
        href={homeSection}
      />
      <nav className={styles.nav}>
        <Desktop links={navigationLinks} />
        <Mobile links={navigationLinks} />
      </nav>
    </header>
  );
}
