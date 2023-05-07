import { useContext } from "react";
import Country from "./Country/Country";
import { GlobalCtx } from "../../context/GlobalCtx";

function Countries() {
  const { allCountries, apiError, searchMatchedNames, filterRegion } = useContext(GlobalCtx);

  if (apiError) {
    return <h2>Sorry, can't connect to API...</h2>;
  }

  if (allCountries === null) {
    return <h2>Loading...</h2>;
  }

  if (searchMatchedNames) {
    if (!searchMatchedNames.length) {
      return <h2>Sorry, couldn't find any matches in country names. </h2>;
    }
    const countries = searchMatchedNames.map((name) => allCountries.get(name));
    return (
      <div className="grid-container">
        {countries.map((country) => (
          <Country key={country.code} country={country} />
        ))}
      </div>
    );
  }

  if (filterRegion !== null) {
    return <div className="grid-container">{[...allCountries].map(([_, country]) => (filterRegion !== country.region ? null : <Country key={country.code} country={country} />))}</div>;
  }

  return (
    <div className="grid-container">
      {[...allCountries].map(([_, country]) => (
        <Country key={country.code} country={country} />
      ))}
    </div>
  );
}

export default Countries;
