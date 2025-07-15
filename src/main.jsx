import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Your global CSS if you have any
import 'bootstrap/dist/css/bootstrap.min.css'; // Crucial for Bootstrap styles
import '@fortawesome/fontawesome-free/css/all.min.css'; // For FontAwesome icons
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);