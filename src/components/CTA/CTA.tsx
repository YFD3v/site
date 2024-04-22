import styles from "./style.module.scss";

const CTA = () => {
  return (
    <div className={styles.Cta}>
      <div className={styles.Overlay}></div>
      <div className={styles.Content}>
        <div className={styles.TextImages}>
          <img src="images/Eu-sou-Yan-Ferreira.png" alt="Eu Sou Yan Ferreira" />
          <img src="images/Desenvolvedor-de.png" alt="Desenvolver de" />
          <img src="images/Software.png" alt="Software" />
          <div className={styles.social}>
            <a
              className={styles.instagram}
              target="_blank"
              href="https://www.instagram.com/yf.dev/"
            >
              <img src="images/instagram.png" alt="Instagram" />
            </a>
            <a
              className={styles.linkedin}
              target="_blank"
              href="https://www.linkedin.com/in/yan-ferreira-a86090248/"
            >
              <img src="images/linkedin.png" alt="Linkedin" />
            </a>
          </div>
        </div>
        <div className={styles.TrêsD}>
          <img src="images/Icon-3d.png" alt="Icon 3d" />
        </div>
        <div className={styles.ArrowDown}>
          <img src="images/arrow_down.png" alt="Arrow down" />
        </div>
      </div>
    </div>
  );
};

export default CTA;
