import { Link } from "react-router-dom";
import { useCart } from "../../contexts/cart-context";
import "./CartPrice.css";

const CartPrice = () => {
  const {
    cartState: { cart },
    totalPriceWithoutDiscount,
    totalDiscount,
    totalCheckoutAmount,
    deliveryCharges,
  } = useCart();

  return (
    <div className="cart-pricing-card">
      <div className="pricing-card-title">
        <h2>Price Details</h2>
      </div>
      <hr />
      <div className="sub-price">
        <div className="price">
          <div className="text">
            Price (<span>{cart.length}</span> <span>items</span>)
          </div>
          <div className="value">Rs {totalPriceWithoutDiscount}</div>
        </div>
        <div className="price">
          <div className="text">Discount</div>
          <div className="value">- Rs {totalDiscount}</div>
        </div>
        <div className="price">
          <div className="text">Delivery Charges</div>
          <div className="value">Rs {deliveryCharges}</div>
        </div>
      </div>
      <hr />
      <div className="total-price">
        <div className="text">Total Amount</div>
        <div className="value">Rs {totalCheckoutAmount}</div>
      </div>
      <hr />
      <Link to="/checkout">
        <button className="cart-checkout-btn">checkout</button>
      </Link>
      <p className="order-discSave-msg">
        You will save Rs {totalDiscount} on this order
      </p>
    </div>
  );
};

export default CartPrice;
