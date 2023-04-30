import { BiSearch } from "react-icons/bi";
import "./_search.scss";
function Search() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <form className="search-form bg">
      <button onClick={handleSubmit}>
        <BiSearch id="icon" />
      </button>
      <input type="text" placeholder="Search for a country..." />
    </form>
  );
}

export default Search;
