import axios from "axios";
import React, { useState, useEffect } from "react";
import Blog from "../pages/Blog";

import "../Styles/Hotpick.css";
const HotPicks = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    loadBlogData();
  }, []);

  const loadBlogData = async () => {
    const response = await axios.get("http://localhost:5000/blogs");
    if (response.status === 200) {
      setData(response.data);
    } else {
      alert("Something went Wrong");
    }
  };
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      const response = await axios.delete(`http://localhost:5000/blogs/${id}`);
      if (response.status === 200) {
        alert("Blog deleted successfully");
        loadBlogData();
      } else {
        alert("Something went Wrong!!!Please Try Again");
      }
    }
  };

  const excerpt = (str) => {
    if (str.length >= 150) {
      str = str.substring(0, 50) + " ";
    }
    return str;
  };
  console.log(data);
  return (
    <>
      <div>
        {data.length === 0 && <h1 className="headinga">No Blog Found</h1>}
        <div className="diva">
          {data &&
            data.map((item, index) => (
              <Blog
                key={index}
                {...item}
                excerpt={excerpt}
                handleDelete={handleDelete}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default HotPicks;
