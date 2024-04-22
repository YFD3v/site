import styles from "./style.module.scss"

interface CardSkillProps {
  image: string;
  nameSkill: string;
}

const CardSkill = ({ image, nameSkill }: CardSkillProps) => {
  return (
    <div className={styles.Card}>
      <img className={styles.Img} src={`images/${image}`} alt={nameSkill} />
      <h3 className={styles.NameSkill}>{nameSkill}</h3>
    </div>
  );
};

export default CardSkill;
