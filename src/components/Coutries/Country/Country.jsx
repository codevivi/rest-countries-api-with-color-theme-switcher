import "./_country.scss";
import LazyImage from "./LazyImage";

function Country({ country, scrollPosition }) {
  return (
    <div className="grid-item bg country-card">
      <LazyImage src={country.flagUrl} alt={country.flagAlt} scrollPosition={scrollPosition} />
      <div className="body">
        <h2 className="title">{country.name}</h2>
        <p>
          <strong>Population: </strong>
          <span>{country.population}</span>
        </p>
        <p>
          <strong>Region: </strong>
          <span>{country.region}</span>
        </p>
        <p>
          <strong>Capital: </strong>
          <span>{country.capital}</span>
        </p>
      </div>
    </div>
  );
}

export default Country;
