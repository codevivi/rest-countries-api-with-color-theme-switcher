import { useEffect, useState } from "react";
import { customizeCountries } from "./cleanData";
import axios from "axios";
const URL = "https://raw.githubusercontent.com/codevivi/rest-countries-api-with-color-theme-switcher/hashrouter/public/data.json"; //using local json file

function useData() {
  const [countryNamesArr, setCountryNamesArr] = useState(null);
  const [allCountries, setAllCountries] = useState(null);
  const [codedNames, setCodedNames] = useState(null);
  const [apiError, setApiError] = useState(false);

  function updateData(data) {
    const { namedCountriesMap, codedNamesMap, countryNamesArr } = customizeCountries(data);
    setAllCountries(namedCountriesMap);
    setCodedNames(codedNamesMap);
    setCountryNamesArr(countryNamesArr);
  }

  useEffect(() => {
    if (allCountries === null) {
      axios
        .get(URL, { headers: { "content-Type": "application/json", Accept: "application/json" } })
        .then((res) => {
          return updateData(res.data);
        })
        .catch((e) => {
          setApiError(true);
        });
    }
  }, [allCountries]);

  return [allCountries, codedNames, countryNamesArr, apiError];
}

export default useData;
