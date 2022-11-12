import React from "react";

const ArticleItem = ({ id, image, title, author, desc, date }) => {
  return (
    <>
      <div className="mainContainer">
        <div className="firstDiv">
          <img class="firstimage" src={image} alt="/#" />
        </div>

        <div class="secondDiv">
          <h2>{title}</h2>
          <p>{author}</p>
          <p class="bigpara">{desc}</p>
        </div>
        <div class="thirdDiv">
          <button class="redbut">View Video</button>
          <h4>{date}</h4>
        </div>
      </div>
    </>
  );
};

export default ArticleItem;
