import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./components/routes/AppRouter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

function App() {
  return (
    /* TODO: Sacar/cambiar el basename para deploy final */
    <Router basename="/cuenta_pruebas/neidashop">
      <Navbar />
      <main>
        <AppRouter />
      </main>
      <Footer />
      <WhatsAppButton />
    </Router>
  );
}

export default App;
