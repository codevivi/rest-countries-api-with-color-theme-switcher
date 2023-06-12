const EMPTY_FIELD = "-";

const getNativeName = (c) => {
  const nativeNameExists = c.name.nativeName && Object.keys(c.name.nativeName).length !== 0;
  const nativeName = nativeNameExists ? Object.values(c.name.nativeName)[0].common : c.name.common;
  return nativeName;
};
const formatTopLevelDomains = (c) => {
  let domains = c.tld ? c.tld : EMPTY_FIELD;
  if (domains !== EMPTY_FIELD) {
    domains = domains.join(", ");
  }
  return domains;
};
const formatCapitals = (c) => {
  let capitals = c.capital ? c.capital : EMPTY_FIELD;
  if (capitals !== EMPTY_FIELD) {
    capitals = capitals.join(", ");
  }
  return capitals;
};

export const customizeApiData = (countries) => {
  let namedCountriesMap = new Map();
  let codedNamesMap = new Map();
  let countryNamesArr = [];
  for (let i = 0; i < countries.length; i++) {
    let c = countries[i];
    codedNamesMap.set(c.cca3, c.name.common);
    countryNamesArr.push(c.name.common);
    let country = {
      languages: c.languages ? Object.values(c.languages).join(", ") : EMPTY_FIELD,
      topLevelDomain: formatTopLevelDomains(c),
      capital: formatCapitals(c),
      name: c.name.common,
      nativeName: getNativeName(c),
      population: c.population.toLocaleString(),
      region: c.region,
      subRegion: c.subregion,
      flagUrl: c.flags.png,
      flagSvgUrl: c.flags.svg ? c.flags.svg : c.flags.png,
      flagAlt: c.flags.alt,
      currencies: c.currencies,
      borders: c.borders ? c.borders : [],
      code: c.cca3,
    };
    namedCountriesMap.set(c.name.common, country);
  }
  // countryNamesArr.sort((a, b) => a.localeCompare(b));

  return { namedCountriesMap: namedCountriesMap, codedNamesMap: codedNamesMap, countryNamesArr: countryNamesArr };
};
