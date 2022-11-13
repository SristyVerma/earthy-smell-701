import React from "react";

const Badge = ({ children, styleInfo }) => {
  const colorKey = {
    Pizza: "primary",
    Burger: "success",
    Pasta: "danger",
    Coffee: "warning",
    Indian: "info",
    Soup: "dark",
    Tea_Dessert: "primary",
    Bakery: "success",
    Korean: "danger",
  };
  return (
    <div>
      <h5 style={styleInfo}>
        <span class="badge badge-secondaty" color={colorKey[children]}>
          {children}
        </span>
      </h5>
    </div>
  );
};

export default Badge;

// "Pizza",
// "Burger",
// "Pasta",
// "Coffee",
// "Chinese",
// "Indian",
// "Soup",
// "Tea & Desset",
// "Bakery",
// "Korean",
