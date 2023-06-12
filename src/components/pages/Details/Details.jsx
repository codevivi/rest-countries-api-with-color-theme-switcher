import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { HiArrowLongLeft } from "react-icons/hi2";
import { useContext, useEffect, useState } from "react";
import { GlobalCtx } from "../../../context/GlobalCtx";
import "../../../scss/_buttons.scss";
import "./_details.scss";
function Details() {
  const { countryName } = useParams();
  const { allCountries, codedNames, pathTrack, dispatchPathTrack } = useContext(GlobalCtx);
  const location = useLocation();
  const [country, setCountry] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (allCountries === null) {
      return;
    }
    let tempCountry = allCountries.get(countryName);
    setCountry({ ...tempCountry, borders: tempCountry.borders.map((code) => codedNames.get(code)) });
  }, [allCountries, countryName, codedNames]);

  if (allCountries === null) {
    navigate("/");
  }

  if (!country) {
    return <h2>Country {countryName} not found.</h2>;
  }

  const handleGoBack = () => {
    dispatchPathTrack({ type: "remove" });
    if (pathTrack.paths.length) {
      if (pathTrack.paths.length === 1 && location.pathname === pathTrack.paths[0]) {
        return navigate("/");
      }
    }
    return navigate(-1);
  };
  if (allCountries === null) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="details">
      <button onClick={handleGoBack} className="bg button large">
        <HiArrowLongLeft />
        <span>Back</span>
      </button>

      <div className="flex">
        <div className="flag-box">
          <img src={country.flagSvgUrl} alt={country.flagAlt} />
        </div>
        <div className="content-box">
          <h2>{country.name}</h2>
          <div className="stats">
            <div className="stats-part">
              <p>
                <strong>Native Name: </strong>
                <span>{country.nativeName}</span>
              </p>
              <p>
                <strong>Population: </strong>
                <span>{country.population}</span>
              </p>
              <p>
                <strong>Region: </strong>
                <span>{country.region}</span>
              </p>

              <p>
                <strong>Sub Region: </strong>
                <span>{country.subRegion}</span>
              </p>
              <p>
                <strong>Capital: </strong>
                <span>{country.capital}</span>
              </p>
            </div>
            <div className="stats-part">
              <p>
                <strong>Top Level Domain: </strong>
                <span>{country.topLevelDomain}</span>
              </p>

              <p>
                <strong>Languages: </strong>
                <span>{country.languages}</span>
              </p>
            </div>
            <div className="stats-part stats-part-borders">
              <p>
                <strong>Border Countries: </strong>
              </p>
              <div className="borders">
                {!country.borders.length ? (
                  <span>No terrain borders</span>
                ) : (
                  country.borders.map((borderCountryName) => (
                    <Link key={borderCountryName} to={"/details/" + encodeURIComponent(borderCountryName)} className="button bg">
                      {borderCountryName}
                    </Link>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
