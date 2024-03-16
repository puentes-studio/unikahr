import "./Footer.css";
import UnikaLogo from "../../assets/extra/unika-logos/logo-unika-hr.png";
import Linkedin from "../../assets/extra/linkedin-app-white-icon.webp";
import Instagram from "../../assets/extra/Instagram-logo-white.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper">
        <div className="container-footer-screen">
          <div className="logo">
            <NavLink to="/">
              <img
                src={UnikaLogo}
                className="UnikaHR-logo-footer"
                alt="UnikaHR logo"
              />
            </NavLink>
          </div>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/company/unikahr/about/"
              target="_blank"
            >
              <img className="linkedin-size" src={Linkedin} alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/unika_hr/" target="_blank">
              <img className="instagram-size" src={Instagram} alt="instagram" />
            </a>
          </div>
        </div>
        <div className="menu-container">
          <ul className="footer-list">
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">People</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink to="/cookies-policy">Cookies Policy</NavLink>
            </li>
            <li>
              <NavLink to="/terms-and-conditions">Terms & Conditions</NavLink>
            </li>
          </ul>
        </div>
        <p className="footer-description">® Unika HR | 2024</p>
      </div>
    </>
  );
};

export default Footer;
