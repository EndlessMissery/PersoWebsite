import React from "react";
import Header from "./Header/Header";
import Content from "./LeftContent";
import Footer from "./Footer/Footer";
import "../../styles/main.css";

const LeftSide = ({ activeTab, setActiveTab }) => {  
  return (
    <div className="left-side">
      <Header />
      <Content activeTab={activeTab} />
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default LeftSide;

