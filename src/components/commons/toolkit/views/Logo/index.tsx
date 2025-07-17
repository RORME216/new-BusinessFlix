// Types
import type { Logo as LogoProps } from "./types";

// Functions
import scrollToSection from "../../../../../utiils/helpers/scroll";

export default function Logo({ src, alt, width, height, href }: LogoProps) {
  const isExternalLink = typeof href === "string" && /^https?:\/\//.test(href);

  const handleClick = () => {
    if (!href) return;

    if (isExternalLink) {
      window.open(href, "_blank");
      return;
    }

    scrollToSection(href);
  };

  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: width ?? "5rem",
        height: height ?? "2rem",
        cursor: href ? "pointer" : "default",
      }}
      onClick={handleClick}
    />
  );
}
