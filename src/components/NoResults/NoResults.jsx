import { TbTruck, TbSearch } from 'react-icons/tb';
import css from './NoResults.module.css';

function NoResults({ onClear, onViewAll }) {
  return (
    <div className={css.wrapper}>
      <div className={css.iconCircle}>
        <TbTruck className={css.truckIcon} />
        <span className={css.searchBadge}>
          <TbSearch />
        </span>
      </div>
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
