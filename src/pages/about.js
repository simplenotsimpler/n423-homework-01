import styles from "../styles/About.module.css";
import CardStyles from "../styles/Card.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <article className={CardStyles.card}>
        <img
          src="/images/owner.jpg"
          className={CardStyles.roundImg}
          alt="Owner"
        />
        <div className={CardStyles.cardBody}>
          <h1 className={CardStyles.cardTitle}>The Owner:</h1>
          <p className={CardStyles.cardText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            ac bibendum quam, vel finibus leo. Morbi mattis, odio sed fermentum
            convallis, dolor lorem porta magna, eu consequat lorem magna a
            turpis. Vivamus ultrices elit risus, at egestas enim tempus non.
            Vivamus molestie lacinia dui in tincidunt. Morbi vulputate accumsan
            scelerisque. Nunc justo turpis, blandit ac vestibulum congue,
            ullamcorper mattis orci.
          </p>
        </div>
      </article>
    </section>
  );
};

export default About;
