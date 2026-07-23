import emptyState from "../../assets/empty-state.png";
import css from "./NoResults.module.css";

function NoResults({ onClear, onViewAll }) {
  return (
    <div className={css.wrapper}>
      <img src={emptyState} alt="No campers found" className={css.image} />
      <h2 className={css.title}>No campers found</h2>
      <p className={css.text}>
        We couldn&rsquo;t find any campers that match your filters. Try
        adjusting your search or clearing some filters.
      </p>
      <div className={css.actions}>
        <button type="button" className={css.clearButton} onClick={onClear}>
          Clear filters
        </button>
        <button type="button" className={css.viewAllButton} onClick={onViewAll}>
          View all campers
        </button>
      </div>
    </div>
  );
}

export default NoResults;
