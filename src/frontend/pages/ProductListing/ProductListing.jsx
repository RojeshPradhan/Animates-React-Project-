import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Loader from "../../components/Loader/Loader";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductFilters from "../../components/ProductFilters/ProductFilters";
import { useProducts } from "../../contexts/products-context";
import "./ProductListing.css";

const ProductListing = () => {
  const {
    toggleFilter,
    isLoading,
    filteredBySize: filteredProducts,
  } = useProducts();

  return (
    <div className="products-listing-outer-container page-wrapper">
      {isLoading ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        <>
          <div className="products-filters-container">
            <ProductFilters />
          </div>
          <div className="products-outer-container">
            <div className="products-title-bar">
              <div>
                
                <h2>All Products ({filteredProducts.length})</h2>
              </div>
              <div className="filter-icon">
                <FilterAltIcon onClick={toggleFilter} />
              </div>
            </div>
            {filteredProducts.length > 0 ? (
              <div className="products-container">
                {filteredProducts?.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            ) : (
              <p className="text-center no-products-msg">
                There is nothing seems here.
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductListing;
