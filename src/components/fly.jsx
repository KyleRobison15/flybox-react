import React from "react";
import { useParams } from "react-router-dom";
import YoutubeEmbed from "./common/youtubeEmbed";
import FlyRecipe from "./flyRecipe";

const Fly = (props) => {
  const { flyName } = useParams(); // Object destructuring here because useParams returns an object with property that matches the URL params
  const user = props.user;
  if (props.user) {
    const flyArray = user.flies.filter((fly) => fly.name === flyName);
    const fly = flyArray[0];

    const {
      name,
      description,
      lifecycle,
      sizeRange,
      favoriteSize,
      category,
      recipe,
      tick,
      tyingNotes,
      stockImageUrl,
      embedId,
      retailPrice,
    } = fly;

    return (
      <div className="container flyContainer">
        <div className="row mb-3">
          <div className="col-4">
            <div className="flyTitle rounded-3 p-3 h-100">
              <div className="row">
                <div className="col-4">
                  <div className="d-flex justify-content-center">
                    <span className="badge text-bg-greenPrimary p-2 m-2">
                      {category.name}
                    </span>
                  </div>
                  <div className="d-flex justify-content-center">
                    <span className="badge text-bg-pinkSecondary p-2 m-2">
                      {lifecycle}
                    </span>
                  </div>
                </div>
                <div className="col-4">
                  <div className="d-flex justify-content-center">
                    <p className="text-center fw-bold fs-5">Thread</p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <p className="text-center">{recipe.thread}</p>
                  </div>
                </div>
                <div className="col-4">
                  <p className="text-center fw-bold fs-5">Hook</p>
                  <p className="text-center">{`${recipe.hook.brandName} ${recipe.hook.number}`}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8">
            <h1 className="display-3 text-center flyTitle rounded-3 p-3 h-100">
              {name}
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="recipe rounded-3 h-100">
              <h3 className="display-6 text-center m-3">Recipe</h3>
              <ul>
                {recipe.materialsList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-8">
            <div className="video">
              <YoutubeEmbed embedId={embedId} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return;
  }
};

export default Fly;
