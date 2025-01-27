import React from "react";
import RightContent from "./RightContent";
import RightHeader from "./RightHeader/RightHeader";
import Box from "./Box";
import "../../styles/main.css";

const RightSide = ({ rightActiveTab, setrightActiveTab }) => {
  return (
    <div className="right-side">
      <RightHeader setrightActiveTab={setrightActiveTab} rightActiveTab={rightActiveTab} />
      <RightContent rightActiveTab={rightActiveTab} />
      
      {/* Add Box Component */}
      <Box />
    </div>
  );
};

export default RightSide;
