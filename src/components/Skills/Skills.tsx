import CardSkill from "./CardSkill";
import styles from "./style.module.scss";

const contentSkills = [
  {
    image: "javascript.png",
    nameSkill: "Javascript",
  },
  {
    image: "typescript.png",
    nameSkill: "Typescript",
  },
  {
    image: "react.png",
    nameSkill: "React",
  },
  {
    image: "node.png",
    nameSkill: "NodeJS",
  },
  {
    image: "git.png",
    nameSkill: "Git e Github",
  },
  {
    image: "database.png",
    nameSkill: "Banco de dados",
  },
  {
    image: "tailwind.png",
    nameSkill: "Tailwind",
  },
  {
    image: "bootstrap.png",
    nameSkill: "Bootstrap",
  },
];

const Skills = () => {
  return (
    <div id="skills" className={styles.Skills}>
      <div className={styles.Overlay}></div>
      <h2 className={styles.Title}>Minhas habilidades</h2>
      <div className={styles.Box}>
        {contentSkills.map((content, index) => (
          <CardSkill
            key={index}
            image={content.image}
            nameSkill={content.nameSkill}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
