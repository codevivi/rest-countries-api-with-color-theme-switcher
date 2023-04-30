import { useState, useEffect } from "react";

const useDarkThemeDetector = () => {
  const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
  const onThemeChange = (e) => {
    setIsDarkTheme(e.matches);
  };

  useEffect(() => {
    const darkThemeMediaQueryListMatch = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMediaQueryListMatch.addEventListener("change", onThemeChange);
    return () => darkThemeMediaQueryListMatch.removeEventListener("change", onThemeChange);
  }, []);
  return isDarkTheme;
};

export default useDarkThemeDetector;
