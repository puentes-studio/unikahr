// import { useState } from "react";
import servicesData from "./ServiceData";
import "./ServiceGrid.css";

const ServicesGrid = () => {
  // const [selected, setSelected] = useState(null);

  return (
    <>
      <ul className="projects">
        {servicesData.map((service) => (
          <li key={service.id} className="project-container">
            <figure className="project-logo">
              <img
                src={service.imageUrl}
                className="logo-client"
                alt="Project-logo"
              />
              <div className="project-info">
                <h3 className="project-title">{service.title}</h3>
                <p className="project-description">{service.description}</p>
                <ul>
                  {service.list.map((item, index) =>
                    item.examples.map((example, index) => (
                      <li className="list-description" key={index}>
                        {example}
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </figure>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ServicesGrid;
