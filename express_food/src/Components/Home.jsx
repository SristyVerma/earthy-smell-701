import React from "react";
import "../Styles/Home.css";
import "../Styles/modal.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="modal">
        <div className="cutButton">✕</div>
        <img src="https://www.kindmeal.my/images/logo-kindmeal.png" alt="/#" />
        <h3>Join KindMeal For FREE Now</h3>
        <p
          style={{ fontSize: "14px", marginTop: "10px", marginBottom: "40px" }}
        >
          Please select the type of membership to proceed
        </p>
        <div className="foodLover modalChild">
          <img
            className="img_1"
            src="https://www.kindmeal.my/images/join_normal.png"
            alt="/#"
          />
          <div className="desc">
            <h3>Food Lover</h3>
            <p>
              Join FREE to enjoy yummy deals, share reviews & meet our community
              of compassionate food lovers.
            </p>
          </div>
        </div>
        <div className="shopOwner modalChild">
          <img
            className="img_1"
            src="https://www.kindmeal.my/images/join_shop.png"
            alt="/#"
          />
          <div className="desc">
            <h3>Restaurant / Shop Owner</h3>
            <p>
              List your food outlet, create exciting vegetarian deals & showcase
              your delicious menu for FREE. Enjoy our yummy deals, share reviews
              & meet food lovers too.
            </p>
          </div>
        </div>
        <div className="bottomText">
          <Link to="#">Member Login</Link>
          <Link to="#">Forgot Password ?</Link>
        </div>
      </div>
      <div className="modalLogin">
        <div className="cutButton2">✕</div>
        <img src="https://www.kindmeal.my/images/logo-kindmeal.png" alt="/#" />
        <p style={{ fontSize: "22px" }}>Member Login</p>
        <div className="loginInput">
          <input type="email" id="login_email" placeholder="Your Email" />
          <input
            type="password"
            id="login_password"
            placeholder="Your Password"
          />
          <button id="sumbit_login">Login</button>
        </div>
        <hr />
        <div className="loginWithFb">
          <button>
            <img
              src="https://www.kindmeal.my/images/icon_button_fb.png"
              alt="/#"
            />
            Login With Facebook
          </button>
        </div>
        <div className="bottomText">
          <Link to="#">Forgot Password ?</Link>
          <Link to="#">Not a member? Sign up FREE!</Link>
        </div>
      </div>
      <div id="container1">
        <div className="image-animation">
          {/* <img
            className="mySlides"
            src="https://i.ibb.co/zNgXf2v/Screenshot-2022-08-23-at-6-03-08-PM.png"
            alt="err"
            style={{ width: "100%" }}
          /> */}
          {/* <img
            className="mySlides1"
            src="https://i.ibb.co/LgTWnwf/Screenshot-2022-08-23-at-6-03-20-PM.png"
            alt="err"
            style={{ width: "100%" }}
          />
          <img
            className="mySlides"
            src="https://i.ibb.co/8r0K76G/Screenshot-2022-08-23-at-6-03-35-PM.png"
            alt="err"
            style={{ width: "100%" }}
          />
          <img
            className="mySlides"
            src="https://i.ibb.co/266C9FY/Screenshot-2022-08-23-at-6-03-46-PM.png"
            alt="err"
            style={{ width: "100%" }}
          /> */}
        </div>
        <div id="con1-child" style={{ opacity: "0.7" }}>
          <Link to="#">
            <img
              src="https://www.kindmeal.my/photos/deal/6/682-4370-m.jpg"
              alt="/#"
            />
          </Link>
          <Link to="#">
            <img
              src="https://www.kindmeal.my/photos/deal/6/649-3919-m.jpg"
              alt="/#"
            />
          </Link>
          <Link to="#">
            <img
              src="https://www.kindmeal.my/photos/deal/5/518-3788-m.jpg"
              alt="/#"
            />
          </Link>
          <Link to="#">
            <img
              src="https://www.kindmeal.my/photos/deal/6/634-3683-m.jpg"
              alt="/#"
            />
          </Link>
          <Link to="#">
            <img
              src="https://www.kindmeal.my/photos/deal/5/590-3137-m.jpg"
              alt="/#"
            />
          </Link>
          <Link to="#">
            <img
              src="https://www.kindmeal.my/photos/deal/6/621-3576-m.jpg"
              alt="/#"
            />
          </Link>
          <Link to="#">
            <img
              src="https://www.kindmeal.my/photos/deal/7/700-4802-m.jpg"
              alt="/#"
            />
          </Link>
        </div>
      </div>

      <div className="container2">
        <div className="header-box" style={{ gap: "30px" }}>
          <div className="header2" style={{ marginRight: "37px" }}>
            <Link to="/#">Latest News & Videos</Link>
          </div>
          <div className="header">
            <Link to="/#">Save Lives with Your Blog </Link>
          </div>
          <div className="header">
            <Link to="/articles">News & Articles </Link>
          </div>
          <div className="header">
            <Link to="https://www.facebook.com/KindMeal.my">
              Follow Our Facebook
            </Link>
          </div>
        </div>
        <div className="image-box">
          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/article/20/20044-l.jpg"
              alt="/#"
            />
            <p>Spicy Sweet Potato Hash Browns</p>
          </Link>

          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/article/20/20034-l.jpg"
              alt="/#"
            />
            <p>Busy Beaver Delivers Lettuce To Zoo Friends</p>
          </Link>

          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/article/20/20032-l.jpg"
              alt="/#"
            />
            <p>Teaching My Pet Pig To Talk 🐷</p>
          </Link>

          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/article/20/20029-l.jpg"
              alt="/#"
            />
            <p>Hatching Animals 🐣</p>
          </Link>

          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/article/20/20023-l.jpg"
              alt="/#"
            />
            <p>Rescued Cow Asks For More Scratches</p>
          </Link>
        </div>
      </div>
      <div className="container2">
        <div className="header-box" style={{ gap: "40px" }}>
          <div className="header2" style={{ marginRight: "45px" }}>
            <Link to="/#">Yummylicious Moments</Link>
          </div>
          <div className="header">
            <Link to="/#">Secret Recipes </Link>
          </div>
          <div className="header">
            <Link to="/hotpicks"> Member Hot Picks </Link>
          </div>
          <div className="header">
            <Link to="/kindmoments">Photo Moments</Link>
          </div>
        </div>
        <div className="image-box">
          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/deal/7/707-4819-s.jpg"
              alt="/#"
            />
            <p>Creamy Hasselback Potatoes</p>
          </Link>

          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/moment/24/24309-46678-s.jpg"
              alt="/#"
            />
            <p>jolenesaw</p>
          </Link>

          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/moment/24/24307-46677-s.jpg"
              alt="/#"
            />
            <p>karenkhong</p>
          </Link>

          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/deal/7/717-5054-s.jpg"
              alt="/#"
            />
            <p>munhaoyoong</p>
          </Link>

          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/moment/24/24305-46676-s.jpg"
              alt="/#"
            />
            <p>FatJedi</p>
          </Link>
        </div>
      </div>

      <div className="container2">
        <div className="header-box" style={{ gap: "45px" }}>
          <div className="header2" style={{ marginRight: "40px" }}>
            <Link to="/#">Discover Restaurants</Link>
          </div>
          <div className="header">
            <Link to="/directory">Vegetarian Directory</Link>
          </div>
          <div className="header">
            <Link to="/#"> Restaurant Menu </Link>
          </div>
          <div className="header">
            <Link to="/#"> Food Map</Link>
          </div>
        </div>
        <div className="image-box">
          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/item/0/572-8074-s.jpg"
              alt="/#"
            />
            <p>Eggs on Toast - Single</p>
          </Link>

          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/item/0/244-2423-s.jpg"
              alt="/#"
            />
            <p>Cherry Box</p>
          </Link>

          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/item/0/545-7429-s.jpg"
              alt="/#"
            />
            <p>Kyoto Pork Ribs Ramen</p>
          </Link>

          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/item/0/292-3016-s.jpg"
              alt="/#"
            />
            <p>BOOSTER - carrot, beetroot and orange</p>
          </Link>

          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/item/0/603-9052-s.jpg"
              alt="/#"
            />
            <p>Bak Kut Teh</p>
          </Link>
        </div>
      </div>
      <div className="container2">
        <div className="header-box" style={{ gap: "45px" }}>
          <div className="header2" style={{ marginRight: "40px" }}>
            <Link to="/#">Amazing Superheroes</Link>
          </div>
          <div className="header">
            <Link to="/#">Latest Buzz </Link>
          </div>
          <div className="header">
            <Link to="/#"> Lifestyle Ambassadors </Link>
          </div>
          <div className="header">
            <Link to="/#"> Win Gifts!</Link>
          </div>
        </div>
        <div className="image-box">
          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/member/37/37179-m.jpg"
              alt="/#"
            />
            <p>SooYeeLim</p>
          </Link>

          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/member/16/16140-m.jpg"
              alt="/#"
            />
            <p>KenixKua</p>
          </Link>

          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/member/41/41028-m.jpg"
              alt="/#"
            />
            <p>MichelleTan</p>
          </Link>

          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/member/37/37767-m.jpg"
              alt="/#"
            />
            <p>KooTY</p>
          </Link>

          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/member/28/28045-m.jpg"
              alt="/#"
            />
            <p>MandyHew</p>
          </Link>
        </div>
      </div>
      <div id="container3">
        <div>Introducing The World's 1st Meat-Free Lifestyle Platform</div>
        <div id="con3-img">
          <div>Brought to you by</div>
          <img
            src="https://www.kindmeal.my/images/logo-petfinder.png"
            alt="/#"
          />
        </div>
        <div>
          Instant coupon & dining. No upfront coupon payment, booking or
          printing.
        </div>
        <div id="container4">
          <div>
            <img src="https://www.kindmeal.my/images/intro_deal.png" alt="/#" />
            <h3>Get Great Deals</h3>
            <p>
              Show our FREE digital coupons to instantly enjoy exciting deals
            </p>
          </div>
          <div>
            <img
              src="https://www.kindmeal.my/images/intro_kindmoment.png"
              alt="/#"
            />
            <h3>Share KindMoments</h3>
            <p>Spread the joy by sharing your yummy dining moments</p>
          </div>
          <div>
            <img src="https://www.kindmeal.my/images/intro_menu.png" alt="/#" />
            <h3>Discover Delicious Food</h3>
            <p>Explore the latest exquisite offerings and creative menus</p>
          </div>
          <div>
            <img
              src="https://www.kindmeal.my/images/intro_friends.png"
              alt="/#"
            />
            <h3>Meet Food Lovers</h3>
            <p>Make new, compassionate friends and share great food tips</p>
          </div>
        </div>
        <p id="con4-para">
          Any restaurant or cafe can join KindMeal, vegetarian or not, as long
          as the deals and menu featured are meat-free. Enjoy a great meat-free
          dining experience. Easily save animal lives, health, environment and
          money now!
        </p>

        <div id="red-btn">
          <h1>
            <Link to="/signup">Join KindMeal Now</Link>
          </h1>
          <p>Your tasty journey begins here</p>
        </div>
        <div id="As-featured">As Featured In</div>
        <div id="last-image">
          <img
            width="100%"
            src="https://www.kindmeal.my/images/media-feature2.png"
            alt="/#"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
