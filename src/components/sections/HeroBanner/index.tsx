// Mocks
import heroContent from "../../../assets/content/hero";

// Components
import { Section } from "../../commons/structure/Section";

// Styles
import styles from "./styles.module.css";

// Utils
import breakText from "@utils/helpers/formatter/breakText";

// Constants
const splitTextOfHighlight = breakText(heroContent.highlightText);

export const HeroBanner = () => {
  return (
    <Section
      currentSection="Hero"
      nextSection="Product"
      backgroundColor="var(--orange-500)"
    >
      <div className={styles["hero-container"]}>
        <div className={styles["hero-stripe"]}>
          <img
            className={styles["stripe-image"]}
            src={heroContent.highlightImage.src}
            alt={heroContent.highlightImage.alt}
          />
          <h2 className={styles["stripe-text"]}>
            {splitTextOfHighlight.map((line, index) => (
              <span
                key={index}
                style={{
                  color:
                    index % 2 == 0 ? "var(--white-100)" : "var(--blue-100)",
                }}
              >
                {line}
                <br />
              </span>
            ))}
          </h2>
        </div>
      </div>
    </Section>
  );
};
