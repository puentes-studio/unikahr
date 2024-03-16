import badgeHuman from "../../extra/png/human_hr_.png";
import NavBar from "../../../components/navBar/NavBar";
import "./Home.css";
import Footer from "../../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <main className="home-container">
        <div className="home-title-img-container">
          <img
            src={badgeHuman}
            className="home-image-hr"
            alt="Putting the human"
          />
          <h2 className="home-title">
            BACK INTO <br /> HUMAN RESOURCES
          </h2>
        </div>

        <p>
          We specialise in providing HR support for small and medium businesses.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
