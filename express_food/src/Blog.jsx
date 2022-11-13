import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Badge from "./Components/Badge";
import { useEffect } from "react";
const Blog = () => {
  const [blog, setBlog] = useState();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleBlog();
    }
  }, [id]);

  const getSingleBlog = async () => {
    const response = await axios.post(`http://localhost:5000/blogs/${id}`);
    if (response.status === 200) {
      setBlog(response.data);
    } else {
      ("Something went wrong");
    }
  };
  const styleInfo = {
    display: "inline",
  };
  return (
    <>
      <div>
        <Link to="/">
          <b>Go Back</b>
        </Link>
      </div>
      <diV>{blog && blog.title}</diV>
    </>
  );
};

export default Blog;
