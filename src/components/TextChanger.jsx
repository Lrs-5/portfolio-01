import React, { useEffect, useState } from "react";

const texts = ["Hello, I'm Lipsa", "Frontend Developer", "React Enthusiast"];

const TextChange = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];

    // Pause when full word is typed
    if (!isDeleting && subIndex === currentText.length) {
      const pause = setTimeout(() => setIsDeleting(true), 1200);
      return () => clearTimeout(pause);
    }

    // Move to next word when deleted fully
    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 50 : 90);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index]);

  return (
    <div className="min-h-[60px] md:min-h-[90px] min-w-[280px] md:min-w-[520px]">
      <span>{texts[index].substring(0, subIndex)}</span>
      <span className="animate-pulse text-[#7c8ee6]">|</span>
    </div>
  );
};

export default TextChange;