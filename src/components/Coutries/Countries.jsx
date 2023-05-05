import { useContext } from "react";
import Country from "./Country/Country";
import { GlobalCtx } from "../../context/GlobalCtx";

function Countries() {
  const { allCountries, apiError } = useContext(GlobalCtx);
  if (apiError) {
    return <h2>Sorry, can't connect to API...</h2>;
  }

  if (allCountries === null) {
    return <h2>Loading...</h2>;
  }
  console.log(allCountries);
  return (
    <div className="grid-container">
      {allCountries.map((country) => (
        <Country country={country} />
      ))}
    </div>
  );
}

export default Countries;
