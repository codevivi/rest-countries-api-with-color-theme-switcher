import { BsMoon, BsSun } from "react-icons/bs";
import "./_header.scss";
import { useContext } from "react";
import { GlobalCtx } from "../../context/GlobalCtx";
import { Link } from "react-router-dom";

function Header() {
  const { toggleTheme, theme } = useContext(GlobalCtx);
  return (
    <header className="main-header bg">
      <div className="container">
        <Link to="/">
          <h1> Where in the world?</h1>
        </Link>
        <button className="bg theme-toggler" onClick={() => toggleTheme()}>
          {theme === "light" && (
            <>
              <BsMoon /> <span>Dark Mode </span>
            </>
          )}
          {theme === "dark" && (
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
