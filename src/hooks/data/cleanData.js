const EMPTY_FIELD = "-";

let namedCountriesMap = new Map();
let codedNamesMap = new Map();

const getNativeName = (c) => {
  const nativeNameExists = c.name.nativeName && Object.keys(c.name.nativeName).length !== 0;
  const nativeName = nativeNameExists ? Object.values(c.name.nativeName)[0].common : c.name.common;
  return nativeName;
};

export const customizeCountries = (countries) => {
  for (let i = 0; i < countries.length; i++) {
    let c = countries[i];
    codedNamesMap.set(c.cca3, c.name.common);
    let country = {
      languages: c.languages ? Object.values(c.languages).join(", ") : EMPTY_FIELD,
      topLevelDomain: c.tld ? c.tld[0] : EMPTY_FIELD,
      capital: c.capital ? c.capital[0] : EMPTY_FIELD,
      name: c.name.common,
      nativeName: getNativeName(c),
      population: c.population.toLocaleString(),
      region: c.region,
      subRegion: c.subregion,
      flagUrl: c.flags.png,
      flagAlt: c.flags.alt,
      currencies: c.currencies,
      borders: c.borders,
      code: c.cca3,
    };
    namedCountriesMap.set(c.name.common, country);
  }

  return { namedCountriesMap: namedCountriesMap, codedNamesMap: codedNamesMap };
};
