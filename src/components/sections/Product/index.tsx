// Components
import { Section } from "@components/commons/structure/Section";

// Mocks
import productContent from "../../../assets/content/product";

// Styles
import styles from "./styles.module.css";
import { useIsMobile } from "@hooks/useIsMobile";

export const Product = () => {
  const { sampleImages, strategies, title } = productContent;
  const strategy = strategies[0];

  const isMobile = useIsMobile();

  return (
    <Section
      currentSection="Product"
      nextSection="Benefits"
      backgroundColor="var(--blue-1000)"
    >
      <div className={styles["product-container"]}>
        <header className={styles["product-header"]}>
          <h1 className={styles["product-title"]}>{title}</h1>
        </header>
        <main className={styles["strategy-container"]}>
          <ol className={styles["strategy-list"]}>
            {isMobile ? (
              strategies.map((value, index) => (
                <li className={styles["strategy-line"]} key={index}>
                  <span className={styles["strategy-title"]}>
                    {value.title}
                  </span>
                  <span className={styles["strategy-text"]}>
                    {value.description}
                  </span>
                  {value.complement && (
                    <span className={styles["strategy-text"]}>
                      {value.complement}
                    </span>
                  )}
                </li>
              ))
            ) : (
              <li className={styles["strategy-line"]}>
                <span className={styles["strategy-title"]}>
                  {strategy.title}
                </span>
                <span className={styles["strategy-text"]}>
                  {strategy.description}
                </span>
                {strategy.complement && (
                  <span className={styles["strategy-text"]}>
                    {strategy.complement}
                  </span>
                )}
              </li>
            )}
          </ol>
        </main>
        {!isMobile && (
          <footer className={styles["product-images"]}>
            <img
              className={styles["image-aspect"]}
              src="src/assets/images/elements/aspect.png"
              alt="Ilustration of microlearning element block"
            />
            <img
              className={styles["image-video"]}
              src={sampleImages.video.src}
              alt={sampleImages.video.alt}
            />
          </footer>
        )}
      </div>
    </Section>
  );
};
