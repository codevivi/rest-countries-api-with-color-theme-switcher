import { useContext } from "react";
import Country from "./Country/Country";
import { GlobalCtx } from "../../context/GlobalCtx";

function Countries() {
  const { allCountries, apiError, search } = useContext(GlobalCtx);

  if (apiError) {
    return <h2>Sorry, can't connect to API...</h2>;
  }

  if (allCountries === null) {
    return <h2>Loading...</h2>;
  }

  if (search) {
    const country = allCountries.get(search);
    return country ? <Country key={country.code} country={country} /> : <h2>Not found</h2>;
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
