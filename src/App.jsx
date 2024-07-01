import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "../Pages/Home";
import Account from "../Pages/Account";
import PageNotFound from "../Pages/PageNotFound";
import { AuthProvider } from "../contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster />
    </AuthProvider>
  );
}

export default App;
