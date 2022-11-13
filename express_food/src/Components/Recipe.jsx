import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
var id = "";
const Recipe = () => {
  const [item, setItem] = useState();
  const { recipeId } = useParams();
  if (recipeId !== " ") {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals[0]);
      });
  }
  if (item) {
    const strYoutube = item.strYoutube;
    const str = strYoutube.split("=");
    id = str[str.length - 1];
  }

  return (
    <>
      {!item ? (
        ""
      ) : (
        <div className="content">
          <img src={item.strMealThumb} alt="" />
          <div className="inner-content">
            <h1>{item.strMeal}</h1>
            <h2>{item.strArea} Food</h2>
            <h3>Category {item.strCategory}</h3>
          </div>

          <div className="recipe-details">
            <div className="ingredients">
              <h2>Ingredients</h2>
              <br />
              <h4>
                {item.strIngredient1}:{item.strMeasure1}
              </h4>
              <h4>
                {item.strIngredient2}:{item.strMeasure2}
              </h4>
              <h4>
                {item.strIngredient3}:{item.strMeasure3}
              </h4>
              <h4>
                {item.strIngredient4}:{item.strMeasure4}
              </h4>
              <h4>
                {item.strIngredient5}:{item.strMeasure5}
              </h4>
              <h4>
                {item.strIngredient6}:{item.strMeasure6}
              </h4>
              <h4>
                {item.strIngredient7}:{item.strMeasure7}
              </h4>
              <h4>
                {item.strIngredient8}:{item.strMeasure8}
              </h4>
            </div>
            <div className="instructions">
              <h2>Instructions</h2>
              <br />
              <h4>{item.strInstructions}</h4>
            </div>
          </div>
          <div className="video">
            {/* setVurl(item.strYoutube)
                                //const str=item.strYoutube.split("=");
                                //state=str[str.length-1];
                                //state="hj"    */}

            <iframe
              width="
                        100%"
              height="515"
              title="recipeVideo"
              src={`https://www.youtube.com/embed/${id}`}
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};
export default Recipe;
