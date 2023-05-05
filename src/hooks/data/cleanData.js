const EMPTY_FIELD = "-";

export const customizeCountries = (countries) => {
  return countries.map((c) => ({
    language: c.languages ? Object.values(c.languages).join() : EMPTY_FIELD,
    topLevelDomain: c.tld ? c.tld[0] : EMPTY_FIELD,
    capital: c.capital ? c.capital[0] : EMPTY_FIELD,
    name: c.name.common,
    nativeName: c.name.nativeName ? Object.values(c.name.nativeName)[0].common : c.name.common,
    population: c.population.toLocaleString(),
    region: c.region,
    subRegion: c.subregion,
    flagUrl: c.flags.png,
    flagAlt: c.flags.alt,
    currencies: c.currencies,
    borders: c.borders,
  }));
};
