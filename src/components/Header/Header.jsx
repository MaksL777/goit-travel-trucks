import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logo}>
          Travel<span className={styles.logoAccent}>Trucks</span>
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logo}>
          Travel<span className={styles.logoAccent}>Trucks</span>
        </NavLink>
        <nav className={styles.nav}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.navLinkActive}`
                : styles.navLink
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.navLinkActive}`
                : styles.navLink
            }
          >
            Catalog
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
