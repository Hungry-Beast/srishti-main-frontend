import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Background,
  Works,
  LoaderComponent,
  StarsCanvas,
  Contact2,
  Events,
  Footer,
} from "./components";
import { SelectOption } from "./constants";
import TeamSection from "./components/Team/Team";
import SingleEvent from "./components/SingleEvent";
import Stars from "./components/BackgroundStar/Stars";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LostInSpaceAnimation from "./components/404";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={
              <LostInSpaceAnimation/>
              // loading ? (
              //   <LoaderComponent />
              // ) : (
              //   <div className="relative z-0 ">
              //     <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              //       <Navbar />
              //       <Hero />
              //     </div>
              //     <About />
              //     <div id="journey">
              //       <Experience />
              //     </div>
              //     {/* <Works /> */}
              //     <Feedbacks />
              //     <Footer />
              //   </div>
              // )
            }
          />

                </Routes>
        <ToastContainer />
      </BrowserRouter>
      <Stars />
    </div>
  );
};

export default App;
