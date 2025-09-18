import "./CartDropdown.styles.scss";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckouthandler = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckouthandler}>Go to Checkout</Button>
    </div>
  );
};

export default CartDropdown;
