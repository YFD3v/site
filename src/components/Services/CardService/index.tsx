import styles from "./style.module.scss";

interface CardServiceProps {
  number: number;
  service: string;
  description: string;
}

const CardService = ({ number, service, description }: CardServiceProps) => {
  return (
    <div className={styles.Card}>
      <h3 className={styles.number}>0{number}</h3>
      <div className={styles.Content}>
        <h2 className={styles.service}>{service}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default CardService;
