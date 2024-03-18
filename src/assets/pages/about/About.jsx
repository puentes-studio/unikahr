import unikaTv from "../../extra/tv.mp4";
import unikaBadges from "../../extra/png/badgets-05.png";
import NavBar from "../../../components/navBar/NavBar";
import "./About.css";
import Footer from "../../../components/footer/Footer";

const About = () => {
  return (
    <div>
      <NavBar className="z-index-nav" />
      <main>
        <div className="video-background">
          <video autoPlay loop muted>
            <source src={unikaTv} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="video-description-container">
          <p className="video-about-description">
            {/* It´s a question that keeps us on our toes and steers everything we
            do.  */}
            We will help you build HR practices that truly support your people
            and the business.
          </p>
        </div>

        <div className="unika-badgets-container">
          <img
            src={unikaBadges}
            className="badgets-unika-image-hr"
            alt="Putting the human"
          />
          <h2 className="badgets-title">
            THE SIX VALUES THAT SHOW HOW WE WORK AND WHO WE ARE.
          </h2>
        </div>

        <div className="strategy-container">
          <div className="strategy-title-img-container">
            <p className="strategy-description">
              WE KNOW OUR STUFF AND WANT TO SHARE THIS KNOWLEDGE IN A WAY THAT
              YOU AND YOUR PEOPLE CAN EASILY UNDERSTAND AND FIND USEFUL.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
