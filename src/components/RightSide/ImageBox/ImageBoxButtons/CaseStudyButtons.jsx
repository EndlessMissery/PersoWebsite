import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../../../styles/main.css'

const CaseStudyButton = ({ categoryName, rightActiveTab }) => {
  const { t } = useTranslation();

  const openPDF = (categoryName) => {
    const pdfMap = {
      "appdesign.category1": "/pdf1.pdf",
      "appdesign.category2": "/pdf1.pdf",
      "appdesign.category3": "path/to/appdesign_case_study_3.pdf",
      "appdesign.category4": "path/to/appdesign_case_study_4.pdf",
      "webdesign.category1": "/pdf2.pdf",
      "webdesign.category2": "path/to/webdesign_case_study_2.pdf",
      "webdesign.category3": "path/to/webdesign_case_study_3.pdf",
      "webdesign.category4": "path/to/webdesign_case_study_4.pdf",
    };

    const pdfUrl = pdfMap[categoryName];
    if (pdfUrl) {
      window.open(pdfUrl, "_blank");
    }
  };

  return (
    <div className="case-study-button-container">
      <button
        className="case-study-button"
        onClick={() => openPDF(`${rightActiveTab}.category${categoryName}`)}
      >
        {t("categoryButtons.openCaseStudy")}
      </button>
    </div>
  );
};

export default CaseStudyButton;
