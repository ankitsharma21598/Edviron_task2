import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./global.css";

// Get the DOM container with the id "root"
const container = document.getElementById("root");

// Create a root for rendering React elements into the container
const root = createRoot(container);

// Render the main application within a BrowserRouter, which enables routing
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
