import React, { useState } from "react";
import LeftSide from "./components/LeftSide/LeftSide.jsx";
import "./App.css";
import RightSide from "./components/RightSide/RightSide.jsx";
import LanguageSwitcher from ".//LanguageSwitcher"; // Importing the language switcher component
import BackgroundVideo from "./components/BackgroundVideo.jsx";

function App() {
  const [activeTab, setActiveTab] = useState("about");
  const [rightActiveTab, setrightActiveTab] = useState("appdesign");

  return (
      <div className="App" style={{ cursor: `url(/cursor.png), auto` }}>
        <BackgroundVideo />
        <LeftSide activeTab={activeTab} setActiveTab={setActiveTab} />
        <RightSide rightActiveTab={rightActiveTab} setrightActiveTab={setrightActiveTab} />
        <LanguageSwitcher />
      </div>
  );
}

export default App;
