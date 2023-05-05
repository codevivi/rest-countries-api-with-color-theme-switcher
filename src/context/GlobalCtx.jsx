import { createContext } from "react";
import useTheme from "../hooks/useTheme";
import useData from "../hooks/data/useData";

export const GlobalCtx = createContext();
export function GlobalProvider({ children }) {
  const [theme, toggleTheme] = useTheme();
  const [allCountries, apiError] = useData();

  return <GlobalCtx.Provider value={{ allCountries, apiError, theme, toggleTheme }}>{children}</GlobalCtx.Provider>;
}
