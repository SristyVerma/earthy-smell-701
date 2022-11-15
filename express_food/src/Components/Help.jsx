import React from "react";
import "../Styles/Help.css";
import "../Styles/modal.css";
import { Link } from "react-router-dom";
const Help = () => {
  return (
    <>
      <div id="container">
        <div id="child-1">
          <Link to="/help">
            <div className="child-1-inner">
              <img
                src="https://www.kindmeal.my/images/join_normal.png"
                alt="/#"
              />
              General Help
            </div>
          </Link>
          <div className="child-1-inner">
            <img src="https://www.kindmeal.my/images/join_shop.png" alt="/#" />
            <a href="/#">Merchant Help</a>
          </div>
          <div className="child-1-inner">
            <img
              src="https://www.kindmeal.my/images/icon-megaphone.png"
              alt="/#"
            />
            <a href="/#">Advertising</a>
          </div>
          <div className="child-1-inner">
            <img src="https://www.kindmeal.my/images/about_us.png" alt="/#" />
            <Link to="/about">About KindMeal</Link>
          </div>
          <div className="child-1-inner">
            <img src="https://www.kindmeal.my/images/about_hero.png" alt="/#" />
            <a href="/#">SuperHero Guide</a>
          </div>
          <div className="child-1-inner">
            <img src="https://www.kindmeal.my/images/contact.png" alt="/#" />
            <Link to="contacts">Contact Us</Link>
          </div>
        </div>
        <div id="child-2">
          <div id="child-2-inner-1">
            <div id="child-2-inner-1-heading">General Help</div>
            <div className="child-2-inner-2-para">
              Wish to find out more on how to use KindMeal? Please check out our
              frequently-asked questions below. If you are unable to find your
              answer here, please <a href="contactUs.html">contact us</a>
              for further assistance.
            </div>
          </div>
          <div id="child-2-inner-2">
            <div className="child-2-inner-2-header">What is KindMeal?</div>
            <div className="child-2-inner-2-para ">
              KindMeal is Malaysia's (and possibly the world's!) pioneering
              meat-free lifestyle platform. We provide an effective platform to
              promote compassionate dining in a fun and effective way, that
              would allow you to save precious animal lives, improve your
              health, enjoy a cleaner environment and of course, save your
              hard-earned money.
            </div>
            <br />

            <div className="child-2-inner-2-header">What is Meat-Free?</div>
            <div className="child-2-inner-2-para ">
              Meat-free means that the food does not contain any meat, or
              ingredients derived from meat. However, it may contain some
              elements that people of certain diet do not consume, such as eggs,
              dairy / milk, or alcohol. Please refer to the details within each
              specific shop / deal for further information.
            </div>
            <br />
            <div className="child-2-inner-2-header">
              How do I sign up to KindMeal? Is it free?
            </div>
            <div className="child-2-inner-2-para ">
              Yes, it is absolutely free. To join our community of food lovers
              and grab awesome deals, please{" "}
              <a href="join.html">sign up here.</a>
            </div>
            <div className="child-2-inner-2-para ">
              If you are a merchant that wish to promote your business for FREE,
              please proceed to our <a href="join.html">sign up here.</a>
            </div>
            <br />

            <div className="child-2-inner-2-header">What is a Username?</div>
            <div className="child-2-inner-2-para ">
              A Username is a nickname exclusively used to identify your
              profile. It will be used to access your Public Page, such as{" "}
              <a href="/#">https://KindMeal.my/MyUsername</a>, and it will also
              be displayed when you share KindMoments, comments and reviews.
            </div>
            <br />
            <div className="child-2-inner-2-header">
              How do KindMeal deals work?
            </div>
            <div className="child-2-inner-2-para ">
              Restaurants create attractive deals within KindMeal, which you can
              obtain coupons for. Our coupons differ from other conventional
              deal sites in that you <b>do not need</b> to make any upfront
              payment at KindMeal, and you can easily present our LiveCoupon via
              computer, mobile or laptop without any print coupons. For
              restaurants that do not require advance reservations, you can even
              use the LiveCoupon immediately! After all, eating is an impulsive
              decision, right?
            </div>
            <br />
            <div className="child-2-inner-2-header">
              How do I get a KindMeal coupon?
            </div>
            <div className="child-2-inner-2-para ">
              Just browse to a deal you like, select the corresponding outlet
              location (if the restaurant has multiple locations), then click on
              Get Coupon. Please note that the outlet location{" "}
              <b>cannot be changed</b> after the coupon is obtained.
            </div>
            <div className="child-2-inner-2-para ">
              Each member is limited to 5 active coupons only. You must use the
              coupons before you can obtain additional ones. Unused coupons will
              automatically expire upon reaching its due date.
            </div>
            <br />
            <div className="child-2-inner-2-header">What is KindWords?</div>
            <div className="child-2-inner-2-para ">
              KindWords is a great way to tell your friends about the great food
              and instantly get more discount.
            </div>
            <div className="child-2-inner-2-para ">
              For deals with KindWords enabled, you can enjoy DOUBLE the
              discount if you share the deal on Facebook or Twitter. Once you
              successfully share it, you will immediately receive the exclusive
              discount for your deal. If you prefer not to take advantage of
              KindWords, you can still proceed to get the deal at the normal
              discount price. Please note that not all deals support KindWords -
              it depends on the merchant.
            </div>
            <br />
            <div className="child-2-inner-2-header">
              How do I use my KindMeal LiveCoupon?
            </div>
            <div className="child-2-inner-2-para ">
              Once a coupon is received, you can access the LiveCoupon and use
              it via one of the following ways. An Internet connection is
              required.
            </div>
            <div className="child-2-inner-2-para ">
              ➊ At KindMeal website, under Account : <a href="/#">My Coupons</a>
              section <br /> ➋With our KindMeal mobile app, under Deals : My
              Coupons section
            </div>
            <div className="child-2-inner-2-para ">
              You should only activate the LiveCoupon when you are at the
              restaurant, and upon informing the merchant. Some merchants may
              require that you activate it during the ordering process, while
              some will be during the payment process. Please inform the
              merchant first when you are ordering to ensure they are aware of
              your KindMeal LiveCoupon.
            </div>
            <div className="child-2-inner-2-para ">
              Once an active LiveCoupon is loaded, you will see a timer counting
              down the time remaining to use it. To activate it, click on Use
              LiveCoupon. Please ensure that you only activate it upon the
              request of the merchant.{" "}
              <b>Activating it ahead of time may void your coupon and deal</b>.
            </div>

            <br />
            <div className="child-2-inner-2-header">
              What if I don't have a mobile device or Internet connection, can I
              use a Print Coupon?
            </div>
            <div className="child-2-inner-2-para ">
              This depends on the specific deal. If the merchant allows it, you
              can also choose to print out the coupon and bring it along. Please
              refer to the deal's Terms & Conditions to check if print coupons
              are allowed, and if any prior reservation and usage delay are
              required.
            </div>
            <div className="child-2-inner-2-para ">
              To print your coupon, first access it via KindMeal website at the
              Account : <a href="/#">My Coupons</a> section, then click on Print
              Coupon at the corresponding coupon. If the Print Coupon button is
              not available, it means that only LiveCoupons are accepted for the
              deal.
            </div>
            <br />
            <div className="child-2-inner-2-header">
              What is a Print Coupon's Usage Delay?
            </div>
            <div className="child-2-inner-2-para ">
              You need to first sign up a <a href="/#">merchant account</a>. If
              you have an existing food lover account, we can upgrade it for you
              to enable the Merchant functions. To do so, please
              <a href="/#">contact us</a> and tell us more about your shop.
            </div>
            <div className="child-2-inner-2-para ">
              Once your merchant account is activated, you can find out more
              details at the <a href="/#">Merchant Help</a> section.
            </div>
            <br />
            <div className="child-2-inner-2-header">
              Do I need to make any payments to get the deal coupons?
            </div>
            <div className="child-2-inner-2-para ">
              No, absolutely no payment is required at KindMeal to obtain your
              coupon. You will only need to make payment at the restaurant when
              you use the coupon to purchase your food.
            </div>
            <br />
            <div className="child-2-inner-2-header">What is a KindMoment?</div>
            <div className="child-2-inner-2-para ">
              A KindMoment is a food selfie, a photo moment of your delicious
              food for sharing with the world, and to encourage meat-free
              dining. Sharing a KindMoment is extremely quick and easy, similar
              to other social photo sharing websites or mobile apps.
            </div>
            <div className="child-2-inner-2-para ">
              If you link your KindMeal account with Facebook, you can also
              automatically publish your latest KindMoments there. On top of
              that, you can also manually share on Facebook and Twitter.
            </div>
            <div className="child-2-inner-2-para ">
              The public can like and comment on your KindMoments, and you can
              also edit the KindMoment after publication.
            </div>
            <br />
            <div className="child-2-inner-2-header">What is Food Menu?</div>
            <div className="child-2-inner-2-para ">
              Restaurants can additionally showcase meat-free dishes and menu
              items. These items are different from deals, and there may not be
              offers available for them. You can discover interesting new food
              through our menu listings, and browse the corresponding
              restaurants for more information. To search for specific types of
              food or restaurants, go to the search section at the bottom of the
              page. You can click on a menu item to launch the gallery, where
              you will have a quick view of the corresponding shop's details.
              Click into a specific
            </div>
            <br />
            <div className="child-2-inner-2-header">
              What are Superhero Rankings?
            </div>
            <div className="child-2-inner-2-para ">
              Superheroes save lives. So can you. By trying out meat-free meals,
              sharing delicious moments and encouraging friends to do so, you
              can earn yourself cool Superhero ranks on KindMeal and win awesome
              prizes! Check out the Superhero Guide for more information.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
