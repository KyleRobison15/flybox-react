import React from "react";
import { useParams, Link } from "react-router-dom";
import YoutubeEmbed from "./common/youtubeEmbed";
import FlyDetails from "./flyDetails";

const Fly = ({ user }) => {
  const { flyName } = useParams(); // Object destructuring here because useParams returns an object with property that matches the URL params

  if (user) {
    const flyArray = user.flies.filter((fly) => fly.name === flyName);
    const fly = flyArray[0];
    const { embedId } = fly;

    return (
      <div className="container-fluid d-flex vh-100">
        <div className="row flex-grow-1">
          <div className="col-lg-8 video-section border">
            <div className="d-flex justify-content-center align-items-center h-100">
              <YoutubeEmbed embedId={embedId} />
            </div>
          </div>
          <div className="col-lg details-section border">
            <FlyDetails fly={fly} />
          </div>
        </div>
      </div>
    );
  } else {
    return;
  }
};

export default Fly;
