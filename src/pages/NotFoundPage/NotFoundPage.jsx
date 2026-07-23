import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.code}>404</span>
      <h1 className={styles.title}>Page not found</h1>
      <p className={styles.text}>
        The page you are looking for doesn&apos;t exist or was moved.
      </p>
      <Link className={styles.homeButton} to="/">
        Back to home
      </Link>
    </div>
  );
}
