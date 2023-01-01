import React from "react";
import { useParams } from "react-router-dom";
import YoutubeEmbed from "./common/youtubeEmbed";

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
      <div className="container-fluid d-flex vh-100">
        <div className="row flex-grow-1">
          <div className="col-8 bg-left border">
            <h1>Video Column</h1>
          </div>
          <div className="col bg-right border">
            <h1>Details Column</h1>
          </div>
        </div>
      </div>
    );
  } else {
    return;
  }
};

export default Fly;
