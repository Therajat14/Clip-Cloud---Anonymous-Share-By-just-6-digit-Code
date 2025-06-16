import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import Share from "./Pages/Share";
import Receive from "./Pages/Receive";
import NotFound from "./Pages/NotFound";
import PrivacyTerms from "./Pages/PrivacyTerms";
import AppInitializer from "./components/AppInitializer";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppInitializer />

    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/share" element={<Share />} />
        <Route path="/receive" element={<Receive />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/privacy&terms" element={<PrivacyTerms />} />
      </Routes>
    </BrowserRouter> */}
  </React.StrictMode>,
);
