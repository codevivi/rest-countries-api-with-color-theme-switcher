import { useState, useEffect } from "react";

function useSearch() {
  const [searchParams] = useState(["name", "capital"]);
  const [searchRegex, setSearchRegex] = useState(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (!searchText) {
      setSearchRegex(null);
      return;
    }
    const regex = new RegExp(searchText, "gi");
    setSearchRegex(regex);
  }, [searchText]);

  return [searchRegex, searchParams, searchText, setSearchText];
}

export default useSearch;
