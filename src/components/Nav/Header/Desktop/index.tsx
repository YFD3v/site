import styles from "../../style.module.scss";
import Button from "../Button/Button";

const Desktop = () => {
  return (
    <nav id="desktop" className={styles.Desktop}>
      <ul>
        <li>
          <a href="#services">Serviços</a>
        </li>
        <li>
          <a href="#skills">Habilidades</a>
        </li>
        <li>
          <a href="#projects">Projetos</a>
        </li>
        <li>
          <Button />
        </li>
      </ul>
    </nav>
  );
};

export default Desktop;
