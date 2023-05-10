import { Link, redirect, useParams } from "react-router-dom";
import { HiArrowLongLeft } from "react-icons/hi2";
import { useContext, useEffect, useState } from "react";
import { GlobalCtx } from "../../../context/GlobalCtx";
import "../../../scss/_buttons.scss";
import "./_details.scss";
function Details() {
  const { countryName } = useParams();
  const { allCountries } = useContext(GlobalCtx);
  const [country, setCountry] = useState(null);
  useEffect(() => {
    if (allCountries === null) {
      return;
    }
    setCountry(allCountries.get(countryName));
  }, [allCountries, countryName]);

  if (allCountries === null) {
    redirect("/");
  }

  if (!country) {
    return <h2>Country {countryName} not found.</h2>;
  }

  return (
    <div className="details">
      <Link to="/" className="bg button large">
        <HiArrowLongLeft />
        <span>Back</span>
      </Link>

      <div>Details {country.name}</div>
    </div>
  );
}

export default Details;
