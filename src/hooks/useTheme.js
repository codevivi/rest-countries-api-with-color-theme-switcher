import { useEffect, useState } from "react";
import useDarkThemeDetector from "./useDarkThemeDetector";

function useTheme() {
  const isDarkTheme = useDarkThemeDetector();
  const [theme, setTheme] = useState(isDarkTheme ? "dark" : "light");

  const toggleTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    setTheme((theme) => (isDarkTheme ? "dark" : "light"));
  }, [isDarkTheme]);

  return [theme, toggleTheme];
}

export default useTheme;
