import React, { useState, useEffect } from "react";
import LeftSide from "./components/LeftSide/LeftSide.jsx";
import "./App.css";
import RightSide from "./components/RightSide/RightSide.jsx";
import LanguageSwitcher from "./components/LanguageSwitcher.jsx"; 
import BackgroundVideo from "./components/BackgroundVideo.jsx";
import ImagePreloader from "./components/ImagePreloader"; // Importuj novou komponentu

function App() {
  const [activeTab, setActiveTab] = useState("about");
  const [rightActiveTab, setrightActiveTab] = useState("appdesign");

  useEffect(() => {
    const preventRightClick = (e) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', preventRightClick);

    return () => {
      document.removeEventListener('contextmenu', preventRightClick);
    };
  }, []);

  return (
    <div className="App">
      <ImagePreloader /> {/* Přidej komponentu pro přednačítání obrázků */}
      <BackgroundVideo />
      <LeftSide activeTab={activeTab} setActiveTab={setActiveTab} />
      <RightSide rightActiveTab={rightActiveTab} setrightActiveTab={setrightActiveTab} />
      <LanguageSwitcher />
      <p className="mobilenotsupp">Mobile devices are not supported; please use a desktop</p>
    </div>
  );
}

export default App;
