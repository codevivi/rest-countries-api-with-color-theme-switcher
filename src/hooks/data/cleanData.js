const EMPTY_FIELD = "-";

const formatLanguages = (c) => {
  let languages = c.languages ? c.languages : EMPTY_FIELD;
  if (languages !== EMPTY_FIELD) {
    languages = languages.map((lang) => lang.name).join(", ");
  }
  return languages;
};
const formatTopLevelDomains = (c) => {
  let domains = c.topLevelDomain ? c.topLevelDomain : EMPTY_FIELD;
  if (domains !== EMPTY_FIELD) {
    domains = domains.join(", ");
  }
  return domains;
};
export const customizeCountries = (countries) => {
  let namedCountriesMap = new Map();
  let codedNamesMap = new Map();
  let countryNamesArr = [];
  for (let i = 0; i < countries.length; i++) {
    let c = countries[i];
    codedNamesMap.set(c.alpha3Code, c.name);
    countryNamesArr.push(c.name);
    let country = {
      languages: formatLanguages(c),
      topLevelDomain: formatTopLevelDomains(c),
      capital: c.capital ? c.capital : EMPTY_FIELD,
      name: c.name,
      nativeName: c.nativeName ?? EMPTY_FIELD,
      population: c.population.toLocaleString(),
      region: c.region,
      subRegion: c.subregion,
      flagUrl: c.flags.png,
      flagSvgUrl: c.flags.svg ? c.flags.svg : c.flags.png,
      flagAlt: c.name + "flag",
      currencies: c.currencies,
      borders: c.borders ? c.borders : [],
      code: c.alpha3Code,
    };
    namedCountriesMap.set(c.name, country);
  }

  return { namedCountriesMap: namedCountriesMap, codedNamesMap: codedNamesMap, countryNamesArr: countryNamesArr };
};
