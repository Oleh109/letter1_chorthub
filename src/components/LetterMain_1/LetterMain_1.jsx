import Sender from "../Sender/Sender";
import styles from "./LetterMain_1.module.css";

const LetterMain_1 = () => (
  <main>
    <div className={styles.emailTemplateLetterContent}>
      <p className={styles.textTitle}>
        <strong>Гей-Гу, Ім’я Прізвище!</strong>
      </p>
      <p>Дякую за реєстрацію в ChortHub! Тепер ти можеш увійти на сайт:</p>
      <p>
        <strong>Адреса:</strong> https://lisovichorty.org
      </p>
      <p>
        <strong>Логін:</strong> email
      </p>
      <p>
        <strong>Пароль:</strong> Який ти вводив під час реєстрації
      </p>
      <p>
        Доступ до ChortHub мають виключно члени ВПЛЧ, а наша спільна
        відповідальність, щоб будь-які дані звідти не потрапили в чужі руки.
        Тому для додаткового захисту по-замовчуванню ввімкнута подвійна
        верифікація через мобільний телефон (в налаштуваннях ти зможеш обрати
        також авторизацію через автентифікатор).
      </p>
      <p>
        P.S. Принагідно вітаю з початком шляху у Великому Племені Лісових
        Чортів. Впевнений, він буде тернистим, але точно непересічним 🤭
      </p>
      <p>Гей-Га!</p>
      <Sender />
    </div>
  </main>
);

export default LetterMain_1;
