import React, { useState, useEffect } from "react";
import LeftSide from "./components/LeftSide/LeftSide.jsx";
import "./App.css";
import RightSide from "./components/RightSide/RightSide.jsx";
import LanguageSwitcher from "./components/LanguageSwitcher.jsx"; 
import BackgroundVideo from "./components/BackgroundVideo.jsx";

function App() {
  const [activeTab, setActiveTab] = useState("about");
  const [rightActiveTab, setrightActiveTab] = useState("appdesign");

  useEffect(() => {
    const rightSide = document.querySelector('*');

    if (rightSide) {
      rightSide.addEventListener('contextmenu', (event) => event.preventDefault());
    }


    return () => {
      if (rightSide) {
        rightSide.removeEventListener('contextmenu', (event) => event.preventDefault());
      }

    };
  }, []);

  return (
    <div className="App" style={{ cursor: `url(/cursor.png), auto` }}>
      <BackgroundVideo />
      <LeftSide activeTab={activeTab} setActiveTab={setActiveTab} />
      <RightSide rightActiveTab={rightActiveTab} setrightActiveTab={setrightActiveTab} />
      <LanguageSwitcher />
      <p className="mobilenotsupp">Mobile devices are not supported; please use a desktop</p>
    </div>
  );
}

export default App;
