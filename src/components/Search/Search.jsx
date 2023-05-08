import { BiSearch } from "react-icons/bi";
import "./_search.scss";
import { useContext, useEffect, useState } from "react";
import { GlobalCtx } from "../../context/GlobalCtx";
function Search() {
  const { setSearchText } = useContext(GlobalCtx);
  const [text, setText] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => setSearchText(text), 500);
    return () => clearTimeout(timeoutId);
  }, [text, setSearchText]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="search-form bg text-shaded">
      <BiSearch className="icon" />
      <input value={text} onChange={handleChange} type="text" placeholder="Search for a country..." />
    </div>
  );
}

export default Search;
