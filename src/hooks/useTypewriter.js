import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

const useTypewriter = ({
  words,
  loop = 1,
  cursor = false,
  typeSpeed = 70,
  deleteSpeed = 50,
  delaySpeed = 2000, // Delay after each word (existing behavior)
  initialDelay = 2000, // Custom delay before typing starts
  cursorStyle = "_",
  onTypingEnd,
}) => {
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTypewriter(true);
    }, initialDelay); // Apply initial delay before showing the typewriter

    return () => clearTimeout(timer);
  }, [initialDelay]);

  return (
    showTypewriter && (
      <Typewriter
        words={words}
        loop={loop}
        cursor={cursor}
        typeSpeed={typeSpeed}
        deleteSpeed={deleteSpeed}
        delaySpeed={delaySpeed}
        cursorStyle={cursorStyle}
        onLoopDone={onTypingEnd}
      />
    )
  );
};

export default useTypewriter;
