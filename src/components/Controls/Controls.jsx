import Search from "../Search/Search";
import Filter from "../Filter/Filter";
import "./_controls.scss";
function Controls() {
  return (
    <div className="controls">
      <Search />
      <Filter />
    </div>
  );
}

export default Controls;
