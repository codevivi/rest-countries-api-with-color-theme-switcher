import { useContext } from "react";
import { GlobalCtx } from "../../../context/GlobalCtx";
import Header from "../../Header/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  const { theme } = useContext(GlobalCtx);
  return (
    <div className={"App " + theme}>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
