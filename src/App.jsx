import { Route, Routes } from "react-router-dom";

import Home from "../Pages/Home";
import Account from "../Pages/Account";
import PageNotFound from "../Pages/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account" element={<Account />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
