import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { useAuth } from "../../contexts/auth-context";
import { useCart } from "../../contexts/cart-context";
import { useProducts } from "../../contexts/products-context";
import { useWishlist } from "../../contexts/wishlist-context";
import "./SingleProduct.css";

const SingleProduct = () => {
  const navigate = useNavigate();
  const { productState, isLoading } = useProducts();
  const { addToWishlist, removeFromWishlist, itemInWishlist } = useWishlist();
  const { addToCart, itemInCart } = useCart();
  const { token } = useAuth();

  const currentProduct = productState.productDetail;

  const {
    _id,
    title,
    imgSrc,
    description,
    price,
    updatedPrice,
    starRating,
    size,
    inStock,
    fastDelivery,
    category,
  } = currentProduct;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="single-product-outer-container page-wrapper">
          <div className="single-product-inner-container">
            <div className="single-product">
              <div className="img-div">
                <img src={imgSrc} alt={title} className="single-product-img" />
              </div>

              {size && <div className="single-product-sale">{size}</div>}

              <div className="card-body">
                <div>
                  <div className="card-heading">
                    <h2>{title}</h2>
                  </div>

                  <div className="rating">
                    <div className="rating-block">
                      <span>{starRating}</span>
                      <span className="star-icon">
                        <StarRoundedIcon />
                      </span>
                    </div>
                  </div>

                  <div className="card-content">
                    <div className="single-product-price">
                      <div className="price">Rs {updatedPrice}</div>
                      <div className="previous-price">Rs {price}</div>
                    </div>
                  </div>

                  <hr />

                  <div className="card-description">
                    <div>{description}</div>
                  </div>

                  <hr />

                  <div className="card-description-container">
                    <div className="card-description">
                      <ul className="spaced-list">
                        <li>
                          <p>Category:</p>
                          <span className="list-value">{category}</span>
                        </li>
                        <li>
                          <p>Availability:</p>
                          <span className="list-value">
                            {inStock ? "In Stock" : "Out of Stock"}
                          </span>
                        </li>
                        <li>
                          <p>Delivery:</p>
                          <span className="list-value">
                            {fastDelivery ? "Fast" : "6-8 days"}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <hr />

                  <div className="card-tags">
                    <div className="tag">
                      <div className="tag-icon">
                        <CardGiftcardOutlinedIcon />
                      </div>
                      <div className="tag-text">
                        <p>Send it as a gift</p>
                      </div>
                    </div>
                    <div className="tag">
                      <div className="tag-icon">
                        <AirportShuttleIcon />
                      </div>
                      <div className="tag-text">
                        <p>All Over Nepal delivery</p>
                      </div>
                    </div>
                    <div className="tag">
                      <div className="tag-icon">
                        <CreditScoreIcon />
                      </div>
                      <div className="tag-text">
                        <p>Every cards accepted</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-action">
                  <div>
                    <button
                      className="single-product-cart-btn"
                      onClick={() =>
                        token
                          ? itemInCart(_id)
                            ? navigate("/cart")
                            : addToCart(currentProduct)
                          : navigate("/login")
                      }
                    >
                      {token && itemInCart(_id) ? "Go to Cart" : "Add to Cart"}
                    </button>
                  </div>
                  <div>
                    <button
                      className="single-product-wishlist-btn"
                      onClick={() =>
                        token
                          ? itemInWishlist(_id)
                            ? removeFromWishlist(currentProduct)
                            : addToWishlist(currentProduct)
                          : navigate("/login")
                      }
                    >
                      {token && itemInWishlist(_id)
                        ? "Remove from Wishlist"
                        : "Add to Wishlist "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
