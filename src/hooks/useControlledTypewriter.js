import { useState, useEffect } from "react";

const useControlledTypewriter = (
  texts, 
  cycleTime = 8000, 
  typeSpeed = 50, 
  deleteSpeed = 50
) => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];
    let timer;

    // Typewriter effect
    if (!isDeleting) {
      if (displayText.length < currentText.length) {
        timer = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }, typeSpeed);
      } else {
        // Start deleting after full text is displayed
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, cycleTime);
      }
    } else {
      // Deleting effect
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length); // Move to next text
      }
    }

    // Clean up on component unmount or when effect runs again
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, texts, index, typeSpeed, deleteSpeed, cycleTime]);

  return displayText;
};

export default useControlledTypewriter;
