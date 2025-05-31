// TypingSkills.jsx
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingSkills = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: ["PowerPoint", "Microsoft Excel", "Photoshop", "Canva", "Corel"],
      typeSpeed: 40,
      backSpeed: 20,
      loop: true,
    });

    return () => {
      typed.current.destroy();
    };
  }, []);

  return <span ref={el} className="typing-skills" />;
};

export default TypingSkills;
