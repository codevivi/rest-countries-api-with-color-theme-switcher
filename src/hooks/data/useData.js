import { useEffect, useState } from "react";
import { customizeCountries } from "./cleanData";
import axios from "axios";
const URL = "https://restcountries.com/v3.1/";
const FIELDS = ["languages", "tld", "capital", "name", "population", "region", "subregion", "flags", "currencies", "borders", "cca3"];

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
      console.log("fetching all countries");
      axios
        .get(URL + "all?fields=" + FIELDS.join(","))
        .then((res) => {
          updateData(res.data);
        })
        .catch((e) => {
          setApiError(true);
        });
    }
  }, [allCountries]);

  return [allCountries, codedNames, countryNamesArr, apiError];
}

export default useData;
