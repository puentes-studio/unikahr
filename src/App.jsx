import "./App.css";

import Home from "./assets/pages/Home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
