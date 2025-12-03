import React, { useEffect, useState } from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import './assets/styles.css';
import { Link, Outlet, useLocation } from 'react-router-dom';

// SHA-256 hash of your password (e.g., for 'SL26')
const PASSWORD_HASH = '178cc830e527a037c9768bd7abd8f5a307034c2430d49c5d21d43f37aa88ad28'; // Replace with real hash

function sha256(str) {
  // Browser crypto API for SHA-256
  const encoder = new TextEncoder();
  return window.crypto.subtle.digest('SHA-256', encoder.encode(str)).then(buf => {
    return Array.from(new Uint8Array(buf)).map(x => x.toString(16).padStart(2, '0')).join('');
  });
}

function PasswordGate({ onUnlock }) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const hash = await sha256(input);
    if (hash === PASSWORD_HASH) {
      localStorage.setItem('wedding_unlocked', '1');
      onUnlock();
    } else {
      setError('Incorrect password.');
    }
    setLoading(false);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/hero.jpg") center/cover no-repeat',
      backgroundAttachment: 'fixed',
      padding: '0 1rem' 
    }}>
      <form onSubmit={handleSubmit} style={{ background: '#fff', padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 24px rgba(0,0,0,0.2)', minWidth: 320, width: '100%', maxWidth: 400 }}>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <span className="euphoria-script-regular" style={{ fontSize: '2.2rem', color: '#222', display: 'block', marginBottom: '0.25rem' }}>Aidan &amp; Rebecca</span>
          <span style={{ color: '#222', fontSize: '1rem' }}>please enter the password included on your invitation</span>
        </div>
        <h2 style={{ marginBottom: '1rem', textAlign: 'center', display: 'none' }}>Enter Wedding Password</h2>
        <input
          type="password"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Password"
          style={{ width: '100%', padding: '0.75rem', fontSize: '1.1rem', borderRadius: 8, border: '1px solid #ccc', marginBottom: '1rem' }}
          autoFocus
        />
        <button type="submit" style={{ width: '100%', padding: '0.75rem', fontSize: '1.1rem', borderRadius: 8, background: '#4F7942', color: '#fff', border: 'none' }} disabled={loading}>
          {loading ? 'Checking...' : 'Enter'}
        </button>
        {error && <div style={{ color: 'red', marginTop: '1rem', textAlign: 'center' }}>{error}</div>}
      </form>
    </div>
  );
}

function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    // Set footer year
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
    // Check localStorage
    if (localStorage.getItem('wedding_unlocked') === '1') {
      setUnlocked(true);
    }
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  if (!unlocked) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />;
  }

  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="container header-inner">
          <nav aria-label="Primary">
            <button 
              className="nav-toggle" 
              aria-expanded={mobileMenuOpen} 
              aria-controls="main-menu"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
            <ul id="main-menu" className={`menu ${mobileMenuOpen ? 'open' : ''}`}>
              <li style={{marginRight: '0.5rem'}}>
                <img src="/logo.png" alt="Logo" style={{height: '32px', width: '32px', objectFit: 'contain', verticalAlign: 'middle'}} />
              </li>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/photos">Our Story</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/travel">Travel</Link></li>
              <li><Link to="/registry">Registry</Link></li>
              <li><Link to="/rsvp">RSVP</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {isHomePage && (
          <section className="hero">
            <div className="container">
              <h1 className="euphoria-script-regular">Aidan &amp; Rebecca</h1>
              <p className="subtitle euphoria-script-regular">"we love because he first loved us"</p>
              <p className="subtitle euphoria-script-regular" style={{fontSize:'1.2rem', marginTop:'-1.5rem'}}>1 John 4:19</p>
              <div className="date-location euphoria-script-regular">
                <time dateTime="2026-06-27">June 27, 2026</time> • Palos Heights, Illinois
              </div>
              <div className="clock flip-clock" aria-live="polite">
                <FlipClockCountdown
                  to={new Date('2026-06-27T15:00:00')}
                  labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
                  showSeparators
                />
              </div>
              <p><Link className="btn rsvp-btn" to="/rsvp">RSVP</Link></p>
            </div>
          </section>
        )}
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container">
          <p><span id="year"></span> A &amp; R — See you on the big day!</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
