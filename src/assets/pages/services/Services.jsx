import phoneUnika from "../../extra/png/phone.png";
import NavBar from "../../../components/navBar/NavBar";
import "./Services.css";
import Footer from "../../../components/footer/Footer";

const Services = () => {
  return (
    <div>
      <NavBar />
      <main>
        <div className="container-services">
          <div className="services-title-container">
            <img
              src={phoneUnika}
              className="services-image-hr"
              alt="Putting the human"
            />
            <h2 className="services-title">
              WE LISTEN AND WE TALK... <br />
              WE GET TO THE POINT.
            </h2>
          </div>
          <div className="service-description-container">
            <h4 className="subtitle-description-service">WHAT WE DO?</h4>
            <p className="services-description">
              We are great at providing HR services to support companies who
              need to have specialist support but don’t need a dedicated HR team
              at this stage of their growth. We don’t want to sell you ‘off the
              shelf solutions’ that won’t fit what you need nor will we try to
              sell you complex ‘bespoke’ services either. We are pragmatic and
              use common sense approaches tailored to you.
            </p>
          </div>
        </div>

        {/* // Division # 2 */}

        <div className="strategy-container">
          <div className="strategy-title-img-container">
            {/* <h2 className="strategy-title">STRATEGY</h2> */}
            {/* <img
              src={hrStrategy}
              className="strategy-image-hr"
              alt="Putting the human"
            /> */}
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

export default Services;
