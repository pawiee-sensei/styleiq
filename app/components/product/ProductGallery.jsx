import {useState, useEffect} from 'react';
import {useSearchParams} from 'react-router';

export function ProductGallery({images, variants, scarcity}) {
  const [selected, setSelected] = useState(0);
  const [searchParams] = useSearchParams();

  // ── When URL color param changes, find matching variant image ──
  useEffect(() => {
    const color = searchParams.get('Color');
    const size = searchParams.get('Size');

    if (!color && !size) return;

    // Find variant that matches selected options
    const matchedVariant = variants?.find((v) =>
      v.selectedOptions.every((opt) => {
        const param = searchParams.get(opt.name);
        return !param || param === opt.value;
      }),
    );

    if (matchedVariant?.image) {
      const imgIndex = images.findIndex(
        (img) => img.id === matchedVariant.image.id,
      );
      if (imgIndex >= 0) setSelected(imgIndex);
    }
  }, [searchParams, variants, images]);

  if (!images?.length) {
    return <div className="product-gallery-empty">No images available</div>;
  }

  return (
    <div className="product-gallery">
        <div className="product-gallery-main">
          <img
            src={images[selected]?.url}
            alt={images[selected]?.altText || 'Product image'}
            className="product-gallery-img"
          />
          {scarcity}
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