import { useNavigate } from "react-router-dom";
import "./OrderDetails.css";

import { useAddress } from "../../contexts/address-context";
import { useCart } from "../../contexts/cart-context";
// import { useAuth } from "../../contexts/auth-context";
// import { useProducts } from "../../contexts/products-context";
import { filterActionTypes } from "../../utils/constants";


const OrderDetails = () => {
  const navigate = useNavigate();
  // const { currentUser } = useAuth();
  // const { productDispatch } = useProducts();
  const {
    cartState: { cart },
    deliveryCharges,
    totalPriceWithoutDiscount,
    totalDiscount,
    totalCheckoutAmount,
    // clearCart,
  } = useCart();
  const {
    addressState: { addresses, selectedAddressId },
  } = useAddress();

  const { SET_ORDER_LIST } = filterActionTypes;

  const currentAddress = addresses.find(({ _id }) => _id === selectedAddressId);

 

  return (
    <div className="order-details-container">
      <div className="title">Order Summary</div>
      <div className="order-items-wrapper">
        {cart?.map((cartItem) => (
          <div key={cartItem._id} className="item">
            <div>
              {cartItem.title} (Rs {cartItem.updatedPrice} X {cartItem.qty})
            </div>
            <div>Rs {cartItem.updatedPrice * cartItem.qty}</div>
          </div>
        ))}
      </div>
      <div className="title">Price-details</div>
      <div className="order-items-wrapper">
        <div className="item">
          <div>Total Price</div>
          <div>Rs {totalPriceWithoutDiscount}</div>
        </div>
        <div className="item">
          <div>Total Discount</div>
          <div>Rs {totalDiscount}</div>
        </div>
        <div className="item">
          <div>Delivery Charges</div>
          <div>Rs {deliveryCharges}</div>
        </div>
        <div className="item grand-total">
          <div>Grand Total</div>
          <div>Rs {totalCheckoutAmount}</div>
        </div>
      </div>
      <div className="title">Deliver To</div>
      <div className="order-items-wrapper address-wrap">
        {currentAddress ? (
          <>
            <div className="address-name">{currentAddress.name}</div>
            <div>
              {currentAddress.street}, {currentAddress.city} -{" "}
              {currentAddress.zipcode}
            </div>
            <div>
              {currentAddress.state}, {currentAddress.country}
            </div>
            <div>{currentAddress.mobile}</div>
          </>
        ) : (
          <p>Add an Address to Proceed.</p>
        )}
      </div>
      <button
        className="place-order-btn"
        onClick={() => placeOrderBtnHandler()}
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderDetails;
