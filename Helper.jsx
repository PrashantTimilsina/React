export function filterData(searchText, countryList) {
  const filteredCountryList = countryList.filter((country) =>
    country.name.common.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredCountryList;
}
