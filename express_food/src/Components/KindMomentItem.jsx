// import React, { useState } from "react";
import React from "react";
import "../Styles/KindMomentItem.css";

const KindMomentItem = ({
  thumb,
  id,
  name,
  date,
  love_count,
  can_count,
  logo_sms,
  lsms_count,
  desc,
  desc_more,
  img,
  bottom_logo,
  logo_title,
  logo_disc,
}) => {
  return (
    <div>
      <div className="main-container">
        <div className="first-div">
          <img src={thumb} alt="err" />
          <div className="para">
            <p>{name}</p>
            <p>{date}</p>
          </div>
          <button className="red-btn">View</button>
        </div>

        <div className="second-div">
          <img src={img} alt="err" />
        </div>

        <div className="third-div">
          <img
            src="https://www.kindmeal.my/images/icon_heart_darkgrey.svg"
            alt="err"
          />
          <p>{love_count}</p>
          <img
            src="https://www.kindmeal.my/images/icon_heart_darkgrey.svg"
            alt="err"
          />
          <p>{lsms_count}</p>
        </div>

        <div className="fouth-div">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default KindMomentItem;
