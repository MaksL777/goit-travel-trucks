import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';

function NotFoundPage() {
  return (
    <div className={`container ${css.wrapper}`}>
      <p className={css.code}>404</p>
      <h1 className={css.title}>Page not found</h1>
      <p className={css.text}>
        The page you&rsquo;re looking for doesn&rsquo;t exist or may have been moved.
      </p>
      <Link to="/" className={css.link}>
        Back to home
      </Link>
    </div>
  );
}

export default NotFoundPage;
