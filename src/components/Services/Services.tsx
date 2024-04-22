import CardService from "./CardService";
import styles from "./style.module.scss";

const contentServices = [
  {
    number: 1,
    service: "Criação de websites",
    description:
      "Transforme suas ideais em uma presença online única e impactante.",
  },
  {
    number: 2,
    service: "Criação de webapps",
    description:
      "Webapps personlizados para atender às suas necessidades específicas.",
  },
  {
    number: 3,
    service: "Criação de apps simples",
    description:
      "Transforme suas ideias em aplicativos móveis de alta qualidade",
  },
];

const Services = () => {
  return (
    <div id="services" className={styles.Services}>
      <h2 className={styles.Title}>Meus serviços de qualidade</h2>
      <div className={styles.Box}>
        {contentServices.map((content, index) => (
          <CardService
            key={index}
            description={content.description}
            service={content.service}
            number={content.number}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
