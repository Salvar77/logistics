import classes from "./Contact.module.scss";

const Contact = () => {
  return (
    <section id="contact" className={classes.contact}>
      <div className={classes.contact__box}>
        <div className={classes.contact__info}>
          <p>Łukasz</p>
          <p>Ul. ~~~~~~</p>
          <p>Opole</p>
          <p>xx-xxx</p>
        </div>
        <div className={classes.contact__input}>
          <form>
            <h2>Wyślij wiadomość</h2>
            <p>Twoje imię</p>
            <input type="text" name="name" required />

            <p>Twój email</p>
            <input type="email" name="email" required />

            <p>Twoja wiadomość</p>
            <textarea type="messsage" name="message" required></textarea>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
