import React, { useEffect } from "react";
import Home from "./pages/home";
import AllCars from "./pages/allCars";
import LogIn from "./pages/logIn";
import SignUp from "./pages/signUp";
import Profile from "./pages/profile";
import GetAllCars from "./pages/getAllCars";
import AddCar from "./pages/addCar";
import Warranty from "./pages/warranty";
import UpdateCar from "./pages/updateCar";
import Services from "./pages/services";
import Contact from "./pages/contact";
import About from "./pages/about";
import Settings from "./components/profile/settings";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import ViewCarDetails from "./components/viewCarDetails/viewCarDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/auth";
import ScrollToTop from "./ScrollToTop";
const App = () => {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.auth.role);
  useEffect(() => {
    if (
      localStorage.getItem("id") &&
      localStorage.getItem("token") &&
      localStorage.getItem("role")
    ) {
      dispatch(authActions.login());
      dispatch(authActions.changeRole(localStorage.getItem("role")));
    }
  }, []);
  return (
    <div>
      <ScrollToTop/>
      <Navbar />
      <div className="w-100 bg-black" style={{height: "6.3rem"}}> </div>
      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route path="/all-cars" element={<AllCars />} />
        <Route path="/profile" element={<Profile />}>
          {role === "admin"&&(
            <Route index element={<GetAllCars/>} />
          )}
          
          {role === "admin" && (
            
            <Route path="/profile/add-car" element={<AddCar />} />
          )}

          <Route path="/profile/settings" element={<Settings />} />
        </Route>
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/warranty" element={<Warranty />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/update-car/:id" element={<UpdateCar />} />
        <Route path="/view-car-details/:id" element={<ViewCarDetails />} />
      </Routes>
      <Footer />

    </div>
  );
};

export default App;
