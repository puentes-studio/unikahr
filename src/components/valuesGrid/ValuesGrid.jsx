// import { useState } from "react";
import valuesData from "./ValuesData";
import "./ValuesGrid.css";

const ProjectsGrid = () => {
  // const [selected, setSelected] = useState(null);

  return (
    <>
      <ul className="projects">
        {valuesData.map((value) =>
          value.list.map((item, index) => (
            <li key={index} className="project-container">
              <div className="project-info">
                <h3 className="project-title">{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default ProjectsGrid;
