import badgeHuman from "../../extra/png/human_hr_.png";
import NavBar from "../../../components/navBar/NavBar";
import "./Home.css";

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
    </div>
  );
};

export default Home;
