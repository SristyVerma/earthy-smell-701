import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div id="nav-1">
        <div id="nav1-child-1">
          <img src="https://www.kindmeal.my/images/logo-kindmeal.png" alt="" />
        </div>
        <div
          id="nav1-child-2"
          style={{ display: "flex", flesDirection: "row", marginTop: "20px" }}
        >
          <Link to="">
            <img
              src="https://www.kindmeal.my/images/follow_blog_grey.png"
              alt=""
            />
          </Link>
          <Link to="https://www.facebook.com/KindMeal.my">
            <img
              src="https://www.kindmeal.my/images/follow_facebook_grey.png"
              alt=""
            />
          </Link>
          <Link to="https://twitter.com/KindMeal">
            <img
              src="https://www.kindmeal.my/images/follow_twitter_grey.png"
              alt=""
            />
          </Link>
        </div>
        <div id="nav1-child-3">
          <p>Login</p>
          <h4 id="facebook">
            <a href="https://www.facebook.com/v2.9/dialog/oauth?client_id=292733157519852&redirect_uri=https%3A%2F%2Fwww.kindmeal.my%2Flogin.php%3Faction%3Dfacebook&state=de4724f7b2529a9874245150d1ee3df9&display=popup&scope=email,user_birthday,user_location">
              Facebook
            </a>
          </h4>
          <h4 id="email">Email</h4>
          <Link to="/signup" id="signup">
            Sign Up
          </Link>
        </div>
      </div>
      <div id="nav-2">
        <div>
          <Link to="/">Home</Link>
          <Link to="/mealdeals">Meal Deals</Link>
          <Link to="/kindmoments">KindMoments</Link>
          <Link to="/hotpicks">Hot Picks</Link>
          <Link to="/addrecipe">Add Recipe</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/help">Help</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
