import { BiSearch } from "react-icons/bi";
import "./_search.scss";
import { useContext, useEffect, useState } from "react";
import { GlobalCtx } from "../../context/GlobalCtx";
function Search() {
  const { setSearchMatchedNames, countryNamesArr } = useContext(GlobalCtx);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (countryNamesArr === null) {
      return;
    }
    if (!searchText) {
      setSearchMatchedNames(null);
      return;
    }
    const match = countryNamesArr.filter((name) => {
      const regex = new RegExp(searchText, "gi");
      return name.match(regex);
    });

    setSearchMatchedNames(match);
  }, [searchText, countryNamesArr, setSearchMatchedNames]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="search-form bg text-shaded">
      <BiSearch className="icon" />
      <input value={searchText} onChange={handleChange} type="text" placeholder="Search for a country..." />
    </div>
  );
}

export default Search;
