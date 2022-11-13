import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Hotpick.css";
import Badge from "../Components/Badge";

const Blog = ({
  title,
  category,
  description,
  id,
  imageUrl,
  excerpt,
  handleDelete,
}) => {
  return (
    <>
      <div className="diving">
        <img src={imageUrl} width="450px" height="500px" alt={title} />
        <h1>{title}</h1>
        <p className="descriptiona">
          {excerpt(description)}{" "}
          <Link to={`/ ablog${id}`}>
            <span className="spana">Read More</span>
          </Link>
        </p>
        <Badge className="badgea">{category}</Badge>

        <div className="edita">
          <button onClick={() => handleDelete(id)}>Delete</button>
          <Link to={`/addrecipe/${id}`}>
            <button>Edit</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Blog;
