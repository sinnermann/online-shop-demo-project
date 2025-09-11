import "./CartIcon.styles.scss";
import ShoppingIcon from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <img className="shopping-icon" src={ShoppingIcon} alt="shopping-cart" />

      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
