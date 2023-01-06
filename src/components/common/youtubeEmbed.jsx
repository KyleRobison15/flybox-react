import React from "react";

function YoutubeEmbed({ embedId }) {
  return (
    <div className="video ratio ratio-16x9">
      <iframe
        className="rounded-3 shadow"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}

export default YoutubeEmbed;
