import {Money} from '@shopify/hydrogen';

export function ProductInfo({product, selectedVariant}) {
  return (
    <div className="product-info">
      <span className="product-info-category">STYLEIQ COLLECTION</span>
      <h1 className="product-info-title">{product.title}</h1>

      <div className="product-info-price">
        {selectedVariant?.compareAtPrice && (
          <span className="product-info-compare">
            <Money data={selectedVariant.compareAtPrice} />
          </span>
        )}
        <Money
          className="product-info-current"
          data={selectedVariant?.price}
        />
      </div>

      {product.descriptionHtml && (
        <div
          className="product-info-desc"
          dangerouslySetInnerHTML={{__html: product.descriptionHtml}}
        />
      )}
    </div>
  );
}