import styles from "./Link.module.css";

function Link() {
  return (
    <div className={styles.emailTemplateLink}>
      <a
        href="http://google.com"
        target="_blank"
        className={styles.linkChortHub}>
        ChortHub
      </a>
    </div>
  );
}

export default Link;
