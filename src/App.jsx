import "./App.css";

import Home from "./assets/pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import About from "./assets/pages/about/About";
import Services from "./assets/pages/services/Services";
import People from "./assets/pages/people/People";
import Contact from "./assets/pages/contact/Contact";
import CookiesPolicy from "./assets/pages/cookiesPolicy/CookiesPolicy";
import PrivacyPolicy from "./assets/pages/privacyPolicy/PrivacyPolicy";
import Terms from "./assets/pages/terms&conditions/Terms";

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/people" element={<People />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cookies-policy" element={<CookiesPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
