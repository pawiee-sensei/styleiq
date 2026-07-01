import {useLoaderData, Link} from 'react-router';
import {CartForm, Money} from '@shopify/hydrogen';
import {CartItem} from '../components/cart/CartItem';

export async function loader({context}) {
  const cart = await context.cart.get();
  return {cart};
}

export async function action({request, context}) {
  const {cart} = context;
  const formData = await request.formData();
  const {action, inputs} = CartForm.getFormInput(formData);

  let result;
  if (action === CartForm.ACTIONS.LinesAdd) {
    result = await cart.addLines(inputs.lines);
  } else if (action === CartForm.ACTIONS.LinesUpdate) {
    result = await cart.updateLines(inputs.lines);
  } else if (action === CartForm.ACTIONS.LinesRemove) {
    result = await cart.removeLines(inputs.lineIds);
  } else if (action === CartForm.ACTIONS.DiscountCodesUpdate) {
    result = await cart.updateDiscountCodes(inputs.discountCodes);
  }

  const headers = cart.setCartId(result.cart.id);
  return Response.json(result, {headers});
}

export default function CartPage() {
  const {cart} = useLoaderData();

  if (!cart || cart.totalQuantity === 0) {
    return (
      <div className="cart-empty">
        <div className="cart-empty-inner">
          <span className="cart-empty-eyebrow">YOUR BAG</span>
          <h1 className="cart-empty-title">YOUR CART<br />IS EMPTY</h1>
          <p className="cart-empty-desc">
            Discover our latest collections and add your favorite pieces.
          </p>
          <Link to="/collections/featured" className="btn-primary">
            SHOP NOW
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">

      {/* HEADER */}
      <div className="cart-page-header">
        <span className="cart-page-eyebrow">YOUR BAG</span>
        <h1 className="cart-page-title">SHOPPING CART</h1>
        <span className="cart-page-count">
          {cart.totalQuantity} {cart.totalQuantity === 1 ? 'ITEM' : 'ITEMS'}
        </span>
      </div>

      <div className="cart-page-body">

        {/* LEFT — LINE ITEMS */}
        <div className="cart-page-left">
          <div className="cart-items-header">
            <span>PRODUCT</span>
            <span>DETAILS</span>
            <span>TOTAL</span>
          </div>
          <div className="cart-items">
            {cart.lines.nodes.map((line) => (
              <CartItem key={line.id} line={line} />
            ))}
          </div>
          <Link to="/collections/featured" className="cart-continue">
            ← CONTINUE SHOPPING
          </Link>
        </div>

        {/* RIGHT — SUMMARY */}
        <div className="cart-page-right">
          <div className="cart-summary">
            <h2 className="cart-summary-title">ORDER SUMMARY</h2>

            <div className="cart-summary-row">
              <span>SUBTOTAL</span>
              <Money data={cart.cost.subtotalAmount} />
            </div>

            <div className="cart-summary-row">
              <span>SHIPPING</span>
              <span>Calculated at checkout</span>
            </div>

            {cart.cost.totalTaxAmount && (
              <div className="cart-summary-row">
                <span>TAX</span>
                <Money data={cart.cost.totalTaxAmount} />
              </div>
            )}

            <div className="cart-summary-divider" />

            <div className="cart-summary-total">
              <span>TOTAL</span>
              <Money data={cart.cost.totalAmount} />
            </div>

            {/* DISCOUNT CODE */}
            <CartForm
              route="/cart"
              action={CartForm.ACTIONS.DiscountCodesUpdate}
            >
              <div className="cart-discount">
                <input
                  type="text"
                  name="discountCode"
                  placeholder="PROMO CODE"
                  className="cart-discount-input"
                />
                <button type="submit" className="cart-discount-btn">
                  APPLY
                </button>
              </div>
            </CartForm>

            <a
              href={cart.checkoutUrl}
              className="cart-checkout-btn"
            >
              PROCEED TO CHECKOUT
            </a>

            <div className="cart-summary-trust">
              <span>🔒 SECURE CHECKOUT</span>
              <span>FREE RETURNS</span>
              <span>AUTHENTIC PIECES</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}