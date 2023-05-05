import { useEffect, useState } from "react";
import axios from "axios";
const URL = "https://restcountries.com/v3.1/";

function useData() {
  const [allCountries, setAllCountries] = useState(null);

  useEffect(() => {
    if (allCountries === null) {
      axios.get(URL + "all").then((res) => {
        const countries = res.data.map((c) => ({
          language: c.languages ? Object.values(c.languages).join() : "-",
          topLevelDomain: c.tld ? c.tld[0] : "-",
          capital: c.capital ? c.capital[0] : "-",
          name: c.name.common,
          nativeName: c.name.nativeName ? Object.values(c.name.nativeName)[0].common : c.name.common,
          population: c.population,
          region: c.region,
          subRegion: c.subregion,
          flagUrl: c.flags.png,
          flagAlt: c.flags.alt,
          currencies: c.currencies,
          borders: c.borders,
        }));
        setAllCountries(countries);
      });
    }
  }, [allCountries]);

  return [allCountries];
}

export default useData;
