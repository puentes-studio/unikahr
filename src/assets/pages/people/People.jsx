import NavBar from "../../../components/navBar/NavBar";
import peopleData from "./PeopleData";
import "./People.css";
import Footer from "../../../components/footer/Footer";

const People = () => {
  return (
    <div>
      <NavBar />
      <main>
        <h1 className="people-first-title">Meet our people</h1>
        <ul className="container">
          <li className="container-people">
            {peopleData.map((people) => (
              <div key={people.id} className="people-title-img-container">
                <img
                  src={people.imageUrl}
                  className="people-image-hr"
                  alt="Putting the human"
                />
                <div className="info-container">
                  <h2 className="people-name">{people.name}</h2>
                  <h5 className="people-title">{people.position}</h5>
                  <div
                    className="people-description"
                    dangerouslySetInnerHTML={{ __html: people.description }}
                  ></div>
                </div>
              </div>
            ))}
          </li>
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default People;
