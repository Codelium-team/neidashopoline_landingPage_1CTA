import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Categories from "../pages/Categories";
import Store from "../pages/Store";
import Contact from "../pages/Contact";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/store" element={<Store />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRouter;
