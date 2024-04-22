import styles from "../style.module.scss";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

const Header = () => {
  //Fazer animação dropdown
  //Fazer efeito do scroll
  return (
    <header id="top" className={styles.Header}>
      <div className={styles.Logomarca}>
        <img className={styles.Logo} src="images/logo.png" alt="Logo" />
        <h2 className={styles.Marca}>yf.dev</h2>
      </div>
      <Desktop />
      <Mobile />
    </header>
  );
};

export default Header;
