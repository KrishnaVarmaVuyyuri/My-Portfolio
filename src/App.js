import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Portfoilog from "./pages/Portfoiloge";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Portfoilog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
