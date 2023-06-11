import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GlobalCtx } from "../../../context/GlobalCtx";
import Header from "../../Header/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  const { theme } = useContext(GlobalCtx);
  const location = useLocation();
  const { dispatchPathTrack } = useContext(GlobalCtx);

  useEffect(() => {
    dispatchPathTrack({ type: "add", path: location.pathname });
  }, [location, dispatchPathTrack]);

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
