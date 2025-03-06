import React from "react";
import videoSrc from "../assets/video.webm"; // Importujte video soubor
import "../styles/main.css";

const BackgroundVideo = () => {
  return (
    <div className="background-video-container">
      <video autoPlay muted loop id="background-video">
        <source src={videoSrc} type="video/webm" />
        <track kind="metadata" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
