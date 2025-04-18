import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import HomeNavbar from "./components/HomeNavbar";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Main from "./pages/Main";
import NavbarNotForHome from "./components/NavbarNotForHome";
import ScrollToTop  from "./components/ScrollToTop";
import Footer from "./components/Footer";
import PaymentPage from "./pages/PaymentPage";
import CartPage from "./pages/CartPage";


const App = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/" ? <HomeNavbar /> : <NavbarNotForHome />}
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/booking/:placeId" element={<Main />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
