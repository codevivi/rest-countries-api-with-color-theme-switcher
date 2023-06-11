import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GlobalCtx } from "../../../context/GlobalCtx";
import Header from "../../Header/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  const { theme } = useContext(GlobalCtx);
  const location = useLocation();
  const { pathTrack, dispatchPathTrack } = useContext(GlobalCtx);
  console.log(pathTrack.paths);

  useEffect(() => {
    // if (location.pathname !== pathTrack.paths[pathTrack.paths.length]) {
    dispatchPathTrack({ type: "add", path: location.pathname });
    // }
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
