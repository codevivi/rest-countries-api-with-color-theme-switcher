import { BiSearch } from "react-icons/bi";
import "./_search.scss";
import { useContext, useState } from "react";
import { GlobalCtx } from "../../context/GlobalCtx";
function Search() {
  const { setSearch } = useContext(GlobalCtx);
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(searchText);
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <form className="search-form bg text-shaded">
      <button onClick={handleSubmit}>
        <BiSearch id="icon" />
      </button>
      <input value={searchText} onChange={handleChange} type="text" placeholder="Search for a country..." />
    </form>
  );
}

export default Search;
