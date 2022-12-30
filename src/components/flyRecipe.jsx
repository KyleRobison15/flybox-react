import React from "react";
const FlyRecipe = ({ fly }) => {
  const { brandName: hookBrand, number: hookNumber } = fly.recipe.hook;
  const { thread } = fly.recipe;

  return (
    <div className="border border-3 rounded-2">
      {/* <h1>{brandName}</h1> */}
      <h1>Hook:{` ${hookBrand} ${hookNumber}`}</h1>
      <h1>Thread: {thread}</h1>
    </div>
  );
};

export default FlyRecipe;
