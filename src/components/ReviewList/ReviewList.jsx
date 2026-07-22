import RatingStars from '../RatingStars/RatingStars.jsx';
import css from './ReviewList.module.css';

function getInitial(name = '?') {
  return name.trim().charAt(0).toUpperCase();
}

function ReviewList({ reviews = [] }) {
  if (reviews.length === 0) {
    return <p className={css.empty}>No reviews yet for this camper.</p>;
  }

  return (
    <ul className={css.list}>
      {reviews.map((review, index) => (
        <li key={`${review.reviewer_name}-${index}`} className={css.item}>
          <div className={css.header}>
            <span className={css.avatar}>{getInitial(review.reviewer_name)}</span>
            <div>
              <p className={css.name}>{review.reviewer_name}</p>
              <RatingStars rating={review.reviewer_rating} size={14} />
            </div>
          </div>
          <p className={css.comment}>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
}

export default ReviewList;
