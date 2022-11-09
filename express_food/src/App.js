import "./App.css";
import Navbar from "./Components/Navbar";
import "./Styles/Navbar.css";
import "./Styles/Footer.css";

import { Route, Routes } from "react-router-dom";
import Articles from "./Components/Articles";
import Directory from "./Components/Directory";
import HotPicks from "./Components/HotPicks";
import Home from "./Components/Home";
import Help from "./Components/Help";
import MealDeals from "./Components/MealDeals";

import KindMoment from "./Components/KindMoment";
import SignUp from "./Components/SignUp";
import Contacts from "./Components/Contacts";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/articles" element={<Articles />}></Route>
        <Route exact path="/directory" element={<Directory />}></Route>
        <Route exact path="/help" element={<Help />}></Route>
        <Route exact path="/hotpicks" element={<HotPicks />}></Route>
        <Route exact path="/kindmoments" element={<KindMoment />}></Route>
        <Route exact path="/mealdeals" element={<MealDeals />}></Route>
        <Route exact path="/signup" element={<SignUp />}></Route>
        <Route exact path="/contacts" element={<Contacts />}></Route>
        <Route exact path="/about" element={<AboutUs />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export { App };
