import { createContext } from "react";
import useTheme from "../hooks/useTheme";
import useData from "../hooks/data/useData";
import useSearch from "../hooks/useSearch";

export const GlobalCtx = createContext();
export function GlobalProvider({ children }) {
  const [theme, toggleTheme] = useTheme();
  const [searchMatchedNames, setSearchMatchedNames] = useSearch();
  const [allCountries, codedNames, countryNamesArr, apiError] = useData();

  return <GlobalCtx.Provider value={{ allCountries, codedNames, countryNamesArr, apiError, searchMatchedNames, setSearchMatchedNames, theme, toggleTheme }}>{children}</GlobalCtx.Provider>;
}
