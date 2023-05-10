import Home from "./components/pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// use Hash router with github pages
import Layout from "./components/pages/Layout/Layout";
import { GlobalProvider } from "./context/GlobalCtx";
import NotFound from "./components/pages/NotFound/NotFound";
import Details from "./components/pages/Details/Details";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route exact path="details/:countryName" element={<Details />} />
            <Route path="*" element={<NotFound />} />
            {/*this won't work with HashRouter */}
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
