import { useState } from "react";
import css from "./Gallery.module.css";

function Gallery({ images = [], name }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) {
    return <div className={css.placeholder} aria-hidden="true" />;
  }

  const active = images[activeIndex];

  return (
    <div className={css.gallery}>
      <div className={css.mainImageWrapper}>
        <img
          src={active.original ?? active.thumb}
          alt={name}
          className={css.mainImage}
          fetchPriority="high"
          decoding="async"
        />
      </div>

      {images.length > 1 && (
        <div className={css.thumbs}>
          {images.map((image, index) => (
            <button
              key={image.thumb ?? index}
              type="button"
              className={
                index === activeIndex
                  ? `${css.thumbButton} ${css.active}`
                  : css.thumbButton
              }
              onClick={() => setActiveIndex(index)}
              aria-label={`Show photo ${index + 1} of ${name}`}
            >
              <img
                src={image.thumb ?? image.original}
                alt=""
                className={css.thumbImage}
                loading="lazy"
                decoding="async"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;
