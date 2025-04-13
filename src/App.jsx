import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Optional, but usually paired
import '@fortawesome/fontawesome-free/css/all.min.css';

import NavigationBar from './NavigationBar.jsx';
import Home from './Home';
import About from './About';
import Instructors from './Instructors';
import Gallery from './Gallery';
import Register from './Register';
import Footer from './Footer';

function App() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min');
  }, []);

  return (
    <div>
      <NavigationBar />
      <Home />
      <Instructors />
      <Gallery />     
      <Register />
      <About />
      <Footer />
      
    </div>
  );
}

export default App;
