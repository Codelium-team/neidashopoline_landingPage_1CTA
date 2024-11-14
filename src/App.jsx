import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./components/routes/AppRouter";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />

      <AppRouter />
      <Footer />
    </Router>
  );
}

export default App;
