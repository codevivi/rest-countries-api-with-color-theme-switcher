import { useEffect, useState } from "react";
import { customizeLocalData } from "./helpers/customizeLocalData";
import { customizeApiData } from "./helpers/customizeApiData";
import axios from "axios";
const API_DATA_URL = "https://restcountries.com/v3.1/all?fields=name,population,region,capital,subregion,tld,languages,borders,flags,cca3";
const LOCAL_DATA_URL = "/data.json"; //using local json file

function useData() {
  const [countryNamesArr, setCountryNamesArr] = useState(null);
  const [allCountries, setAllCountries] = useState(null);
  const [codedNames, setCodedNames] = useState(null);
  const [apiError, setApiError] = useState(false);
  const [localDataError, setLocalDataError] = useState(false);
  const [url, setUrl] = useState(API_DATA_URL);

  function initCountries(data, customizeDataFunc) {
    const { namedCountriesMap, codedNamesMap, countryNamesArr } = customizeDataFunc(data);
    setAllCountries(namedCountriesMap);
    setCodedNames(codedNamesMap);
    setCountryNamesArr(countryNamesArr);
  }

  useEffect(() => {
    if (allCountries === null || apiError) {
      axios
        .get(url, { headers: { "content-Type": "application/json", Accept: "application/json" } })
        .then((res) => {
          if (!res.data) {
            throw new Error("No data from api");
          }
          initCountries(res.data, !apiError ? customizeApiData : customizeLocalData);
        })
        .catch((e) => {
          !apiError ? setApiError(true) : setLocalDataError(true);
          setUrl(LOCAL_DATA_URL);
        });
    }
  }, [allCountries, apiError, url]);

  return [allCountries, codedNames, countryNamesArr, apiError, localDataError];
}

export default useData;
