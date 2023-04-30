import { useState } from "react";
import Header from "./components/Header/Header";
import useTheme from "./hooks/useTheme";

function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className={"App " + theme}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <div className="container">container</div>
    </div>
  );
}

export default App;
