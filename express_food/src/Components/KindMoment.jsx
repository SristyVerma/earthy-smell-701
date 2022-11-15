import React from "react";
import data from "../data.json";
import { useState } from "react";
import KindMomentItem from "./KindMomentItem";
import "../Styles/KindMomentItem.css";
import Pagenation from "./Pagenation";
import "../Styles/KindMoment.css";
import { Link } from "react-router-dom";

const KindMoment = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 9;
  // const [query, setQuery] = useState("");

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  let currentPosts = data.slice(firstPostIndex, lastPostIndex);

  // const handleChange = (e) => {
  //   setQuery(e.target.value);
  // };

  // const handleSubmit = (currentPosts) => {
  //   currentPosts = currentPosts.filter((el) => el.name === query);
  // };
  return (
    <>
      {/* <input placeholder="Search" onChange={handleChange} type="text" />
      <button onClick={handleSubmit}>Submit</button> */}
      <div id="top">
        <div>
          <div id="top_append">
            <div></div>
            <div id="fst">KindMoments</div>
            <div id="snd">| Saving Lives with Yummy Photos</div>
          </div>
          <div className="top_down">
            Discover new, delicious meat-free cuisines enjoyed by other
            compassionate food lovers. Share your interesting KindMoments, and
            build your own fans and followers to encourage kind, healthy meals.
            <br />
            <br />
            Download our{" "}
            <a
              href="https://www.kindmeal.my/mobile.htm"
              style={{ color: "blue" }}
            >
              mobile app
            </a>{" "}
            to easily showcase your masterpieces and interact with food lovers.
            <br />
            <br />
            Get started sharing your tasty moments now.
          </div>
        </div>
        <div
          className="box"
          style={{
            padding: "10px",
            bordeRadius: "10px",
            boxShadow: "0px 0px 6px #e0e0e0",
            textAlign: "center",
            backgroundColor: "#ffffff",
          }}
        >
          <center>
            <div
              style={{
                fontSize: "20px",
                lineHeight: "24px",
                marginBottom: "5px",
                color: "#444444",
              }}
            >
              Share Your KindMoment
            </div>
            Interesting food or restaurant? Share with 1000s of food lovers!
            <br />
            <div className="button_red" style={{ marginTop: "20px" }}>
              <Link to="/addrecipe">Share</Link>
            </div>
          </center>
        </div>
      </div>

      <div id="filter">
        <div>
          <button id="A" onclick="changegreen">
            Moments
          </button>
          <button onclick="changegreen">Deal Reviews</button>
          <button onclick="changegreen">Following</button>
        </div>
        <div>
          <input
            type="text"
            id="filter_search"
            style={{ width: "200px" }}
            value=""
            placeholder="Search User or Shop"
          />
          <select id="filter_option" style={{ height: "39px", width: "180px" }}>
            <option value="0">All Locations</option>
            <option value="">Klang Valley</option>
            <option value="60"> Kuala Lumpur</option>
            <option value="42"> Petaling Jaya</option>
            <option value="20"> Ampang</option>
            <option value="22"> Bangsar</option>
            <option value="23"> Bangsar South</option>
            <option value="24"> Bukit Bintang</option>
            <option value="26"> Bukit Damansara</option>
            <option value="27"> Cheras</option>
            <option value="29"> Damansara Heights</option>
            <option value="31"> Damansara Utama</option>
            <option value="62"> Ipoh</option>
            <option value="34"> Kepong</option>
            <option value="35"> Klang</option>
            <option value="37"> Kota Damansara</option>
            <option value="39"> Mont Kiara</option>
            <option value="41"> Old Klang Road</option>
            <option value="44"> Puchong</option>
            <option value="50"> Seri Kembangan</option>
            <option value="52"> Shah Alam</option>
            <option value="54"> Sri Petaling</option>
            <option value="55"> Subang</option>
            <option value="56"> Taman Desa</option>
            <option value="58"> Taman Tun</option>
          </select>
          <button className="sear">Search</button>
        </div>
      </div>
      <div className="pagination">
        <Pagenation
          totalPosts={data.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>

      <div id="container">
        <div className="kindmoment">
          {currentPosts.map((item) => (
            <KindMomentItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default KindMoment;
