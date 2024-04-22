import { getImageProject } from "../../../services/projectsService";
import styles from "./style.module.scss";
interface CardProjectProps {
  name: string;
  htmlUrl: string;
  description: string;
}

const CardProject = ({ name, htmlUrl, description }: CardProjectProps) => {
  const image = getImageProject();
  return (
    <div className={styles.slide}>
      <img className={styles.slideImg} src={image} alt={name} />
      <h2 className={styles.slideTitle}>{name}</h2>
      <p className={styles.slideDescription}>{description}</p>
      <button className={styles.slideButton}>
        <a href={htmlUrl}>Visitar</a>
      </button>
    </div>
  );
};

export default CardProject;
