import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/hero.webp";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <section className={styles.hero}>
      <div
        className={styles.bgImage}
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>Campers of your dreams</h1>
        <p className={styles.subtitle}>
          You can find everything you want in our catalog
        </p>
        <button
          type="button"
          className={styles.cta}
          onClick={() => navigate("/catalog")}
        >
          View Now
        </button>
      </div>
    </section>
  );
}
