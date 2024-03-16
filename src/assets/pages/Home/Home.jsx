import badgeHuman from "../../extra/png/human_hr_.png";
import unikaFrame from "../../extra/png/frame_2.png";
import hrStrategy from "../../extra/png/hr_strategy_unika.png";
import NavBar from "../../../components/navBar/NavBar";
import "./Home.css";
import Footer from "../../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <main>
        <div className="human-container container-home">
          <div className="human-title-img-container">
            <img
              src={badgeHuman}
              className="human-image-hr"
              alt="Putting the human"
            />
            <h2 className="human-title">
              BACK INTO <br /> HUMAN RESOURCES
            </h2>
          </div>

          <p className="human-description">
            We specialise in providing HR support for small and medium
            businesses.
          </p>
        </div>

        {/* // Division # 1 */}

        <div className="unika-frame-container container-home">
          <div className="frame-title-img-container">
            <h2 className="frame-title">
              SIMPLE
              <br />
              CURIOUS
              <br />
              BOLD
            </h2>
            <img
              src={unikaFrame}
              className="frame-image-hr"
              alt="Putting the human"
            />
          </div>
          <h4>WE ARE UNIKA HR, THE PEOPLE BUSINESS.</h4>
          <p className="frame-description">
            A team of HR professionals who share the same values and beliefs
            about people at work. We’ve recognised that Human Resources can
            become very disassociated from…. humans and we want to put that
            right!
          </p>
        </div>

        {/* // Division # 2 */}

        <div className="strategy-container container-home">
          <div className="strategy-title-img-container">
            {/* <h2 className="strategy-title">STRATEGY</h2> */}
            <img
              src={hrStrategy}
              className="strategy-image-hr"
              alt="Putting the human"
            />
          </div>

          <p className="strategy-description">
            WE KNOW OUR STUFF AND WANT TO SHARE THIS KNOWLEDGE IN A WAY THAT YOU
            AND YOUR PEOPLE CAN EASILY UNDERSTAND AND FIND USEFUL.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
