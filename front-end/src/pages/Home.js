import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <main className="home-page">

      {/* =========================
            NAVBAR
      ========================== */}
      <nav className="navbar">

        <div className="logo">
          CashTrail
        </div>

        <div className="nav-buttons">
          <button className="login-btn">
            Log In
          </button>

          <button className="signup-btn">
            Sign Up
          </button>
        </div>

      </nav>


      {/* =========================
            HERO SECTION
      ========================== */}

      <section className="hero">

        {/* Left Side */}

        <div className="hero-left">

          <p className="hero-tag">
            Smart Personal Finance Tracker
          </p>

          <h1>
            Track Every Taka.
            <br />
            Build Better Financial Habits.
          </h1>

          <p className="hero-description">

            CashTrail helps you monitor your expenses,
            manage your income, and understand your
            financial habits through a simple,
            modern and beautiful dashboard.

          </p>

          <div className="hero-buttons">

            <button className="hero-primary">
              Sign Up
            </button>

            <button className="hero-secondary">
              Learn More
            </button>

          </div>

        </div>


        {/* Right Side */}

        <div className="hero-right">

          <div className="mockup-card">

            <div className="mockup-header">

              <h3>CashTrail</h3>

              <span>Today</span>

            </div>


            <div className="balance-box">

              <p>Total Balance</p>

              <h2>৳54,800</h2>

            </div>


            <div className="progress-section">

              <div className="progress-item">

                <div className="progress-text">

                  <span>Income</span>

                  <span>75%</span>

                </div>

                <div className="progress-bar">

                  <div
                    className="progress-fill income"
                  ></div>

                </div>

              </div>


              <div className="progress-item">

                <div className="progress-text">

                  <span>Expenses</span>

                  <span>48%</span>

                </div>

                <div className="progress-bar">

                  <div
                    className="progress-fill expense"
                  ></div>

                </div>

              </div>


              <div className="progress-item">

                <div className="progress-text">

                  <span>Savings</span>

                  <span>27%</span>

                </div>

                <div className="progress-bar">

                  <div
                    className="progress-fill savings"
                  ></div>

                </div>

              </div>

            </div>


            <div className="recent-transactions">

              <h4>
                Recent Transactions
              </h4>

              <div className="transaction">

                <span>🍔 Food</span>

                <span>- ৳350</span>

              </div>

              <div className="transaction">

                <span>🚌 Transport</span>

                <span>- ৳120</span>

              </div>

              <div className="transaction">

                <span>💼 Salary</span>

                <span>+ ৳25,000</span>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =========================
          STATISTICS SECTION
      ========================== */}

      <section className="statistics">

        <h2>
          Trusted By Thousands
        </h2>

        <p>
          Helping people understand
          their financial life every day.
        </p>

        <div className="stats-grid">

          <div className="stat-card">

            <h3>15K+</h3>

            <span>
              Active Users
            </span>

          </div>

          <div className="stat-card">

            <h3>2M+</h3>

            <span>
              Transactions
            </span>

          </div>

          <div className="stat-card">

            <h3>৳120M+</h3>

            <span>
              Money Tracked
            </span>

          </div>

          <div className="stat-card">

            <h3>99%</h3>

            <span>
              Satisfaction
            </span>

          </div>

        </div>

      </section>



      {/* =========================
          FEATURES SECTION
      ========================== */}

      <section className="features">

        <div className="section-title">

          <h2>
            Why Choose CashTrail?
          </h2>

          <p>

            Everything you need to manage
            your money in one place.

          </p>

        </div>

        <div className="feature-grid">

          <div className="feature-card">

            <div className="feature-icon">
              💰
            </div>

            <h3>
              Expense Tracking
            </h3>

            <p>

              Record every expense and
              know exactly where your
              money goes.

            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              📊
            </div>

            <h3>
              Smart Reports
            </h3>

            <p>

              Visualize your monthly
              spending with beautiful
              summaries.

            </p>

          </div>
                    <div className="feature-card">

            <div className="feature-icon">
              🔒
            </div>

            <h3>
              Secure Data
            </h3>

            <p>
              Your financial information stays
              protected and private with
              secure data management.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          DASHBOARD PREVIEW
      ========================== */}

      <section className="dashboard-preview">

        <div className="dashboard-left">

          <h2>
            Everything In One Dashboard
          </h2>

          <p>

            CashTrail provides a clean dashboard
            where you can monitor your income,
            expenses and savings without any
            complicated interface.

          </p>

          <ul>

            <li>✔ Easy to understand</li>

            <li>✔ Monthly reports</li>

            <li>✔ Expense analysis</li>

            <li>✔ Secure data storage</li>

          </ul>

        </div>


        <div className="dashboard-right">

          <div className="dashboard-card">

            <div className="dashboard-top">

              <h3>Monthly Overview</h3>

            </div>


            <div className="dashboard-bars">

              <div className="bar-item">

                <span>Income</span>

                <div className="bar">

                  <div className="fill income-fill"></div>

                </div>

              </div>


              <div className="bar-item">

                <span>Expenses</span>

                <div className="bar">

                  <div className="fill expense-fill"></div>

                </div>

              </div>


              <div className="bar-item">

                <span>Savings</span>

                <div className="bar">

                  <div className="fill saving-fill"></div>

                </div>

              </div>

            </div>


            <div className="mini-cards">

              <div className="mini-card">

                <h4>Budget</h4>

                <p>৳30,000</p>

              </div>

              <div className="mini-card">

                <h4>Saved</h4>

                <p>৳8,100</p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
            CALL TO ACTION
      ========================== */}

      <section className="cta">

        <h2>

          Ready To Take Control
          Of Your Finances?

        </h2>

        <p>

          Start using CashTrail today
          and build better financial
          habits one expense at a time.

        </p>

        <button className="cta-button">

          Sign Up Free

        </button>

      </section>


      {/* =========================
              FOOTER
      ========================== */}

      <footer className="footer">

        <div className="footer-container">

          <div className="footer-about">

            <h2>
              CashTrail
            </h2>

            <p>

              A simple personal finance
              tracking website designed to
              help students and individuals
              manage their money smarter.

            </p>

          </div>


          <div className="footer-column">

            <h3>
              Product
            </h3>

            <p>Dashboard</p>

            <p>Reports</p>

            <p>Expense Tracking</p>

          </div>


          <div className="footer-column">

            <h3>
              Company
            </h3>

            <p>About</p>

            <p>Support</p>

            <p>Contact</p>

          </div>


          <div className="footer-column">

            <h3>
              Legal
            </h3>

            <p>Privacy</p>

            <p>Terms</p>

            <p>Policy</p>

          </div>

        </div>

        <hr />

        <p className="copyright">

          © 2026 CashTrail.
          All Rights Reserved.

        </p>

      </footer>

    </main>

  );
}

export default Home;