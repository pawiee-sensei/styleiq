import {CartForm} from '@shopify/hydrogen';

export function AddToCart({selectedVariant}) {
  const isAvailable = selectedVariant?.availableForSale;

  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.LinesAdd}
      inputs={{
        lines: selectedVariant
          ? [
              {
                merchandiseId: selectedVariant.id,
                quantity: 1,
              },
            ]
          : [],
      }}
    >
      <button
        type="submit"
        className={`add-to-cart-btn ${!isAvailable ? 'sold-out' : ''}`}
        disabled={!isAvailable}
      >
        {!selectedVariant
          ? 'SELECT A VARIANT'
          : isAvailable
          ? 'ADD TO CART'
          : 'SOLD OUT'}
      </button>
    </CartForm>
  );
}