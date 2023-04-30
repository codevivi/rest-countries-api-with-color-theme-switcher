import { useState } from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import "./_filter.scss";
function Filter() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="filter">
      <button className="bg expand-btn" onClick={() => setIsExpanded((is) => !is)}>
        <span>Filter by Region</span> {isExpanded ? <MdExpandLess /> : <MdExpandMore />}
      </button>
      {isExpanded && (
        <div className="selection bg">
          <button>Africa</button>
          <button>America</button>
          <button>Asia</button>
          <button>Europe</button>
          <button>Oceania</button>
        </div>
      )}
    </div>
  );
}

export default Filter;
