import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/campersSlice.js';
import { clearFilters, loadMore } from '../../redux/filtersSlice.js';
import {
  selectCampersLoading,
  selectCampersError,
  selectVisibleCampers,
  selectHasMoreCampers,
} from '../../redux/selectors.js';
import FilterForm from '../../components/FilterForm/FilterForm.jsx';
import CamperCard from '../../components/CamperCard/CamperCard.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import NoResults from '../../components/NoResults/NoResults.jsx';
import css from './CatalogPage.module.css';

function CatalogPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectCampersLoading);
  const error = useSelector(selectCampersError);
  const visibleCampers = useSelector(selectVisibleCampers);
  const hasMore = useSelector(selectHasMoreCampers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const handleClear = () => {
    dispatch(clearFilters());
    dispatch(fetchCampers());
  };

  const handleViewAll = handleClear;

  return (
    <section className={`container ${css.page}`}>
      <aside className={css.sidebar}>
        <FilterForm />
      </aside>

      <div className={css.results}>
        {isLoading && <Loader label="Fetching the best travel trucks for you…" />}

        {!isLoading && error && (
          <p className={css.error}>
            Something went wrong while loading campers: {error}
          </p>
        )}

        {!isLoading && !error && visibleCampers.length === 0 && (
          <NoResults onClear={handleClear} onViewAll={handleViewAll} />
        )}

        {!isLoading && !error && visibleCampers.length > 0 && (
          <>
            <ul className={css.list}>
              {visibleCampers.map((camper) => (
                <CamperCard key={camper.id} camper={camper} />
              ))}
            </ul>

            {hasMore && (
              <button
                type="button"
                className={css.loadMore}
                onClick={() => dispatch(loadMore())}
              >
                Load More
              </button>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default CatalogPage;
