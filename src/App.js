import { useState } from "react";

//config
const themes = { dark: "theme-dark", light: "theme-light" };

function App() {
  const [theme, setTheme] = useState(themes.dark);

  return (
    <div className={"App " + theme}>
      <div className="container">container</div>
    </div>
  );
}

export default App;
