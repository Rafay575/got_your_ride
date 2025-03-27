import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import HomeNavbar from "./components/HomeNavbar";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Booking from "./pages/Booking";
import NavbarNotForHome from "./components/NavbarNotForHome";
import Footer from "./components/Footer";
const App = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/" ? <HomeNavbar /> : <NavbarNotForHome />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
