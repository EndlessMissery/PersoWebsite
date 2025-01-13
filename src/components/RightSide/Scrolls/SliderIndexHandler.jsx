import { useState, useEffect } from "react";
import data from "../../../data/illustrations.json"; // Import the illustrations data

const SlideIndexHandler = ({ rightActiveTab, selectedCategory }) => {
  const [slideIndexes, setSlideIndexes] = useState({
    illustrations: 0,
    appdesign: 0,
    webdesign: 0,
    // Add other tabs here
  });

  // Track tab changes and update state accordingly
  useEffect(() => {
    setSlideIndexes((prevState) => ({
      ...prevState,
      [rightActiveTab]: 0, // Reset slide index on tab change
    }));
  }, [rightActiveTab]);

  const handleWheel = (event) => {
    event.preventDefault();

    if (rightActiveTab === "illustrations" && data.illustrations.categories[selectedCategory]?.images) {
      const newIndex = event.deltaY > 0
        ? Math.min(data.illustrations.categories[selectedCategory].images.length - 1, slideIndexes.illustrations + 1)
        : Math.max(0, slideIndexes.illustrations - 1);
      setSlideIndexes({ ...slideIndexes, illustrations: newIndex });
    }
    // Handle scroll for other categories (appdesign, webdesign, etc.)
    else if (event.deltaY > 0) {
      const newIndex = Math.min(data[rightActiveTab].length - 1, slideIndexes[rightActiveTab] + 1);
      setSlideIndexes({ ...slideIndexes, [rightActiveTab]: newIndex });
    } else {
      const newIndex = Math.max(0, slideIndexes[rightActiveTab] - 1);
      setSlideIndexes({ ...slideIndexes, [rightActiveTab]: newIndex });
    }
  };

  return { slideIndexes, handleWheel };
};

export default SlideIndexHandler;

