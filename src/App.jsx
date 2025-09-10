// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Main page components
import NavigationBar from './NavigationBar';
import Home from './Home';
import About from './About';
import Instructors from './Instructors';
import Gallery from './Gallery'; // This is the component with the limited view
import RegistrationBanner from './RegistrationBanner';
import Register from './Register';
import Footer from './Footer';

// Full Gallery page component
import FullGallery from './FullGallery'; // Assuming you have this component

import 'bootstrap/dist/css/bootstrap.min.css';

// A single component to hold all the main page sections
const HomePage = ({ showModalBanner, handleModalHide }) => {
  return (
    <>
      <main>
        <Home />
        {/* The limited gallery view is on the home page */}
        <Gallery /> 
        <About />
        <Instructors />
        <Register />
      </main>
      <Footer />
      {/* The registration banner is a pop-up on the home page */}
      <RegistrationBanner
        show={showModalBanner}
        onHide={handleModalHide}
      />
    </>
  );
};

function App() {
  const [showModalBanner, setShowModalBanner] = useState(false);

  useEffect(() => {
    // Set timers for the banner to appear after 12 and 42 seconds
    const timer1 = setTimeout(() => {
      setShowModalBanner(true);
    }, 12000);

    const timer2 = setTimeout(() => {
      setShowModalBanner(true);
    }, 42000);

    // Clean up the timers on component unmount
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleModalHide = () => {
    setShowModalBanner(false);
  };

  return (
    <Router>
      <NavigationBar />
      <Routes>
        {/* Route for the main page (path is '/') */}
        <Route 
          path="/" 
          element={
            <HomePage 
              showModalBanner={showModalBanner} 
              handleModalHide={handleModalHide} 
            />
          } 
        />
        {/* Route for the full gallery page (path is '/gallery') */}
        <Route path="/gallery" element={<FullGallery />} />
      </Routes>
    </Router>
  );
}

export default App;