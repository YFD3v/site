import { HiBars3BottomRight } from "react-icons/hi2";
import styles from "../../style.module.scss"
import Button from "../Button/Button";

const Mobile = () => {
  return (
    <nav id="mobile" className={styles.Mobile}>
      <h3>
        <HiBars3BottomRight fontSize="2rem" />
      </h3>
      <ul id="mobile-list">
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

export default Mobile;
