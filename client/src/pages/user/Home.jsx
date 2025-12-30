function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <h1>IT Support Hub</h1>
        <p>Your one-stop solution for IT support and ticket management</p>
        <div>
          <button>Login</button>
          <button>Register</button>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>Raise Support Tickets</li>
          <li>Track Ticket Status</li>
          <li>Fast Issue Resolution</li>
          <li>Admin & Technician Dashboard</li>
        </ul>
      </section>

      {/* How it works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>Login to your account</li>
          <li>Create a support ticket</li>
          <li>Technician resolves the issue</li>
          <li>Ticket is closed</li>
        </ol>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 IT Support Hub</p>
      </footer>

    </div>
  );
}

export default Home;
