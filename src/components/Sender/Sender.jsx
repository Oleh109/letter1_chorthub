import styles from "./Sender.module.css";

const Sender = () => (
  <div className={styles.letterSender}>
    <div className={styles.senderImageContainer}>
      <img src="https://i.lb.ua/015/19/6349726461975.jpeg" alt="Sender" />
    </div>
    <div className={styles.senderText}>
      <p className={`${styles.senderPoreklo} ${styles.m0}`}>
        <strong>ЛЧ Дʼван Айчі</strong>
      </p>
      <p className={`${styles.senderPosada} ${styles.m0}`}>
        Кустос Руєстру ВПЛЧ
      </p>
    </div>
  </div>
);

export default Sender;
