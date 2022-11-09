import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "220px",
        }}
      >
        <img
          style={{ height: "100%" }}
          src="https://www.kindmeal.my/images/banner_whykindmeal.png"
          alt="abcd"
        />
      </div> */}

      <div id="footer">
        <div>
          <div>
            <div className="fot-head">General</div>
            <a href="/#">Home</a>
            <Link to="/signup">Sign Up</Link>
            <a href="/#">Businesses / Restaurateurs</a>
            <a href="/#">Advertising</a>
            <Link to="about">About KindMeal.my</Link>
            <Link to="/help">Help & FAQ</Link>
            <a href="/#">Terms & Conditions</a>
            <a href="/#">Inspiring Partners</a>
            <a href="/#">Lifestyle Ambassadors</a>
            <a href="/#">Jobs & Careers</a>
            <Link to="/contacts">Contact Us</Link>
          </div>
          <div>
            <div className="fot-head">Features</div>
            <Link to="/mealdeals">Meat-Free Deals</Link>
            <a href="/#">Tasty Menus</a>
            <Link to="/kindmoments">Kind Moments</Link>
            <a href="/#">Meat-Free Recipes</a>
            <Link to="/hotpicks">Member Recommendations</Link>
            <a href="/#">Featured Restaurants</a>
            <Link to="/directory">Vegetarian & Vegan Directory</Link>
            <a href="/#">Food Map</a>
            <a href="/#">Become A Superhero</a>
            <Link to="/articles">Vegan News & Vegetarian Articles</Link>
            <a href="/#">Latest Comments</a>
          </div>
          <div>
            <div className="fot-head">Social Media</div>
            <a href="/#">KindMeal Widget</a>
            <a href="https://www.facebook.com/KindMeal.my">Facebook</a>
            <a href="https://twitter.com/KindMeal">Twitter</a>
            <a href="https://www.instagram.com/KindMeal.my/">Instagram</a>
          </div>
          <div>
            <div className="fot-head">Mobile</div>
            <a href="/#">iPhone & iPod App</a>
            <a href="/#">Android App</a>
            <br />
            <div className="fot-head">Exciting Promos</div>
            <a href="/#">Gadhimai: Ending Mass Slaughter</a>
            <a href="/#">Free Meals</a>
            <a href="/#">Food Bloggers</a>
            <a href="/#">Uber CHIRP</a>
            <a href="/#">Jane Goodall Contest</a>
            <a href="/#">Win Digi iPhone 6</a>
            <a href="/#">Feed The Poor</a>
            <a href="/#">Win Superhero Gifts</a>
            <a href="/#">Win an iPad Mini 3</a>
          </div>
          <div>
            <div className="fot-head">PetFinder.my</div>
            <a href="/#">Adopt A Pet</a>
            <a href="/#">Smartphone Apps</a>
            <a href="/#">WAGazine</a>
            <a href="/#">Discussion Forum</a>
            <a href="/#">Medical Fund</a>
          </div>
        </div>
        <div id="fot-para">
          <p>Copyright © KindMeal.my, 2014 - 2022. All rights reserved.</p>
          <p>
            This website promotes compassionate, meat-free dining experience.
            Some food may contain eggs, dairy products or alcohol, please view
            individual listings for details.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
