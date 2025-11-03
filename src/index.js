// -------------------------------------
// 🚀 Application Entry Point (index.js)
// -------------------------------------
// This file initializes the React application and renders the root App component.
// It uses React 18's createRoot API for better concurrent rendering support.

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Create a root container for React to render into
// This targets the 'root' div element in public/index.html
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component wrapped in StrictMode
// StrictMode helps identify potential problems by:
// - Identifying components with unsafe lifecycles
// - Warning about legacy string ref API usage
// - Detecting unexpected side effects
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
