import styles from "../style.module.scss";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Logomarca}>
        <img className={styles.Logo} src="images/logo.png" alt="Logo" />
        <h2 className={styles.Marca}>yf.dev</h2>
      </div>
      <div className={styles.backHome}>
        <img
          className={styles.backHomeImg}
          src="images/arrow_down.png"
          alt="GoBack"
          id="backToHome"
        />
      </div>
    </footer>
  );
};

export default Footer;
