import { BsMoon, BsSun } from "react-icons/bs";
import "./_header.scss";
import { useContext } from "react";
import { GlobalCtx } from "../../context/GlobalCtx";

function Header() {
  const { toggleTheme, theme } = useContext(GlobalCtx);
  return (
    <header className="main-header bg">
      <div className="container">
        <h1>Where in the world?</h1>
        <button className="bg theme-toggler" onClick={() => toggleTheme()}>
          {theme === "dark" && (
            <>
              <BsMoon /> <span>Dark Mode </span>
            </>
          )}
          {theme === "light" && (
            <>
              <BsSun />
              <span> Light Mode</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
