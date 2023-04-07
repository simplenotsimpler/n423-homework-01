import Card from "@/components/Card.jsx";
import styles from "../styles/About.module.css";
import owners from "@/data/owners.js";

const About = () => {
  let profileCards = owners.map((el) => {
    return <Card title={el.title} bio={el.bio} imgName={el.imgName}/>;
  });
  return <section className={styles.about}>{profileCards}</section>;
};

export default About;
