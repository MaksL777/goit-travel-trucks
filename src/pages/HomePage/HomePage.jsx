import { Link } from 'react-router-dom';
import css from './HomePage.module.css';

function HomePage() {
  return (
    <section className={css.hero}>
      <div className={css.overlay} />
      <div className={`container ${css.content}`}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.subtitle}>You can find everything you want in our catalog</p>
        <Link to="/catalog" className={css.cta}>
          View Now
        </Link>
      </div>
    </section>
  );
}

export default HomePage;
