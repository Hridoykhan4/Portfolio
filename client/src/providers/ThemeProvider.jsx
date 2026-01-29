import { useEffect, useState } from "react";
import ThemeContext from "../contexts/ThemeContext";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if(saved === 'light') return 'light'
    if(saved === 'dark' || saved === 'forest') return 'forest'
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "forest"
      : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    root.classList.toggle("dark", theme === "forest");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "forest" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
