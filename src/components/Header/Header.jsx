import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.emailTemplateHeader}>
    <div className={styles.headerTitle}>
      <img
        src="https://plast.org.uk/wp-content/uploads/lch/chorthublogo-s.png"
        alt="Logo"
        className={styles.headerLogo}
      />
      <p className={styles.headerText}>ChortHub</p>
    </div>
    <p className={styles.headerSubtitle}>Lisovi Chorty Management System</p>
  </header>
);

export default Header;
