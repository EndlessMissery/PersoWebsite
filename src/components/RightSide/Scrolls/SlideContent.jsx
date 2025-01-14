import React from "react";
import "../../../styles/main.css";

const SlideContent = ({ slide }) => {
  if (!slide) {
    return <div className="slide-content">No content available</div>;
  }

  return (
    <div className="slide-content">
      {slide.image && (
        <img
          src={slide.image}
          alt={slide.text || "No description available"}
          className="slide-image"
        />
      )}
      {slide.text && <div className="slide-text">{slide.text}</div>}
    </div>
  );
};

export default SlideContent;
