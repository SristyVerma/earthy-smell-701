import React from "react";
import { Link } from "react-router-dom";
import "../Styles/ZooVideo.css";
const ZooVideo = () => {
  return (
    <>
      <div id="top-containeraa">
        <div>
          <div>Yummy News, Articles & Videos</div>
          <p>
            Want to keep updated on the latest news of delicious meat-free meals
            and adorable animals? Check out this section for interesting daily
            happenings and articles that will melt your tummy (and heart too).
          </p>
          <br />
          <p>
            You can also follow our{" "}
            <Link to="https://www.facebook.com/KindMeal.my">Facebook Page</Link>{" "}
            or <Link to="https://twitter.com/KindMeal">Twitter</Link> for more
            news and updates.
          </p>
        </div>
      </div>
      <div id="containeraa">
        <div id="child1">
          <div id="video-box">
            <iframe
              title="Video"
              src="https://www.facebook.com/plugins/video.php?height=476&to=https%3A%2F%2Fwww.facebook.com%2Foregonzoo%2Fvideos%2F754723622277494%2F&show_text=false&width=476&t=0"
              width="476"
              height="426"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen="true"
            ></iframe>
          </div>

          <div id="fb-tw">
            <Link to="/#">
              <img
                src="https://www.kindmeal.my/images/share_facebook.png"
                alt="err"
              />
            </Link>
            <Link to="/#">
              <img
                src="https://www.kindmeal.my/images/share_twitter.png"
                alt="err"
              />
            </Link>
          </div>
          <div id="title-para">
            <div>Busy Beaver Delivers Lettuce To Zoo Friends</div>
            <p>by KindMeal.my, 21 August 2022</p>
            <p>Filbert the beaver encourages his friends to eat more vege!</p>

            <button onclick=" articlePage()">« Back To Articles</button>
          </div>
        </div>
        <div id=" child2">
          <h1>More Yummy Articles</h1>
          <div className="artcle-page">
            <img
              src="https://www.kindmeal.my/photos/moment/20/20135-34629-s.jpg"
              alt="err"
            />
            <div>A Delicious KindMoment</div>
            <p>OliviaBearBear</p>
          </div>
          <div className="artcle-page">
            <img
              src="https://www.kindmeal.my/photos/moment/24/24063-45910-s.jpg"
              alt="err"
            />
            <div>A Delicious KindMoment</div>
            <p>ChewLengLeng</p>
          </div>
          <div className="artcle-page">
            <img
              src="https://www.kindmeal.my/photos/moment/2/2567-2444-s.jpg"
              alt="err"
            />
            <div>A Delicious KindMoment</div>
            <p>JoeyLee</p>
          </div>
          <div className="artcle-page">
            <img
              src="https://www.kindmeal.my/photos/moment/19/19643-33491-s.jpg"
              alt="err"
            />
            <div>Dar Soo Vegetarian Cuisine</div>
            <p>FatJedi</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZooVideo;
