import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./components/routes/AppRouter";
import Navbar from "./components/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <Router>
      <Navbar />

      <AppRouter />
    </Router>
  );
}

export default App;
