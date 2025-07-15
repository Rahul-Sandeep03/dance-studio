// src/App.jsx
import React, { useState, useEffect } from 'react';
import NavigationBar from './NavigationBar';
import Home from './Home';
import About from './About';
import Instructors from './Instructors';
import Gallery from './Gallery';
import RegistrationBanner from './RegistrationBanner'; // Your pop-up banner component
import Register from './Register';
import Footer from './Footer';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  const [showModalBanner, setShowModalBanner] = useState(false);

  useEffect(() => {
    
    const timer1 = setTimeout(() => {
      setShowModalBanner(true); 
    }, 12000); 

    
    const timer2 = setTimeout(() => {
      setShowModalBanner(true); 
    }, 42000); 

    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []); 
 
  const handleModalHide = () => {
    setShowModalBanner(false);
  };

  return (
    <>
      <NavigationBar />
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
}

export default App;