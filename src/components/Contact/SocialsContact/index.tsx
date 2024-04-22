import styles from "./style.module.scss";

const SocialContact = () => {
  return (
    <div className={styles.Socials}>
      <div>
        <div className={styles.Social}>
          <div>
            <img src="images/envelope.png" alt="Envelope" />
          </div>
          <p>developer.yo256798@gmail.com</p>
        </div>
        <div className={styles.Social}>
          <div>
            <img src="images/linkedin.png" alt="Linkedin" />
          </div>
          <p>Yan (YFDeveloper) Ferreira</p>
        </div>
        <div className={styles.Social}>
          <div>
            <img src="images/instagram.png" alt="Instagram" />
          </div>
          <p>yf.dev</p>
        </div>
      </div>
    </div>
  );
};

export default SocialContact;
