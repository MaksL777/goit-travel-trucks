import css from './Loader.module.css';

function Loader({ label = 'Loading…', overlay = false }) {
  const content = (
    <div className={css.loader} role="status" aria-live="polite">
      <span className={css.spinner} />
      <p className={css.label}>{label}</p>
    </div>
  );

  if (overlay) {
    return <div className={css.overlay}>{content}</div>;
  }

  return content;
}

export default Loader;
