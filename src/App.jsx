import { useEffect, useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  /*
    Simulated JWT generation.

    A real JWT has:
    Header.Payload.Signature

    For this practical, we encode user information
    into a JWT-like token so that the authentication
    and token-storage concepts can be demonstrated.
  */
  const generateToken = (userData) => {
    const header = {
      alg: "HS256",
      typ: "JWT",
    };

    const payload = {
      userId: userData.userId,
      username: userData.username,
      role: userData.role,
      iat: Math.floor(Date.now() / 1000),
    };

    const encode = (data) =>
      btoa(
        JSON.stringify(data)
      )
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");

    return `${encode(header)}.${encode(payload)}.simulated-signature`;
  };

  const handleLogin = (userData) => {
    const generatedToken = generateToken(userData);

    // Store token in browser storage
    localStorage.setItem("authToken", generatedToken);

    // Store user information for this demo
    localStorage.setItem("authUser", JSON.stringify(userData));

    setToken(generatedToken);
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");

    setToken(null);
    setUser(null);
  };

  /*
    Restore authentication session when page is refreshed.
  */
  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    const storedUser = localStorage.getItem("authUser");

    if (storedToken && storedUser) {
      try {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Invalid stored authentication data.");
        handleLogout();
      }
    }
  }, []);

  return (
    <>
      {user && token ? (
        <Dashboard
          user={user}
          token={token}
          onLogout={handleLogout}
        />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;