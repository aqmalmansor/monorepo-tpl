import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import { Navbar } from "@components/common";
import { AboutPage, HomePage } from "@pages";

import "../styles.css";

const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("Root element not found");

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage title="Home Page" />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
