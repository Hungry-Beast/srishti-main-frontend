import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Background, Works, StarsCanvas, Contact2, Navbar2, Events, Footer, TestElement, ForgetPassword, LoaderComponent, NotFoundPage} from "./components";
import { SelectOption } from "./constants";
import TeamSection from "./components/Team/Team";
import SingleEvent from "./components/SingleEvent";
import { styles } from './styles';

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
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            loading ? (
              <LoaderComponent />
            ) : (
              <div className='relative z-0 '>
                <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                  <Navbar />
                  <Hero />
                </div>
                <About />
                <Experience />
                {/* <Works /> */}
                <Feedbacks />
                <Footer />

              </div>
            )
          }
        />

        <Route path="/login" element={
          loading ? (
            <LoaderComponent />
          ) : (
            <div className='relative z-0 '>
              <Navbar />
              <div className='relative z-0'>
                <Contact />
                <Footer />

              </div>
            </div>
          )
        } />

        <Route path="/register" element={
          loading ? (
            <LoaderComponent />
          ) : (
            <div className='relative'>
              <Navbar />
              <div className='relative z-0'>
                <Contact2 />
                <Footer />

              </div>
            </div>
          )
        } />

        <Route path="/events" element={
          loading ? (
            <LoaderComponent />
          ) : (
            <div className='relative z-0 '>
              <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Navbar />
              </div>
              <StarsCanvas />
              <Events />
              <Footer />
            </div>
          )
        } />

        <Route path="/forgetpassword" element={
          loading ? (
            <LoaderComponent />
          ) : (
            <div className='relative z-0 '>
              <Navbar />
              <ForgetPassword />
            </div>
          )
        } />

        <Route path="/team" element={
          loading ? (
            <LoaderComponent />
          ) : (
            <div className='relative z-0 '>
              <Navbar />
              <div className='mt-6'>
              <TeamSection />
              </div>
            </div>
          )
        } />
        <Route path="/test" element={
          
            <div className='relative z-0 '>
              <Navbar />
              <div className='mt-6'>
             <TestElement />
             <NotFoundPage />
              </div>
            </div>
          
        } />
        <Route path="/event/:id" element={<SingleEvent />}></Route>
        <Route path='*' element={ <div className='relative z-0 '>
              <Navbar />
              <div className='mt-6'>
             <NotFoundPage />
              </div>
            </div>} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
