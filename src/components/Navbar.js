import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../arkhamprofilesquare.png';
import ThemeToggle from './ThemeToggle';

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

  // While floating over the hero photo (unscrolled, transparent header) nav
  // text needs to stay light regardless of theme — the photo is dark-ish in
  // both themes. Once scrolled to the solid header background it switches
  // to the theme-driven colors, which do need to flip in light mode.
  const logoColor = scrolled ? 'var(--stone)' : 'var(--hero-heading)';
  const goldColor = scrolled ? 'var(--gold)' : '#D6B64A';
  const linkColor = scrolled ? 'var(--nav-text)' : 'var(--hero-heading)';

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'var(--surface-97)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      transition: 'background 0.3s ease, border-color 0.3s ease',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src={logo} alt="Arkham Enterprises" style={{ height: 44, width: 44, objectFit: 'contain' }} />
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: logoColor, lineHeight: 1, letterSpacing: 2, transition: 'color 0.3s ease' }}>ARKHAM</div>
<div style={{ fontFamily: 'var(--font-accent)', fontSize: 9, letterSpacing: 4, color: goldColor, textTransform: 'uppercase', textShadow: '0 1px 8px rgba(0,0,0,0.9)', transition: 'color 0.3s ease'}}>ENTERPRISES</div>
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
              color: location.pathname === link.to ? goldColor : linkColor,
              padding: '8px 12px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => { e.target.style.color = scrolled ? 'var(--stone)' : '#FFFFFF'; }}
            onMouseLeave={e => { e.target.style.color = location.pathname === link.to ? goldColor : linkColor; }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <ThemeToggle />
          <Link to="/quote" className="btn-primary" style={{ padding: '10px 24px', fontSize: 15 }}>
            Get a Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div style={{ display: 'none', alignItems: 'center', gap: 12 }} className="mobile-controls">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} style={{ color: logoColor, transition: 'color 0.3s ease' }} className="mobile-menu-btn" aria-label="Toggle menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: 'var(--surface-99)',
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
              color: location.pathname === link.to ? 'var(--gold)' : 'var(--stone)',
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
          .mobile-controls { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
