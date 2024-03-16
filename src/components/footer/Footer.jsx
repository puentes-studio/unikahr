import "./Footer.css";
import UnikaLogo from "../../assets/extra/unika-logos/logo-unika-hr.png";
import Linkedin from "../../assets/extra/linkedin-app-white-icon.webp";
// import Github from "../../assets/extra";
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
            <a href="" target="_blank">
              <img className="linkedin-size" src={Linkedin} alt="LinkedIn" />
            </a>
            {/* <a href="https://github.com/" target="_blank">
              <img className="github-size" src={Github} alt="GitHub" />
            </a> */}
          </div>
        </div>

        <ul className="footer-list">
          <li>
            <NavLink to="/about">About Me</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
