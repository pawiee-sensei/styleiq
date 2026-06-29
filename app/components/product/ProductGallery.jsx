import {useState} from 'react';

export function ProductGallery({images}) {
  const [selected, setSelected] = useState(0);

  if (!images?.length) {
    return <div className="product-gallery-empty">No images available</div>;
  }

  return (
    <div className="product-gallery">
      <div className="product-gallery-main">
        <img
          src={images[selected].url}
          alt={images[selected].altText || 'Product image'}
          className="product-gallery-img"
        />
      </div>
      {images.length > 1 && (
        <div className="product-gallery-thumbs">
          {images.map((img, i) => (
            <button
              key={img.id}
              className={`product-thumb ${i === selected ? 'active' : ''}`}
              onClick={() => setSelected(i)}
            >
              <img
                src={img.url}
                alt={img.altText || `Product image ${i + 1}`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}