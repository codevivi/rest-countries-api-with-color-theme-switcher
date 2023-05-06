import { useEffect, useState } from "react";
import { customizeCountries } from "./cleanData";
import axios from "axios";
const URL = "https://restcountries.com/v3.1/";
const FIELDS = ["languages", "tld", "capital", "name", "population", "region", "subregion", "flags", "currencies", "borders", "cca3"];

function useData() {
  const [allCountries, setAllCountries] = useState(null);
  const [codedNames, setCodedNames] = useState(null);
  const [apiError, setApiError] = useState(false);

  function updateData(data) {
    const { namedCountriesMap, codedNamesMap } = customizeCountries(data);
    setAllCountries(namedCountriesMap);
    setCodedNames(codedNamesMap);
  }

  useEffect(() => {
    if (allCountries === null) {
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

  return [allCountries, codedNames, apiError];
}

export default useData;
