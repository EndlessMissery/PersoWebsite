import React from "react";
import RightContent from "./RightContent";
import RightHeader from "./RightHeader";
import "../../styles/main.css";

const RightSide = ({ rightActiveTab, setrightActiveTab }) => {
  return (
    <div className="right-side">
      <RightHeader setrightActiveTab={setrightActiveTab} rightActiveTab={rightActiveTab} />
      <RightContent rightActiveTab={rightActiveTab} />
    </div>
  );
};

export default RightSide;

