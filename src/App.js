import Header from "./components/Header/Header";
import useTheme from "./hooks/useTheme";
import Search from "./components/Search/Search";

function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className={"App " + theme}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <div className="container">
        <div className="controls">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default App;
