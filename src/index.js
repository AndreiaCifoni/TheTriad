import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

const root = createRoot(document.getElementById("root"));

root.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <App />
  </HashRouter>
);
