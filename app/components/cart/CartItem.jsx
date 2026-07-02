import {Link} from 'react-router';
import {Image, Money, CartForm} from '@shopify/hydrogen';

export function CartItem({line}) {
  const {id, merchandise, quantity, cost} = line;
  const {product, image, title, selectedOptions} = merchandise;

  return (
    <div className="cart-item">
      <Link to={`/products/${product.handle}`} className="cart-item-img">
        {image && (
          <Image data={image} aspectRatio="3/4" width={100} />
        )}
      </Link>

      <div className="cart-item-details">
        <Link to={`/products/${product.handle}`} className="cart-item-title">
          {product.title}
        </Link>

        <div className="cart-item-options">
          {selectedOptions.map((opt) => (
            <span key={opt.name}>{opt.name}: {opt.value}</span>
          ))}
        </div>

        <div className="cart-item-footer">
          <QuantitySelector lineId={id} quantity={quantity} />

          <CartForm
            route="/cart"
            action={CartForm.ACTIONS.LinesRemove}
            inputs={{lineIds: [id]}}
          >
            <button type="submit" className="cart-item-remove">
              REMOVE
            </button>
          </CartForm>
        </div>
      </div>

      <Money data={cost.totalAmount} className="cart-item-price" />
    </div>
  );
}



function QuantitySelector({lineId, quantity}) {
  return (
    <div className="cart-qty">
      <CartForm
        route="/cart"
        action={CartForm.ACTIONS.LinesUpdate}
        inputs={{
          lines: [{id: lineId, quantity: Math.max(0, quantity - 1)}],
        }}
      >
        <button type="submit" className="cart-qty-btn" disabled={quantity <= 1}>
          −
        </button>
      </CartForm>

      <span className="cart-qty-value">{quantity}</span>

      <CartForm
        route="/cart"
        action={CartForm.ACTIONS.LinesUpdate}
        inputs={{
          lines: [{id: lineId, quantity: quantity + 1}],
        }}
      >
        <button type="submit" className="cart-qty-btn">
          +
        </button>
      </CartForm>
    </div>
  );
}