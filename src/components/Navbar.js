import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../arkhamprofilesquare.png';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(10,10,10,0.97)' : 'transparent',
      borderBottom: scrolled ? '1px solid #1a1a1a' : '1px solid transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src={logo} alt="Arkham Enterprises" style={{ height: 44, width: 44, objectFit: 'contain' }} />
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--stone)', lineHeight: 1, letterSpacing: 2 }}>ARKHAM</div>
<div style={{ fontFamily: 'var(--font-accent)', fontSize: 9, letterSpacing: 4, color: '#D6B64A', textTransform: 'uppercase', textShadow: '0 1px 8px rgba(0,0,0,0.9)'}}>ENTERPRISES</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, flex: 1 }} className="desktop-nav">
          {navLinks.map(link => (
            <Link key={link.to} to={link.to} style={{
              fontFamily: 'var(--font-accent)',
              fontSize: 19,
              fontWeight: 600,
              letterSpacing: 1,
              textTransform: 'uppercase',
              color: location.pathname === link.to ? '#D6B64A' : '#E0E0E0',
              padding: '8px 12px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => { e.target.style.color = '#FFFFFF'; }}
            onMouseLeave={e => { e.target.style.color = location.pathname === link.to ? '#D6B64A' : '#E0E0E0'; }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link to="/quote" className="btn-primary desktop-nav" style={{ padding: '10px 24px', fontSize: 12 }}>
          Get a Quote
        </Link>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} style={{ color: 'var(--stone)', display: 'none' }} className="mobile-menu-btn" aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: 'rgba(10,10,10,0.99)',
          borderTop: '1px solid var(--border)',
          padding: '16px 24px 24px',
        }}>
          {navLinks.map(link => (
            <Link key={link.to} to={link.to} style={{
              display: 'block',
              fontFamily: 'var(--font-accent)',
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: 'uppercase',
              color: location.pathname === link.to ? 'var(--red)' : 'var(--stone)',
              padding: '12px 0',
              borderBottom: '1px solid var(--border)',
            }}>
              {link.label}
            </Link>
          ))}
          <Link to="/quote" className="btn-primary" style={{ marginTop: 16, display: 'inline-flex' }}>
            Get a Quote
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
