import { useState } from "react";
import { NavLink } from "react-router-dom";
import UnikaLogo from "../../assets/extra/unika-logos/logo-unika-hr.png";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="nav-bar">
        <div className="nav-logo">
          <NavLink to="/">
            <img src={UnikaLogo} className="UnikaHR-logo" alt="UnikaHR logo" />
          </NavLink>
        </div>
        <div className={`nav-items ${isOpen && "open"}`}>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/services">SERVICES</NavLink>
          <NavLink to="/people">PEOPLE</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
        </div>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
