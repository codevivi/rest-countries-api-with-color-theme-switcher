import { useEffect, useState } from "react";
import { customizeCountries } from "./cleanData";
import axios from "axios";
const URL = "https://restcountries.com/v3.1/";

function useData() {
  const [allCountries, setAllCountries] = useState(null);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    if (allCountries === null) {
      axios
        .get(URL + "all")
        .then((res) => {
          setAllCountries(customizeCountries(res.data));
        })
        .catch(() => {
          setApiError(true);
        });
    }
  }, [allCountries, apiError]);

  return [allCountries];
}

export default useData;
