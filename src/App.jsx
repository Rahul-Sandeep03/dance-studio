// src/App.jsx
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

// Main page components
import NavigationBar from './NavigationBar';
import Home from './Home';
import About from './About';
import Instructors from './Instructors';
import Gallery from './Gallery'; // Limited gallery view on home page
import RegistrationBanner from './RegistrationBanner';
import Register from './Register';
import Footer from './Footer';

// Full Gallery page component
import FullGallery from './FullGallery';

import 'bootstrap/dist/css/bootstrap.min.css';

// HomePage holds all main sections
const HomePage = ({ showModalBanner, handleModalHide }) => {
  return (
    <>
      <main>
        <Home />
        <Gallery /> 
        <About />
        <Instructors />
        <Register />
      </main>
      <Footer />
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
    const timer1 = setTimeout(() => setShowModalBanner(true), 12000);
    const timer2 = setTimeout(() => setShowModalBanner(true), 42000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleModalHide = () => setShowModalBanner(false);

  return (
    <Router>
      <NavigationBar />
      <Routes>
        {/* Main home page */}
        <Route 
          path="/" 
          element={
            <HomePage 
              showModalBanner={showModalBanner} 
              handleModalHide={handleModalHide} 
            />
          } 
        />
        {/* Full gallery page */}
        <Route path="/gallery" element={<FullGallery />} />
      </Routes>
    </Router>
  );
}

export default App;
