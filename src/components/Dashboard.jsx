function Dashboard({ user, token, onLogout }) {
  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <div className="dashboard-brand">
          <div className="brand-icon small">🔐</div>

          <div>
            <h2>SecureAuth</h2>
            <span>Protected Dashboard</span>
          </div>
        </div>

        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </header>

      <main className="dashboard-content">
        <section className="welcome-section">
          <div>
            <span className="status-badge">
              <span className="status-dot"></span>
              Authenticated
            </span>

            <h1>
              Welcome, <span>{user.username}</span> 👋
            </h1>

            <p>
              You have successfully authenticated and accessed the protected
              dashboard.
            </p>
          </div>
        </section>

        <section className="dashboard-grid">
          <div className="info-card">
            <div className="card-icon blue">👤</div>
            <div>
              <p>User ID</p>
              <h3>{user.userId}</h3>
            </div>
          </div>

          <div className="info-card">
            <div className="card-icon purple">🛡️</div>
            <div>
              <p>Role</p>
              <h3>{user.role}</h3>
            </div>
          </div>

          <div className="info-card">
            <div className="card-icon green">🔑</div>
            <div>
              <p>Authentication</p>
              <h3>JWT Token</h3>
            </div>
          </div>
        </section>

        <section className="protected-card">
          <div className="protected-heading">
            <div className="protected-icon">✓</div>

            <div>
              <h2>Protected Content</h2>
              <p>
                This section is visible only when a valid authentication
                session exists.
              </p>
            </div>
          </div>

          <div className="token-section">
            <div className="token-label">
              <span>Stored Token</span>
              <span className="storage-label">localStorage</span>
            </div>

            <div className="token-box">
              {token}
            </div>
          </div>
        </section>

        <section className="concepts-section">
          <h2>Authentication Flow</h2>

          <div className="flow">
            <div className="flow-item">
              <span>01</span>
              <h3>Login</h3>
              <p>User credentials are validated.</p>
            </div>

            <div className="flow-arrow">→</div>

            <div className="flow-item">
              <span>02</span>
              <h3>JWT</h3>
              <p>A simulated token is generated.</p>
            </div>

            <div className="flow-arrow">→</div>

            <div className="flow-item">
              <span>03</span>
              <h3>Storage</h3>
              <p>Token is saved in localStorage.</p>
            </div>

            <div className="flow-arrow">→</div>

            <div className="flow-item">
              <span>04</span>
              <h3>Protected UI</h3>
              <p>Dashboard becomes accessible.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="dashboard-footer">
        React Authentication System • JWT • Protected Routes
      </footer>
    </div>
  );
}

export default Dashboard;