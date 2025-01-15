import { Typewriter } from "react-simple-typewriter";

const useTypewriter = ({
  words,
  loop = 1,
  cursor = false,
  typeSpeed = 70,
  deleteSpeed = 50,
  delaySpeed = 1000,
  cursorStyle = "_",
  onTypingEnd,
}) => {
  return (
    <Typewriter
      words={words}
      loop={loop}
      cursor={cursor}
      typeSpeed={typeSpeed}
      deleteSpeed={deleteSpeed}
      delaySpeed={delaySpeed}
      cursorStyle={cursorStyle}
      onLoopDone={onTypingEnd} // Trigger callback after one cycle
    />
  );
};

export default useTypewriter;

