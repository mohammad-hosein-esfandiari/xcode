"use client";

import { useEffect, useRef } from "react";

const ThemeRadio = ({ id, name, color }) => {
  const input = useRef();
  const storeTheme = (theme) => {
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    const activeTheme = localStorage.getItem("theme");
    if (activeTheme) {
      if (input.current.id === activeTheme) {
        input.current.checked = true;
      }
    } else {
      if (input.current.id === "blue") {
        input.current.checked = true;
      }
    }
  }, []);
  return (
    <input
      ref={input}
      type="radio"
      onClick={() => storeTheme(id)}
      id={id}
      name={name}
      className={`mb-5 cursor-pointer hover:scale-[1.08] transition-all duration-200 appearance-none outline-[3.5px] outline-offset-[3px] outline w-[15px] h-[15px] ${color} rounded-full`}
    />
  );
};

export default ThemeRadio;
