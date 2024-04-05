import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Background,
  Works,
  StarsCanvas,
  Contact2,
  Navbar2,
  Events,
  Footer,
} from "./components";
import { SelectOption } from "./constants";
import TeamSection from "./components/Team/Team";
import SingleEvent from "./components/SingleEvent";
import Stars from "./components/BackgroundStar/Stars";
import LostInSpaceAnimation from "./components/404";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<LostInSpaceAnimation />} />
        </Routes>
      </BrowserRouter>
      <Stars />
    </div>
  );
};

export default App;

