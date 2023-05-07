import { useState } from "react";

function useFilter() {
  const [filterRegion, setFilterRegion] = useState(null);
  return [filterRegion, setFilterRegion];
}

export default useFilter;
