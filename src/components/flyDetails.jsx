import React from "react";
import HamburgerDropdown from "./common/hamburgerDropdown";
import FlyMaterials from "./flyMaterials";

const FlyDetails = ({ fly }) => {
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

  const dropdownItems = [
    { name: "Edit", path: "" },
    { name: "Delete", path: "" },
  ];

  // Helper Method for Setting Category and Lifecycle Classes
  const setBadgeClasses = () => {};
  // Helper Method for Setting Tick Icon
  const handleTick = () => {};

  return (
    <div className="details d-flex justify-content-center h-100 flex-column">
      <div className="main-details shadow border rounded">
        <div className="details-header border">
          <div className="row">
            <HamburgerDropdown items={dropdownItems} />
          </div>
          <h1 className="display-6">{name}</h1>
          <p>{description}</p>
          <div className="row">
            <div className="col text-center">
              <span className="badge text-bg-terrestrial w-100 p-1 fs-5 fw-normal">
                {category.name}
              </span>
            </div>
            <div className="col text-center">
              <span className="badge text-bg-adult w-100 p-1 fs-5 fw-normal">
                {lifecycle}
              </span>
            </div>
            <div className="col text-center"></div>
          </div>
        </div>
        <FlyMaterials recipe={recipe} />
      </div>
    </div>
  );
};

export default FlyDetails;
