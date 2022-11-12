import React from "react";
import article from "../article.json";
import { useState } from "react";
import { Link } from "react-router-dom";
import ArticleItem from "./ArticleItem";
import "../Styles/ArticleItem.css";
import Pagenation from "./Pagenation";
import "../Styles/Article.css";
const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 5;
  // const [query, setQuery] = useState("");

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  let currentPosts = article.slice(firstPostIndex, lastPostIndex);
  return (
    <div>
      <div id="top-container">
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

      <div className="pagination">
        <Pagenation
          totalPosts={article.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>

      <div className="containershell">
        {currentPosts.map((item) => (
          <ArticleItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
