import React, { useState } from "react";
import RightContent from "./RightContent";
import RightHeader from "./RightHeader/RightTab";
import Box from "./Box";
import "../../styles/main.css";

const RightSide = () => {
  const [rightActiveTab, setRightActiveTab] = useState('bookcovers'); // Set initial active tab to 'bookcovers'

  return (
    <div className="right-side">
      <RightHeader setrightActiveTab={setRightActiveTab} rightActiveTab={rightActiveTab} />
      <RightContent rightActiveTab={rightActiveTab} />
      <Box />
    </div>
  );
};

export default RightSide;
