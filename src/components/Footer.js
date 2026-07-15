import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from './FacebookIcon';
import logo from '../arkhamprofilesquare.png';

export default function Footer() {
  return (
    <footer style={{ background: '#080808', borderTop: '1px solid var(--border)', paddingTop: 64, paddingBottom: 32 }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48, marginBottom: 48 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <img src={logo} alt="Arkham Enterprises" style={{ height: 48, width: 48, objectFit: 'contain' }} />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--stone)', letterSpacing: 2 }}>ARKHAM</div>
                <div style={{ fontFamily: 'var(--font-accent)', fontSize: 9, letterSpacing: 4, color: '#D6B64A' }}>ENTERPRISES</div>
              </div>
            </div>
            <p style={{ fontSize: 13, color: '#D6E4F0', lineHeight: 1.7, maxWidth: 240 }}>
              Apex Solar and Construction — powering communities with expert solar solutions and quality construction.
            </p>
            <a href="https://www.facebook.com/profile.php?id=61590641048935" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 20, color: '#D6E4F0', fontSize: 13, transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--stone)'}
              onMouseLeave={e => e.currentTarget.style.color = '#D6E4F0'}>
              <span style={{ width: 34, height: 34, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 2, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <FacebookIcon size={16} color="#D6B64A" />
              </span>
              Find us on Facebook
            </a>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-accent)', fontSize: 11, letterSpacing: 4, color: '#D6B64A', marginBottom: 16, textTransform: 'uppercase' }}>Navigation</div>
            {[['Home', '/'], ['About Us', '/about'], ['Services', '/services'], ['Projects', '/projects'], ['Contact', '/contact']].map(([label, to]) => (
              <Link key={to} to={to} style={{ display: 'block', color: '#EAE6DF', fontSize: 14, marginBottom: 8, transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--stone)'}
                onMouseLeave={e => e.target.style.color = '#EAE6DF'}>
                {label}
              </Link>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-accent)', fontSize: 11, letterSpacing: 4, color: '#D6B64A', marginBottom: 16, textTransform: 'uppercase' }}>Services</div>
            {['Residential Solar', 'Commercial Solar', 'Construction', 'Energy Storage', 'Maintenance'].map(s => (
              <div key={s} style={{ color: '#EAE6DF', fontSize: 14, marginBottom: 8 }}>{s}</div>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-accent)', fontSize: 11, letterSpacing: 4, color: '#D6B64A', marginBottom: 16, textTransform: 'uppercase' }}>Quick Links</div>
            <Link to="/quote" className="btn-primary" style={{ padding: '14px 24px', fontSize: 12, marginBottom: 12, width: '100%', boxSizing: 'border-box', justifyContent: 'center' }}>Request a Quote</Link>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12, color: 'var(--muted)' }}>
            © {new Date().getFullYear()} Arkham Enterprises — Apex Solar and Construction. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: 'var(--muted)' }}>
            <span style={{ color: 'var(--red)' }}>●</span> Apex Solar and Construction
          </p>
        </div>
      </div>
    </footer>
  );
}
