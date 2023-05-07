import { createContext } from "react";
import useTheme from "../hooks/useTheme";
import useData from "../hooks/data/useData";
import useSearch from "../hooks/useSearch";

export const GlobalCtx = createContext();
export function GlobalProvider({ children }) {
  const [theme, toggleTheme] = useTheme();
  const [search, setSearch] = useSearch();
  const [allCountries, codedNames, apiError] = useData();

  return <GlobalCtx.Provider value={{ allCountries, codedNames, apiError, search, setSearch, theme, toggleTheme }}>{children}</GlobalCtx.Provider>;
}
