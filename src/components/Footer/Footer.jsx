import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.emailTemplateFooter}>
    <div>
      <img
        src="https://plast.org.uk/wp-content/uploads/lch/chorthublogo-s.png"
        alt="Logo"
        className={styles.footerLogo}
      />
    </div>
    <div className={styles.footerText}>
      <p>© lisovichorty.org, 2024</p>
      <p className={styles.m0}>
        Якщо ти не хочеш отримувати такі листи – зміни налаштування профілю.
      </p>
      <p className={styles.m0}>
        Але не варто, бо пропустиш щось важливе і Кодловий придумає забаву 😈
      </p>
    </div>
  </footer>
);

export default Footer;
