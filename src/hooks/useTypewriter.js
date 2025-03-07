import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const useTypewriter = ({
  words,
  loop = 1,
  cursor = false,
  typeSpeed = 70,
  deleteSpeed = 50,
  delaySpeed = 2000,
  initialDelay = 2000,
  cursorStyle = "_",
  onTypingEnd,
}) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), initialDelay);
    return () => clearTimeout(timer);
  }, [initialDelay]);

  return isReady ? (
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
  ) : null;
};

export default useTypewriter;
