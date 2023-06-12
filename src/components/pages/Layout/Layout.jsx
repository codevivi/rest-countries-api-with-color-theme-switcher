import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GlobalCtx } from "../../../context/GlobalCtx";
import Header from "../../Header/Header";
import { Outlet } from "react-router-dom";
import Message from "../../Message/Message";

function Layout() {
  const { theme } = useContext(GlobalCtx);
  const location = useLocation();
  const { dispatchPathTrack, message } = useContext(GlobalCtx);

  useEffect(() => {
    dispatchPathTrack({ type: "add", path: location.pathname });
  }, [location, dispatchPathTrack]);

  return (
    <div className={"App " + theme}>
      {message && <Message />}
      <Header />
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
