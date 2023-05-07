import { useState } from "react";

function useSearch() {
  const [searchMatchedNames, setSearchMatchedNames] = useState("");
  return [searchMatchedNames, setSearchMatchedNames];
}

export default useSearch;
