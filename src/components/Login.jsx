import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!username.trim() || !password.trim()) {
      setError("Please enter both username and password.");
      return;
    }

    setLoading(true);

    // Simulated authentication delay
    setTimeout(() => {
      /*
        Demo credentials:
        Username: shaman
        Password: 123456
      */

      if (username === "shaman" && password === "123456") {
        onLogin({
          userId: "USR001",
          username: "shaman",
          role: "Admin",
        });
      } else {
        setError("Invalid username or password.");
      }

      setLoading(false);
    }, 700);
  };

  return (
    <div className="auth-page">
      <div className="auth-background"></div>

      <div className="login-container">
        <div className="login-brand">
          <div className="brand-icon">🔐</div>
          <h1>SecureAuth</h1>
          <p>React Authentication System</p>
        </div>

        <div className="login-card">
          <div className="card-heading">
            <h2>Welcome Back</h2>
            <p>Sign in to access your dashboard</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>

              <div className="input-wrapper">
                <span className="input-icon">👤</span>

                <input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="username"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>

              <div className="input-wrapper">
                <span className="input-icon">🔑</span>

                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
              </div>
            </div>

            {error && <div className="error-message">⚠️ {error}</div>}

            <button
              className="login-button"
              type="submit"
              disabled={loading}
            >
              {loading ? "Authenticating..." : "Login →"}
            </button>
          </form>

          <div className="demo-credentials">
            <span>Demo Credentials</span>
            <p>
              Username: <strong>shaman</strong>
            </p>
            <p>
              Password: <strong>123456</strong>
            </p>
          </div>

          <div className="security-note">
            <span>🛡️</span>
            <p>Protected with simulated JWT authentication</p>
          </div>
        </div>

        <p className="footer-text">
          Authentication • JWT • Token Storage • Protected UI
        </p>
      </div>
    </div>
  );
}

export default Login;