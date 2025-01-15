import React, { useState } from "react";
import LeftSide from "./components/LeftSide/LeftSide.jsx";
import "./App.css";
import RightSide from "./components/RightSide/RightSide.jsx";

function App() {
  const [activeTab, setActiveTab] = useState("about");
  const [rightActiveTab, setrightActiveTab] = useState("appdesign"); // Add this line

  return (
    <div className="Background">
      <div className="App" style={{ cursor: `url(/cursor.png), auto` }}>
        <LeftSide activeTab={activeTab} setActiveTab={setActiveTab} />
        <RightSide rightActiveTab={rightActiveTab} setrightActiveTab={setrightActiveTab} />
      </div>
    </div>
  );
}

export default App;
