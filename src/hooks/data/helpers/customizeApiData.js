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
  try {
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
    namedCountriesMap = new Map([...namedCountriesMap.entries()].sort((a, b) => a[1].name.localeCompare(b[1].name)));

    return { namedCountriesMap: namedCountriesMap, codedNamesMap: codedNamesMap, countryNamesArr: countryNamesArr };
  } catch (error) {
    console.log(error);
    throw new Error("Application error reading API data");
  }
};
