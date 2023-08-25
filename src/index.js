import React from "react";
import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MoviesProvider } from "./context/movies_context";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <MoviesProvider>
    <App tab="home" />
  </MoviesProvider>
);
