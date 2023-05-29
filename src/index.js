import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import ProplarimSayfam from "./contexts/Cart";
import "./index.css";
import Urunler from "./contexts/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProplarimSayfam>
    <Urunler>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Urunler>
  </ProplarimSayfam>
);
