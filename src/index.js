/**
 * Renders the main React application component to the DOM.
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

  /* 
  This code sets up the root React component and renders it to the DOM element with the ID 'root'.
  */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* 
    The App component is wrapped in the React.StrictMode component to enable additional runtime checks and warnings.
  */
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

  /* 
  The reportWebVitals function is called to report web performance metrics.
  */

reportWebVitals();
