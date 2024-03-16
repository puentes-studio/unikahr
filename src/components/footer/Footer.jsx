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
          <div className="social-icons">
            <img src={UnikaLogo} className="UnikaHR-logo" alt="UnikaHR logo" />
          </div>
          <h4 className="footer-title">Vlad Beltran Puentes</h4>
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
          <li>
            <NavLink to="/contact">Privacy Policy</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Cookies Policy</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Terms & Conditions</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
