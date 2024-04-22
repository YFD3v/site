import FormContact from "./FormContact";
import SocialContact from "./SocialsContact";
import styles from "./style.module.scss"


const Contact = () => {
  return (
    <div id="contact" className={styles.Contact}>
      <FormContact />
      <SocialContact />
    </div>
  );
};

export default Contact;
