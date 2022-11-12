import React from "react";
import "../Styles/pagenation.css";
const Pagenation = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      {pages.map((page, index) => {
        return (
          <>
            <button
              onClick={() => setCurrentPage(page)}
              key={index}
              className={page === currentPage ? "active" : ""}
            >
              {page}
            </button>
          </>
        );
      })}
    </div>
  );
};

export default Pagenation;
