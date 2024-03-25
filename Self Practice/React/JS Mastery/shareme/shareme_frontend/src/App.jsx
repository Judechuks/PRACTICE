import { GoogleOAuthProvider } from "@react-oauth/google";
import { Routes, Route, useNavigate } from "react-router-dom";
import AppProvider from "./context";
import Login from "./components/Login";
import Home from "./container/Home";
import { useEffect } from "react";
import { fetchUser } from "./utils/fetchUser";

function App() {
  const navigate = useNavigate();

  // onContentLoaded and user is undefined then open the login page
  useEffect(() => {
    const user = fetchUser();
    if (!user) {
      navigate("/login");
    }
  }, []);

  return (
    <AppProvider>
      <GoogleOAuthProvider
        clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
        // cookiePolicy="single_host_origin"
      >
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </GoogleOAuthProvider>
    </AppProvider>
  );
}

export default App;
