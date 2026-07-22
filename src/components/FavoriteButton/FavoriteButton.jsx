import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { toggleFavorite } from "../../redux/favoritesSlice.js";
import { selectFavoriteIds } from "../../redux/selectors.js";
import css from "./FavoriteButton.module.css";

function FavoriteButton({ camperId }) {
  const dispatch = useDispatch();
  const favoriteIds = useSelector(selectFavoriteIds);
  const isFavorite = favoriteIds.includes(camperId);

  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(toggleFavorite(camperId));
  };

  return (
    <button
      type="button"
      className={css.button}
      onClick={handleClick}
      aria-pressed={isFavorite}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      {isFavorite ? <FaHeart className={css.filled} /> : <FaRegHeart />}
    </button>
  );
}

export default FavoriteButton;
