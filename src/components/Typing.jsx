// TypingText.jsx
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingText = () => {
  const el = useRef(null); // Reference to the span element
  const typed = useRef(null); // Store the Typed instance

  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: ["Assistant Director", "Art Director"],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });

    return () => {
      // Destroy instance on unmount to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return <span ref={el} className="typing-text" />;
};

export default TypingText;
