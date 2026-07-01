import {CartForm} from '@shopify/hydrogen';
import {useState} from 'react';

export function AddToCart({selectedVariant}) {
  const isAvailable = selectedVariant?.availableForSale;
  const [added, setAdded] = useState(false);

  function handleSuccess() {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  }

  return (
    <div className="add-to-cart-wrap">
      <CartForm
        route="/cart"
        action={CartForm.ACTIONS.LinesAdd}
        inputs={{
          lines: selectedVariant
            ? [{merchandiseId: selectedVariant.id, quantity: 1}]
            : [],
        }}
      >
        <button
          type="submit"
          className={`add-to-cart-btn ${!isAvailable ? 'sold-out' : ''} ${added ? 'added' : ''}`}
          disabled={!isAvailable}
          onClick={() => isAvailable && handleSuccess()}
        >
          {!selectedVariant
            ? 'SELECT A VARIANT'
            : added
            ? '✓ ADDED TO BAG'
            : isAvailable
            ? 'ADD TO CART'
            : 'SOLD OUT'}
        </button>
      </CartForm>

      {added && (
        <div className="add-to-cart-toast">
          <span>✓</span>
          <div>
            <p className="toast-title">Added to your bag</p>
            <p className="toast-sub">
              {selectedVariant?.title !== 'Default Title'
                ? selectedVariant?.title
                : ''}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}