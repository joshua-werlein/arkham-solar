import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Target, Clock } from 'lucide-react';
import logo from '../arkhamprofilesquare.png';
import heroBg from '../ApexSolar.png';

const values = [
  { icon: Award, title: 'Quality First', desc: 'Every installation meets the highest industry standards, backed by our workmanship guarantee.' },
  { icon: Users, title: 'Client Focused', desc: 'We work closely with each client to deliver solutions tailored to their specific needs and goals.' },
  { icon: Target, title: 'Results Driven', desc: 'Our projects are measured by real energy savings and long-term performance.' },
  { icon: Clock, title: 'On Schedule', desc: 'We respect your time. Projects are completed on budget, on schedule, every time.' },
];

export default function About() {
  return (
    <main>
      {/* Page Hero */}
      <section style={{ position: 'relative', height: 360, display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <img src={heroBg} alt="" aria-hidden style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.25)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--black) 0%, transparent 60%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: 64 }}>
          <div className="section-label" style={{ marginBottom: 8 }}>Our Story</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 6vw, 80px)', color: 'var(--stone)', letterSpacing: 3 }}>ABOUT US</h1>
        </div>
      </section>

      {/* Mission */}
      <section style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="ghost-a" style={{ right: -80, top: 0 }}>A</div>
        <div className="container grid-collapse" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <div>
            <img src={logo} alt="Arkham Enterprises" style={{ width: '80%', filter: 'drop-shadow(0 0 60px rgba(192,24,26,0.15))' }} />
          </div>
          <div>
            <div className="section-label" style={{ marginBottom: 12, color: '#D6B64A', fontSize: 14, fontWeight: 700 }}>Our Mission</div>
            <div className="section-divider" />
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4vw, 56px)', color: 'var(--stone)', letterSpacing: 2, marginBottom: 24, lineHeight: 1 }}>
              POWERING A<br />BETTER FUTURE
            </h2>
            <p style={{ color: '#D6E4F0', lineHeight: 1.8, marginBottom: 16 }}>
              Arkham Enterprises was founded with a single vision: to make clean, reliable solar energy accessible to every home and business. Through our Apex Solar and Construction division, we operate as a full-service general contractor — handling everything from ground-up construction to solar and energy storage under one roof, with a track record that speaks for itself.
            </p>
            <p style={{ color: '#D6E4F0', lineHeight: 1.8, marginBottom: 32 }}>
              As a general contractor, we manage every phase of your project ourselves — no middlemen, no subcontractor runaround. Every project reflects our commitment to craftsmanship, transparency, and long-term client relationships. We don't just install solar panels — we build partnerships.
            </p>
            <Link to="/contact" className="btn-primary">Work With Us <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: 'var(--charcoal)', padding: '100px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="section-label" style={{ marginBottom: 12, color: '#D6B64A', fontSize: 14, fontWeight: 700 }}>Core Values</div>
            <div className="section-divider" style={{ margin: '0 auto 16px' }} />
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4vw, 56px)', color: 'var(--stone)', letterSpacing: 2 }}>WHAT DRIVES US</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 32 }}>
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{ padding: '40px 32px', background: 'var(--surface)', borderLeft: '2px solid #D6B64A' }}>
                <Icon size={28} color="#D6B64A" strokeWidth={1.5} style={{ marginBottom: 16 }} />
                <h3 style={{ fontFamily: 'var(--font-accent)', fontSize: 18, fontWeight: 700, color: 'var(--stone)', marginBottom: 10 }}>{title}</h3>
                <p style={{ color: '#D6E4F0', fontSize: 14, lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apex Solar brand callout */}
      <section style={{ padding: '80px 0', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ marginBottom: 12, color: '#D6B64A', fontSize: 14, fontWeight: 700 }}>A Division of Arkham Enterprises</div>
          <div className="section-divider" style={{ margin: '0 auto 24px' }} />
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 64px)', color: 'var(--stone)', letterSpacing: 4, marginBottom: 16 }}>
            APEX SOLAR<br />AND CONSTRUCTION
          </h2>
          <p style={{ color: '#D6E4F0', maxWidth: 560, margin: '0 auto 40px', lineHeight: 1.8 }}>
            Our operational division delivering hands-on general contracting, solar installation, construction, and energy storage services across the region — one contractor, start to finish.
          </p>
          <Link to="/services" className="btn-outline" style={{ borderWidth: 2, borderColor: '#D6B64A', color: '#D6B64A', fontWeight: 600 }}>View Services <ArrowRight size={16} /></Link>
        </div>
      </section>
    </main>
  );
}
