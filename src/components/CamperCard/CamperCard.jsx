import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import RatingStars from "../RatingStars/RatingStars.jsx";
import FavoriteButton from "../FavoriteButton/FavoriteButton.jsx";
import {
  formatPrice,
  formatLocation,
  formatForm,
  formatEngine,
  formatTransmission,
} from "../../utils/format.js";
import css from "./CamperCard.module.css";

import fuelIcon from "../../assets/Fuel.svg";
import gearIcon from "../../assets/Gear.svg";
import alcoveIcon from "../../assets/Alclove.svg";

function CamperCard({ camper }) {
  const {
    id,
    name,
    price,
    rating,
    location,
    description,
    form,
    engine,
    transmission,
    gallery,
    reviews,
  } = camper;

  const thumbnail = gallery?.[0]?.thumb ?? gallery?.[0]?.original;

  return (
    <li className={css.card}>
      <div className={css.imageWrapper}>
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={name}
            className={css.image}
            loading="lazy"
          />
        ) : (
          <div className={css.imagePlaceholder} aria-hidden="true" />
        )}
        <div className={css.favoriteSlot}>
          <FavoriteButton camperId={id} />
        </div>
      </div>

      <div className={css.body}>
        <div className={css.topRow}>
          <h3 className={css.name}>{name}</h3>
          <p className={css.price}>&euro;{formatPrice(price)}</p>
        </div>

        <div className={css.meta}>
          <span className={css.metaItem}>
            <RatingStars rating={rating} size={14} />
            <span>({reviews?.length ?? 0} Reviews)</span>
          </span>
          <span className={css.metaItem}>
            <MdLocationOn className={css.metaIcon} />
            {formatLocation(location)}
          </span>
        </div>

        <p className={css.description}>{description}</p>

        <ul className={css.features}>
          <li className={css.feature}>
            <img
              src={fuelIcon}
              alt="Fuel"
              className={css.featureIcon}
              width={18}
              height={18}
            />
            {formatEngine(engine)}
          </li>
          <li className={css.feature}>
            <img
              src={gearIcon}
              alt="Transmission"
              className={css.featureIcon}
              width={18}
              height={18}
            />
            {formatTransmission(transmission)}
          </li>
          <li className={css.feature}>
            <img
              src={alcoveIcon}
              alt="Camper form"
              className={css.featureIcon}
              width={18}
              height={18}
            />
            {formatForm(form)}
          </li>
        </ul>

        <Link
          to={`/catalog/${id}`}
          target="_blank"
          rel="noopener noreferrer"
          className={css.showMore}
        >
          Show more
        </Link>
      </div>
    </li>
  );
}

export default CamperCard;
