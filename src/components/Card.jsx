import CardStyles from "../styles/Card.module.css";

const Card = ({ title, bio, imgName }) => {
  return (
    <article className={CardStyles.card}>
      <img
        src={`/images/${imgName}`}
        className={CardStyles.roundImg}
        alt={title}
      />
      <div className={CardStyles.cardBody}>
        <h1 className={CardStyles.cardTitle}>{title}</h1>
        <p className={CardStyles.cardText}>{bio}</p>
      </div>
    </article>
  );
};

export default Card;
