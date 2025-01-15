import React from "react";
import Header from "./Header/Header";
import Content from "./LeftContent";
import Footer from "./Footer/Footer";
import "../../styles/main.css";
import { useTranslation } from 'react-i18next';

const LeftSide = ({ activeTab, setActiveTab }) => {
  const { t } = useTranslation();
  
  return (
    <div className="left-side">
      <Header />
      <Content activeTab={activeTab} />
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default LeftSide;

