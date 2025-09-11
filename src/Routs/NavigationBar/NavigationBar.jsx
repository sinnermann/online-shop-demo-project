import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import CrwnLogo from "../../assets/crown.svg";
import "./NavigationBar.scss";
import CartIcon from "../../Components/CartIcon/CartIcon";
import CartDropdown from "../../Components/CartDropdown/CartDropdown";
import { CartContext, CartProvider } from "../../Context/CartContext";

const NavigationBar = () => {
  const {isCartOpen} = useContext(CartContext)
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={CrwnLogo} className="logo" alt="Crown Logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/trends">
            TRENDS
          </Link>
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
