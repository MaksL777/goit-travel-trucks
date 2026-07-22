import { FaStar } from "react-icons/fa";
import css from "./RatingStars.module.css";

function RatingStars({ rating = 0, size = 14 }) {
  const filled = Math.round(rating);

  return (
    <span className={css.stars} aria-label={`Rating: ${rating} out of 5`}>
      {Array.from({ length: 5 }, (_, index) => (
        <FaStar
          key={index}
          size={size}
          className={index < filled ? css.filled : css.empty}
        />
      ))}
    </span>
  );
}

export default RatingStars;
