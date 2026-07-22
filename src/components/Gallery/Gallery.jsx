import { useState } from 'react';
import css from './Gallery.module.css';

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
        />
      </div>
      {images.length > 1 && (
        <ul className={css.thumbs}>
          {images.map((image, index) => (
            <li key={image.thumb ?? index}>
              <button
                type="button"
                className={index === activeIndex ? `${css.thumbButton} ${css.active}` : css.thumbButton}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show photo ${index + 1} of ${name}`}
              >
                <img src={image.thumb ?? image.original} alt="" className={css.thumbImage} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Gallery;
