import React from "react";

const FlyMaterials = ({ recipe }) => {
  return (
    <div className="materials-list border rounded-bottom">
      <ul className="fa-ul">
        <li className="p-2" key={recipe.hook.number}>
          <span className={"fa-li"}>
            <i className={"fa-solid fa-feather-pointed"}></i>
          </span>
          {`${recipe.hook.brandName} ${recipe.hook.number}`}
        </li>
        <li className="p-2" key={recipe.thread}>
          <span className={"fa-li"}>
            <i className={"fa-solid fa-feather-pointed"}></i>
          </span>
          {`${recipe.thread}`}
        </li>
        {recipe.materialsList.map((item) => (
          <li className="p-2" key={item}>
            <span className={"fa-li"}>
              <i className={"fa-solid fa-feather-pointed"}></i>
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlyMaterials;
