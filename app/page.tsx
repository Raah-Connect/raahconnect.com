"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [investorEmail, setInvestorEmail] = useState("");
  const [investorName, setInvestorName] = useState("");
  const [investorSubmitted, setInvestorSubmitted] = useState(false);

  const handleWaitlist = () => {
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  const handleInvestor = () => {
    if (investorEmail && investorName) {
      setInvestorSubmitted(true);
      setInvestorEmail("");
      setInvestorName("");
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --bg: #ffffff;
          --surface: #f4f7fb;
          --border: #dde3ed;
          --gold: #1a6fe8;
          --gold-dim: #1452b3;
          --text: #0a0f1e;
          --text-dim: #4a5568;
          --accent: #16a34a;
          --green: #16a34a;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'DM Sans', sans-serif;
          overflow-x: hidden;
        }

        .grid-bg {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(26,111,232,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,111,232,0.05) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 0;
        }

        .glow-orb {
          position: fixed;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(26,111,232,0.07) 0%, transparent 70%);
          top: -200px;
          right: -200px;
          pointer-events: none;
          z-index: 0;
        }

        .glow-orb-2 {
          position: fixed;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(22,163,74,0.06) 0%, transparent 70%);
          bottom: 10%;
          left: -100px;
          pointer-events: none;
          z-index: 0;
        }

        main {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* NAV */
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 28px 0;
          border-bottom: 1px solid var(--border);
        }

        .logo {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.4rem;
          letter-spacing: -0.02em;
          color: var(--gold);
        }

        .logo span { color: var(--text); }

        .nav-badge {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          color: var(--text-dim);
          border: 1px solid var(--border);
          padding: 4px 12px;
          border-radius: 20px;
          letter-spacing: 0.1em;
        }

        /* HERO */
        .hero {
          padding: 100px 0 80px;
          max-width: 780px;
        }

        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'DM Mono', monospace;
          font-size: 0.72rem;
          color: var(--gold);
          border: 1px solid var(--gold-dim);
          padding: 6px 14px;
          border-radius: 20px;
          margin-bottom: 32px;
          letter-spacing: 0.08em;
          background: rgba(26,111,232,0.06);
        }

        .hero-tag::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--gold);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        h1 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.8rem, 6vw, 5rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin-bottom: 28px;
          color: var(--text);
        }

        h1 em {
          font-style: normal;
          color: var(--gold);
        }

        .hero-sub {
          font-size: 1.15rem;
          color: var(--text-dim);
          line-height: 1.7;
          max-width: 600px;
          margin-bottom: 52px;
          font-weight: 300;
        }

        /* WAITLIST */
        .waitlist-box {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 40px;
          margin-bottom: 28px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 2px 16px rgba(26,111,232,0.06);
        }

        .waitlist-box::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
        }

        .waitlist-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.72rem;
          color: var(--gold);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .waitlist-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .waitlist-desc {
          font-size: 0.9rem;
          color: var(--text-dim);
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .input-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        input[type="email"],
        input[type="text"] {
          flex: 1;
          min-width: 220px;
          background: var(--bg);
          border: 1px solid var(--border);
          color: var(--text);
          padding: 14px 18px;
          border-radius: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.2s;
        }

        input:focus { border-color: var(--gold); }
        input::placeholder { color: var(--text-dim); }

        .btn-gold {
          background: var(--gold);
          color: #ffffff;
          border: none;
          padding: 14px 28px;
          border-radius: 10px;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
          letter-spacing: 0.01em;
        }

        .btn-gold:hover {
          background: #f0c96a;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(26,111,232,0.2);
        }

        .success-msg {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--green);
          font-family: 'DM Mono', monospace;
          font-size: 0.9rem;
          padding: 14px 0;
        }

        /* EARLY ADOPTER */
        .early-box {
          background: linear-gradient(135deg, rgba(26,111,232,0.06) 0%, rgba(26,111,232,0.01) 100%);
          border: 1px solid #93c5fd;
          border-radius: 16px;
          padding: 40px;
          margin: 60px 0;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 40px;
          align-items: center;
        }

        @media (max-width: 640px) {
          .early-box { grid-template-columns: 1fr; }
        }

        .early-tag {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          color: var(--gold);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .early-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .early-desc {
          font-size: 0.9rem;
          color: var(--text-dim);
          line-height: 1.7;
        }

        .price-card {
          text-align: center;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 28px 36px;
          min-width: 180px;
        }

        .price-original {
          font-family: 'DM Mono', monospace;
          font-size: 0.85rem;
          color: var(--text-dim);
          text-decoration: line-through;
          margin-bottom: 4px;
        }

        .price-now {
          font-family: 'Syne', sans-serif;
          font-size: 2.8rem;
          font-weight: 800;
          color: var(--gold);
          line-height: 1;
          margin-bottom: 4px;
        }

        .price-label {
          font-size: 0.8rem;
          color: var(--text-dim);
          margin-bottom: 16px;
        }

        .price-badge {
          background: var(--gold);
          color: #ffffff;
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          font-weight: 500;
          padding: 4px 10px;
          border-radius: 20px;
          letter-spacing: 0.05em;
        }

        /* PERKS */
        .perks {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
          margin-top: 24px;
        }

        .perk {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.88rem;
          color: var(--text-dim);
          line-height: 1.5;
        }

        .perk-icon {
          font-size: 1.1rem;
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* HOW IT WORKS */
        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }

        .section-sub {
          color: var(--text-dim);
          font-size: 0.95rem;
          line-height: 1.7;
          margin-bottom: 48px;
          max-width: 520px;
        }

        .steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
          margin-bottom: 80px;
        }

        .step {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 28px;
          transition: border-color 0.2s, transform 0.2s;
        }

        .step:hover {
          border-color: var(--gold-dim);
          transform: translateY(-2px);
        }

        .step-num {
          font-family: 'DM Mono', monospace;
          font-size: 0.72rem;
          color: var(--gold);
          letter-spacing: 0.1em;
          margin-bottom: 16px;
        }

        .step-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .step-desc {
          font-size: 0.875rem;
          color: var(--text-dim);
          line-height: 1.65;
        }

        /* INVESTOR */
        .investor-section {
          border-top: 1px solid var(--border);
          padding: 80px 0;
        }

        .investor-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        @media (max-width: 720px) {
          .investor-grid { grid-template-columns: 1fr; gap: 40px; }
        }

        .investor-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin: 32px 0;
        }

        .stat-box {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 20px;
        }

        .stat-num {
          font-family: 'Syne', sans-serif;
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--gold);
          line-height: 1;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 0.8rem;
          color: var(--text-dim);
          line-height: 1.4;
        }

        .investor-form {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 36px;
          position: relative;
          overflow: hidden;
        }

        .investor-form::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
        }

        .form-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .form-sub {
          font-size: 0.85rem;
          color: var(--text-dim);
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .input-stack {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .btn-outline {
          background: transparent;
          color: var(--accent);
          border: 1px solid var(--accent);
          padding: 14px 28px;
          border-radius: 10px;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.2s;
          width: 100%;
          letter-spacing: 0.01em;
        }

        .btn-outline:hover {
          background: rgba(59,130,246,0.1);
          transform: translateY(-1px);
        }

        /* FOOTER */
        footer {
          border-top: 1px solid var(--border);
          padding: 40px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        .footer-logo {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          color: var(--gold);
          font-size: 1.1rem;
        }

        .footer-note {
          font-family: 'DM Mono', monospace;
          font-size: 0.72rem;
          color: var(--text-dim);
          letter-spacing: 0.05em;
        }

        .section-pad { padding: 80px 0 40px; }
      `}</style>

      <div className="grid-bg" />
      <div className="glow-orb" />
      <div className="glow-orb-2" />

      <main>
        {/* NAV */}
        <nav>
          <div className="logo">raah<span>connect</span></div>
          <div className="nav-badge">EARLY ACCESS</div>
        </nav>

        {/* HERO */}
        <section className="hero">
          <div className="hero-tag">Personal Server · Sovereign Identity · P2P</div>
          <h1>
            Your personal server,<br />
            <em>your data, your rules.</em>
          </h1>
          <p className="hero-sub">
            RaahConnect turns your current computer into a personal server — no new hardware needed. Own your data, control your identity, and choose exactly how public or private you want to be. No command lines. No technical knowledge required.
          </p>

          {/* WAITLIST */}
          <div className="waitlist-box">
            <div className="waitlist-label">JOIN THE WAITLIST</div>
            <div className="waitlist-title">Be first when we launch</div>
            <p className="waitlist-desc">
              Get notified the moment RaahConnect is ready — plus lock in your early adopter pricing before it's gone.
            </p>
            {!submitted ? (
              <div className="input-row">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleWaitlist()}
                />
                <button className="btn-gold" onClick={handleWaitlist}>
                  Join Waitlist →
                </button>
              </div>
            ) : (
              <div className="success-msg">
                ✓ You're on the list! We'll be in touch soon.
              </div>
            )}
          </div>
        </section>

        {/* EARLY ADOPTER */}
        <div className="early-box">
          <div>
            <div className="early-tag">⚡ Limited Time · Early Adopter Offer</div>
            <div className="early-title">Lock in lifetime pricing before we launch</div>
            <p className="early-desc">
              The first 500 customers get a permanent discount — forever. Pay once, own RaahConnect for life with all future updates included. This offer disappears at launch.
            </p>
            <div className="perks">
              <div className="perk">
                <span className="perk-icon">✦</span>
                <span>Lifetime access — no subscriptions</span>
              </div>
              <div className="perk">
                <span className="perk-icon">✦</span>
                <span>All future updates included</span>
              </div>
              <div className="perk">
                <span className="perk-icon">✦</span>
                <span>Priority support &amp; onboarding</span>
              </div>
              <div className="perk">
                <span className="perk-icon">✦</span>
                <span>Shape the product roadmap</span>
              </div>
            </div>
          </div>
          <div className="price-card">
            <div className="price-original">$149 at launch</div>
            <div className="price-now">$49</div>
            <div className="price-label">one-time payment</div>
            <div className="price-badge">66% OFF</div>
          </div>
        </div>

        {/* HOW IT WORKS */}
        <section className="section-pad">
          <div className="section-title">How it works</div>
          <p className="section-sub">
            RaahConnect bridges the gap between powerful decentralized technology and the people who need it most — but don't have a computer science degree.
          </p>
          <div className="steps">
            <div className="step">
              <div className="step-num">01 — DOWNLOAD</div>
              <div className="step-title">Install on your computer</div>
              <p className="step-desc">Works on Windows, macOS, and Linux — even older hardware. Download, install, done. No command line or technical knowledge needed.</p>
            </div>
            <div className="step">
              <div className="step-num">02 — ACTIVATE</div>
              <div className="step-title">Turn your PC into a server</div>
              <p className="step-desc">RaahConnect transforms your existing computer into a personal server in minutes. No new hardware. No cloud subscription. Just your machine, yours alone.</p>
            </div>
            <div className="step">
              <div className="step-num">03 — CONTROL</div>
              <div className="step-title">Own your data completely</div>
              <p className="step-desc">Your files, messages, and identity live on your hardware — not a company's servers. Start, stop, and manage everything from a clean, simple dashboard.</p>
            </div>
            <div className="step">
              <div className="step-num">04 — CHOOSE</div>
              <div className="step-title">Be as public as you want</div>
              <p className="step-desc">Share what you want, with who you want. Stay fully private or connect to a global peer-to-peer network. Your sovereignty, your choice, from anywhere in the world.</p>
            </div>
          </div>
        </section>

        {/* INVESTOR SECTION */}
        <section className="investor-section">
          <div className="investor-grid">
            <div>
              <div className="hero-tag" style={{ marginBottom: "24px" }}>For Investors</div>
              <div className="section-title">A real market,<br />underserved.</div>
              <p className="section-sub" style={{ marginBottom: "24px" }}>
                Billions of people are locked out of owning their digital life — not because they don't want to, but because the tools are too technical or too expensive. RaahConnect makes personal servers accessible to anyone with a computer, in any country.
              </p>
              <div className="investor-stats">
                <div className="stat-box">
                  <div className="stat-num">5B+</div>
                  <div className="stat-label">people in developing markets</div>
                </div>
                <div className="stat-box">
                  <div className="stat-num">~0</div>
                  <div className="stat-label">accessible personal server apps today</div>
                </div>
                <div className="stat-box">
                  <div className="stat-num">P3L</div>
                  <div className="stat-label">Prosperity license model</div>
                </div>
                <div className="stat-box">
                  <div className="stat-num">Rust</div>
                  <div className="stat-label">Tauri · low-resource desktop</div>
                </div>
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--text-dim)", lineHeight: "1.7" }}>
                Built on a sovereign identity layer. Sustainable business model with free noncommercial use and a commercial license tier. Open source website, proprietary core app.
              </p>
            </div>

            <div className="investor-form">
              <div className="form-title">Interested in investing?</div>
              <p className="form-sub">
                We're speaking with early-stage investors and grants. Fill in your details and we'll reach out with our pitch deck.
              </p>
              {!investorSubmitted ? (
                <div className="input-stack">
                  <input
                    type="text"
                    placeholder="Your name or organization"
                    value={investorName}
                    onChange={(e) => setInvestorName(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={investorEmail}
                    onChange={(e) => setInvestorEmail(e.target.value)}
                  />
                  <button className="btn-outline" onClick={handleInvestor}>
                    Request Pitch Deck →
                  </button>
                </div>
              ) : (
                <div className="success-msg">
                  ✓ Thank you! We'll send our pitch deck shortly.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <div className="footer-logo">raahconnect</div>
          <div className="footer-note">© 2025 Raah Connect LLC · Prosperity Public License 3.0</div>
        </footer>
      </main>
    </>
  );
}
