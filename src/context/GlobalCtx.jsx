import { createContext } from "react";
import useTheme from "../hooks/useTheme";
import useData from "../hooks/data/useData";
import useSearch from "../hooks/useSearch";
import useFilter from "../hooks/useFilter";
import usePathTrack from "../hooks/usePathTrack";

export const GlobalCtx = createContext();
export function GlobalProvider({ children }) {
  const [theme, toggleTheme] = useTheme();
  const [filterRegion, setFilterRegion] = useFilter();
  const [searchRegex, searchParams, searchText, setSearchText] = useSearch();
  const [allCountries, codedNames, countryNamesArr, apiError] = useData();
  const [pathTrack, dispatchPathTrack] = usePathTrack();

  return <GlobalCtx.Provider value={{ allCountries, codedNames, countryNamesArr, apiError, filterRegion, setFilterRegion, searchRegex, searchParams, searchText, setSearchText, theme, toggleTheme, pathTrack, dispatchPathTrack }}>{children}</GlobalCtx.Provider>;
}
