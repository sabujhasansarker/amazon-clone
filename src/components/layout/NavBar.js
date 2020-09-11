import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

// scss
import "./navbar.scss";
import Context from "../../context/Context";

const NavBar = () => {
  const { data, carts } = useContext(Context);
  const [active, setActive] = useState(false);
  const { logo, cart } = data !== null && data;
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className={`input-field ${active && "active-input"}`}>
          <select>
            <option value="all">All</option>
            <option value="electronic">Electronic</option>
            <option value="furnisher">Furnisher</option>
          </select>
          <input
            type="text"
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
          />
          <div className="search">
            <img src="https://img.icons8.com/ios-glyphs/100/000000/search.png" />
          </div>
        </div>
        <div className="login">
          <h5>
            <span>Hello,Sing in</span> <br />
            Account & Lists
          </h5>
        </div>
        <div className="return">
          <h5>
            <span>Returns</span>
            <br /> & Orders
          </h5>
        </div>
        <Link to="/checkout" className="cart">
          <img src={cart} alt="" />
          <span>{carts && carts.length}</span>
          <h5>Cart</h5>
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
