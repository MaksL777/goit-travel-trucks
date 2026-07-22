import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const linkClass = ({ isActive }) => (isActive ? `${css.link} ${css.active}` : css.link);

function Header() {
  return (
    <header className={css.header}>
      <div className={`container ${css.inner}`}>
        <NavLink to="/" className={css.logo}>
          Travel<span className={css.logoAccent}>Trucks</span>
        </NavLink>
        <nav className={css.nav} aria-label="Main navigation">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/catalog" className={linkClass}>
            Catalog
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
