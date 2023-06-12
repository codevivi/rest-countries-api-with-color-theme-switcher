import { createContext, useEffect, useState, useCallback } from "react";
import useTheme from "../hooks/useTheme";
import useData from "../hooks/data/useData.js";
import useSearch from "../hooks/useSearch.js";
import useFilter from "../hooks/useFilter.js";
import usePathTrack from "../hooks/usePathTrack.js";

export const GlobalCtx = createContext();
export function GlobalProvider({ children }) {
  const [message, setMessage] = useState("");
  const [theme, toggleTheme] = useTheme();
  const [filterRegion, setFilterRegion] = useFilter();
  const [searchRegex, searchParams, searchText, setSearchText] = useSearch();
  const [allCountries, codedNames, countryNamesArr, apiError, localDataError] = useData();
  const [pathTrack, dispatchPathTrack] = usePathTrack();

  const deleteMessage = useCallback(() => {
    setMessage("");
  }, []);

  useEffect(() => {
    if (apiError && !localDataError) {
      setMessage(`Sorry, can't connect to API, countries information might be outdated`);
    }
    if (localDataError) {
      deleteMessage();
    }
  }, [apiError, localDataError, deleteMessage]);

  return <GlobalCtx.Provider value={{ allCountries, codedNames, countryNamesArr, apiError, localDataError, filterRegion, setFilterRegion, searchRegex, searchParams, searchText, setSearchText, theme, toggleTheme, pathTrack, dispatchPathTrack, message, deleteMessage }}>{children}</GlobalCtx.Provider>;
}
