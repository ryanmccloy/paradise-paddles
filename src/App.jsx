import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { AuthProvider } from "../contexts/AuthContext";
import Home from "../Pages/Home";
import Account from "../Pages/Account";
import PageNotFound from "../Pages/PageNotFound";
import PrivateRoute from "../ui/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/account"
          element={
            <PrivateRoute>
              <Account />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster />
    </AuthProvider>
  );
}

export default App;
