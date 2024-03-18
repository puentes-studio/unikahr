// import { useState } from "react";
import valuesData from "./ValuesData";
import "./ValuesGrid.css";

const ValuesGrid = () => {
  // const [selected, setSelected] = useState(null);

  return (
    <>
      <ul className="values">
        {valuesData.map((value) =>
          value.list.map((item, index) => (
            <li key={index} className="value-container">
              <div className="value-info">
                <h3 className="value-title">{item.name}</h3>
                <p className="value-description">{item.description}</p>
              </div>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default ValuesGrid;
