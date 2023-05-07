import { useContext, useState } from "react";
import { MdExpandMore, MdExpandLess, MdOutlineFormatAlignCenter } from "react-icons/md";
import "./_filter.scss";
import { GlobalCtx } from "../../context/GlobalCtx";
function Filter() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { filterRegion, setFilterRegion } = useContext(GlobalCtx);

  function handleRegionClick(region) {
    return () => {
      setFilterRegion(region);
      setIsExpanded(false);
    };
  }

  return (
    <div className="filter">
      <button className="bg expand-btn" onClick={() => setIsExpanded((is) => !is)}>
        <span>{"Filter by Region" + (filterRegion ? ` - ${filterRegion}` : "")}</span> {isExpanded ? <MdExpandLess /> : <MdExpandMore />}
      </button>
      {isExpanded && (
        <div className="selection bg">
          {filterRegion && <button onClick={handleRegionClick(null)}>Reset to - ALL</button>}
          {filterRegion !== "Africa" && <button onClick={handleRegionClick("Africa")}>Africa</button>}
          {filterRegion !== "Americas" && <button onClick={handleRegionClick("Americas")}>America</button>}
          {filterRegion !== "Asia" && <button onClick={handleRegionClick("Asia")}>Asia</button>}
          {filterRegion !== "Europe" && <button onClick={handleRegionClick("Europe")}>Europe</button>}
          {filterRegion !== "Oceania" && <button onClick={handleRegionClick("Oceania")}>Oceania</button>}
        </div>
      )}
    </div>
  );
}

export default Filter;
