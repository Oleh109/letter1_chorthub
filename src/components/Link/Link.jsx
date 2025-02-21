import styles from "./Link.module.css";

const Link = () => (
  <div className={styles.emailTemplateLink}>
    <a href="http://google.com" target="_blank" className={styles.linkChortHub}>
      ChortHub
    </a>
  </div>
);

export default Link;
