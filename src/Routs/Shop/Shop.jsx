// import SHOP_DATA from "../../../shop-data.json";
import { useContext } from "react";
import { ProductContext } from "../../Context/Products.context";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./Shop.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;



