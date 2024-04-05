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
        <Routes>
          <Route
            index
            element={
              <div className="relative z-0 ">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                  <Navbar />
                  <Hero />
                </div>
                <About />

                <Experience />

                {/* <Works /> */}
                <Feedbacks />
                <Footer />
                {/* <StarsCanvas /> */}
              </div>
            }
          />

          <Route
            path="/login"
            element={
              <div className="relative z-0 ">
                <Navbar2 />
                <div className="relative z-0">
                  <Contact />
                  <Footer />
                  <StarsCanvas />
                </div>
              </div>
            }
          />

          <Route
            path="/login"
            element={
              <div className="relative z-0 ">
                <Navbar2 />
                <div className="relative z-0">
                  <Contact />
                  <Footer />
                  {/* <StarsCanvas /> */}
                </div>
              </div>
            }
          />

          <Route
            path="/register"
            element={
              <div className="relative">
                <Navbar2 />
                <div className="relative z-0">
                  <Contact2 />
                  <Footer />
                  {/* <StarsCanvas /> */}
                </div>
              </div>
            }
          />
          <Route
            path="/events"
            element={
              <div className="relative z-0 min-h-screen ">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                  <Navbar />
                </div>
                {/* <StarsCanvas /> */}
                <div className="h-full flex flex-col justify-center mt-11">
                  <Events />
                  <Footer />
                </div>
              </div>
            }
          />
          <Route path="/test" element={<div className="relative z-0 "></div>} />

          <Route path="/teams" element={<TeamSection />}></Route>
          <Route path="/event/:id" element={<SingleEvent />}></Route>
        </Routes> </Routes>
      </BrowserRouter>
      <Stars />
    </div>
  );
};

export default App;

