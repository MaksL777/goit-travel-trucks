import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdLocationOn } from 'react-icons/md';
import { fetchCamperById, clearCurrentCamper } from '../../redux/campersSlice.js';
import RatingStars from '../../components/RatingStars/RatingStars.jsx';
import Gallery from '../../components/Gallery/Gallery.jsx';
import VehicleDetails from '../../components/VehicleDetails/VehicleDetails.jsx';
import ReviewList from '../../components/ReviewList/ReviewList.jsx';
import BookingForm from '../../components/BookingForm/BookingForm.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import { formatPrice, formatLocation } from '../../utils/format.js';
import css from './CamperDetailsPage.module.css';

function CamperDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector((state) => state.campers.current);
  const isLoading = useSelector((state) => state.campers.isCurrentLoading);
  const error = useSelector((state) => state.campers.currentError);

  useEffect(() => {
    dispatch(fetchCamperById(id));
    return () => {
      dispatch(clearCurrentCamper());
    };
  }, [dispatch, id]);

  if (isLoading) {
    return <Loader label="Loading camper details…" />;
  }

  if (error) {
    return (
      <div className={`container ${css.errorState}`}>
        <p>We couldn&rsquo;t load this camper: {error}</p>
        <Link to="/catalog" className={css.backLink}>
          &larr; Back to catalog
        </Link>
      </div>
    );
  }

  if (!camper) {
    return null;
  }

  const { name, rating, location, price, description, reviews, gallery } = camper;

  return (
    <section className={`container ${css.page}`}>
      <header className={css.header}>
        <h1 className={css.name}>{name}</h1>
        <div className={css.meta}>
          <span className={css.metaItem}>
            <RatingStars rating={rating} />
            <span>({reviews?.length ?? 0} Reviews)</span>
          </span>
          <span className={css.metaItem}>
            <MdLocationOn className={css.metaIcon} />
            {formatLocation(location)}
          </span>
        </div>
      </header>

      <div className={css.topGrid}>
        <div className={css.gallery}>
          <Gallery images={gallery} name={name} />
        </div>

        <div className={css.specsColumn}>
          <div className={css.infoCard}>
            <p className={css.price}>&euro;{formatPrice(price)}</p>
            <p className={css.description}>{description}</p>
          </div>

          <div>
            <h2 className={css.sectionTitle}>Vehicle details</h2>
            <VehicleDetails camper={camper} />
          </div>
        </div>
      </div>

      <div className={css.bottomGrid}>
        <div>
          <h2 className={css.sectionTitle}>Reviews</h2>
          <ReviewList reviews={reviews} />
        </div>

        <div>
          <BookingForm camperName={name} />
        </div>
      </div>
    </section>
  );
}

export default CamperDetailsPage;
