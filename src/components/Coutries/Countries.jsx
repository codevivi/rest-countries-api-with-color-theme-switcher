import { useCallback, useContext, useEffect, useState } from "react";
import { trackWindowScroll } from "react-lazy-load-image-component";
import Country from "./Country/Country";
import { GlobalCtx } from "../../context/GlobalCtx";
import { Link } from "react-router-dom";

function Countries({ scrollPosition }) {
  const { allCountries, localDataError, searchRegex, searchParams, filterRegion } = useContext(GlobalCtx);
  const [displayCountries, setDisplayCountries] = useState(null);

  const isMatch = useCallback(
    (country) => {
      if (searchRegex !== null) {
        return searchParams.some((param) => country[param]?.match(searchRegex));
      }
      return true;
    },
    [searchParams, searchRegex]
  );

  const searchAndFilter = useCallback(() => {
    let countries = [...allCountries];
    if (filterRegion) {
      countries = countries.filter(([_, c]) => {
        let ok = c.region === filterRegion && isMatch(c);
        return ok;
      });
    } else {
      countries = countries.filter(([_, c]) => {
        let ok = isMatch(c);
        return ok;
      });
    }

    return countries;
  }, [allCountries, filterRegion, isMatch]);

  useEffect(() => {
    if (allCountries === null) {
      return;
    }
    setDisplayCountries(searchAndFilter());
  }, [allCountries, filterRegion, searchAndFilter]);

  if (displayCountries === null || allCountries === null) {
    return <h2>{localDataError ? "Application error. Sorry, can not get countries data..." : "Loading..."}</h2>;
  }

  if (searchRegex && displayCountries.length === 0) {
    return <h2>Sorry, couldn't find any matches in country names. </h2>;
  }

  return (
    <div className="grid-container">
      {displayCountries.map(([_, country]) => (
        <Link key={country.code} to={"/details/" + encodeURIComponent(country.name)} state={{ detailsFirstPath: "/details/" + country.name }}>
          <Country country={country} scrollPosition={scrollPosition} />
        </Link>
      ))}
    </div>
  );
}

export default trackWindowScroll(Countries);
