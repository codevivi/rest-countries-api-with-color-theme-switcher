import Header from "./components/Header/Header";
import useTheme from "./hooks/useTheme";
import Search from "./components/Search/Search";
import Filter from "./components/Filter/Filter";

function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className={"App " + theme}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <div className="container">
        <div className="controls">
          <Search />
          <Filter />
        </div>
      </div>
    </div>
  );
}

export default App;
