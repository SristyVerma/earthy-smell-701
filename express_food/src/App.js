import "./App.css";
import Navbar from "./Components/Navbar";
import "./Styles/Navbar.css";
import "./Styles/Footer.css";

import { Route, Routes } from "react-router-dom";
import Articles from "./Components/Articles";
import AddRecipe from "./Components/AddRecipe";
import HotPicks from "./Components/HotPicks";
import Home from "./Components/Home";
import Help from "./Components/Help";
import MealDeals from "./Components/MealDeals";

import KindMoment from "./Components/KindMoment";
import SignUp from "./Components/SignUp";
import Contacts from "./Components/Contacts";
// import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";
import SignIn from "./Components/SignIn";
import AddEditBlog from "./Components/AddEditBlog";
import Blog from "./pages/Blog";
import "./Components/style.css";
import Meal from "./Components/Meal";
import Recipe from "./Components/Recipe";
import ZooVideo from "./Components/ZooVideo";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/articles" element={<Articles />}></Route>
        <Route exact path="/addrecipe" element={<AddRecipe />}></Route>
        <Route exact path="/addrecipe/:id" element={<AddRecipe />}></Route>
        <Route exact path="/help" element={<Help />}></Route>
        <Route exact path="/hotpicks" element={<HotPicks />}></Route>
        <Route exact path="/kindmoments" element={<KindMoment />}></Route>
        <Route exact path="/mealdeals" element={<MealDeals />}></Route>
        <Route exact path="/signup" element={<SignUp />}></Route>
        <Route exact path="/signin" element={<SignIn />}></Route>
        <Route exact path="/contacts" element={<Contacts />}></Route>
        <Route exact path="/addeditblog" element={<AddEditBlog />}></Route>
        <Route exact path="/blog/:id" element={<Blog />}></Route>
        <Route path="/meal" element={<Meal />} />
        <Route exact path="/:recipeId" element={<Recipe />} />
        <Route exact path="/articles/zoo" element={<ZooVideo />} />
        {/* <Route exact path="/about" element={<AboutUs />}></Route> */}
      </Routes>
      <div id="save-animal">
        <img
          src="https://www.kindmeal.my/images/banner_whykindmeal.png"
          alt="err"
        />
      </div>
      <Footer />
    </>
  );
};

export { App };
