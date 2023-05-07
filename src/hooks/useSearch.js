import { useState } from "react";

function useSearch() {
  const [search, setSearch] = useState("");

  return [search, setSearch];
}

export default useSearch;
