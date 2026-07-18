import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sun, Building2, Shield, ChevronDown, Zap, HardHat, Wrench } from 'lucide-react';
import logo from '../arkhamprofilesquare.png';
import heroBg from '../arkhamCover.png';
import HeroSunToggle from '../components/HeroSunToggle';
import Seo from '../components/Seo';

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '15MW+', label: 'Solar Installed' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '10+', label: 'Years Experience' },
];

const services = [
  { icon: Sun, title: 'Residential Solar', quoteType: 'residential-solar', desc: 'Custom solar solutions for homes — from design through installation and ongoing support.' },
  { icon: Building2, title: 'Commercial Solar', quoteType: 'commercial-solar', desc: 'Large-scale solar systems for businesses, reducing operational costs and carbon footprint.' },
  { icon: HardHat, title: 'Construction', quoteType: 'construction', desc: 'Full-service construction expertise to support every phase of your build.' },
  { icon: Zap, title: 'Energy Storage', quoteType: 'energy-storage', desc: 'Battery storage systems that maximize your energy independence day and night.' },
  { icon: Wrench, title: 'Maintenance', quoteType: 'maintenance', desc: 'Ongoing maintenance and monitoring to keep your solar system performing at peak efficiency.' },
  { icon: Shield, title: 'Consultation', quoteType: 'consultation', desc: 'Expert energy audits and strategic planning to optimize your investment.' },
];

export default function Home() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  return (
    <main id="main-content">
      <Seo
        title="Home | Apex Solar and Construction"
        description="Solar installation and general contracting serving Buffalo County and the Chippewa Valley, WI. Get a free quote."
        path="/"
      />
      {/* HERO */}
      <section className="hero-section" style={{
        position: 'relative', aspectRatio: '1092 / 605', minHeight: '800px', display: 'flex',
        alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
      }}>
        <img src={heroBg} alt="" aria-hidden className="hero-bg" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'fill', objectPosition: 'center',
        }} />
        <div className="hero-edge-lift" aria-hidden="true" />
        <div className="hero-clouds hero-clouds--dark" aria-hidden="true" />
        <div className="hero-clouds hero-clouds--light" aria-hidden="true" />
        <div className="hero-overlay" />
        <HeroSunToggle />

        <div style={{
          position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 24px',
          opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
          marginTop: -6,
        }}>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(56px, 10vw, 120px)',
            color: 'var(--hero-heading)', lineHeight: 0.9, letterSpacing: 4,
            textShadow: '2px 2px 4px rgba(0,0,0,0.9)',
          }}>
            ARKHAM<br />ENTERPRISES
          </h1>
           <div style={{ fontFamily: 'var(--font-accent)', fontSize: 15, fontWeight: 600, letterSpacing: 3, color: '#D6B64A', marginTop: 16, marginBottom: 5, textTransform: 'uppercase' ,
          textShadow: '2px 2px 4px rgba(0,0,0,0.9)'}}>
            Apex Solar and Construction
          </div>
          <div style={{ width: 60, height: 2, background: 'var(--red)', margin: '24px auto' }} />
          <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', fontWeight: 600, color: 'var(--hero-text)', maxWidth: 560, margin: '32px auto 40px', lineHeight: 1.7, textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
            Professional solar installation and construction services. We build sustainable futures, one project at a time.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: 8 }}>
            <Link to="/quote" className="btn-primary" style={{ fontSize: 15, color: '#FFFFFF' }}>Get a Free Quote <ArrowRight size={16} /></Link>
            <Link to="/services" className="btn-outline" style={{ borderWidth: 2, borderColor: '#D6B64A', color: '#D6B64A', fontSize: 15, fontWeight: 600 }}>Our Services</Link>
          </div>
        </div>

        <a href="#about" style={{
          position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
          color: 'var(--muted)', animation: 'bounce 2s infinite', zIndex: 1,
        }} aria-label="Scroll down">
          <ChevronDown size={28} />
        </a>
        <style>{`@keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(8px)} }`}</style>
      </section>

      {/* STATS */}
      <section style={{ background: 'var(--charcoal)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 1 }}>
          {stats.map(({ value, label }) => (
            <div key={label} style={{ padding: '40px 24px', textAlign: 'center', borderRight: '1px solid var(--border)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 48, color: 'var(--stone)', lineHeight: 1, letterSpacing: 2 }}>{value}</div>
              <div style={{ fontFamily: 'var(--font-accent)', fontSize: 13, fontWeight: 600, letterSpacing: 2, color: 'var(--gold)', textTransform: 'uppercase', marginTop: 8 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section id="about" style={{ paddingTop: 160, paddingBottom: 100, position: 'relative', overflow: 'hidden' }}>
        <div className="ghost-a" style={{ right: -80, top: '50%', transform: 'translateY(-50%)' }}>A</div>
        <div className="container grid-collapse" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <div>
            <div className="section-label" style={{ marginBottom: 12, color: 'var(--gold)' }}>Who We Are</div>
            <div className="section-divider" />
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(42px, 5vw, 64px)', color: 'var(--stone)', lineHeight: 1, letterSpacing: 2, marginBottom: 24 }}>
              BUILT ON<br />EXPERTISE
            </h2>
            <p style={{ color: 'var(--copy)', lineHeight: 1.8, marginBottom: 16 }}>
              Arkham Enterprises operates Apex Solar and Construction — a full-service solar and construction company built on a foundation of technical excellence and client trust.
            </p>
            <p style={{ color: 'var(--copy)', lineHeight: 1.8, marginBottom: 32 }}>
              From residential rooftop installations to large commercial solar arrays, our team delivers end-to-end solutions that reduce energy costs and increase property value.
            </p>
            <Link to="/about" className="btn-outline" style={{ borderWidth: 2, borderColor: 'var(--gold)', color: 'var(--gold)', fontWeight: 600 }}>Learn More About Us <ArrowRight size={14} /></Link>
          </div>
          <div>
            <img src={logo} alt="Arkham Enterprises" style={{
              width: '100%', maxWidth: 400, margin: '0 auto',
              filter: 'drop-shadow(0 0 60px var(--red-glow)) brightness(0.9)',
            }} />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ background: 'var(--charcoal)', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="ghost-a" style={{ left: -80, bottom: -60 }}>A</div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="section-label" style={{ marginBottom: 12, color: 'var(--gold)' }}>What We Do</div>
            <div className="section-divider" style={{ margin: '0 auto 16px' }} />
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(42px, 5vw, 64px)', color: 'var(--stone)', letterSpacing: 2 }}>OUR SERVICES</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 1, border: '1px solid var(--border)', background: 'var(--border)' }}>
          {services.map(({ icon: Icon, title, desc, quoteType }) => (
              <Link key={title} to={`/services#${quoteType}`} style={{
                background: 'var(--charcoal)', padding: '40px 32px',
                transition: 'background 0.2s', display: 'block', textDecoration: 'none',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--surface)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--charcoal)'}>
                <Icon size={32} color="var(--gold)" strokeWidth={1.5} style={{ marginBottom: 16 }} />
                <h3 style={{ fontFamily: 'var(--font-accent)', fontSize: 20, fontWeight: 700, color: 'var(--stone)', marginBottom: 12, letterSpacing: 1 }}>{title}</h3>
                <p style={{ color: 'var(--copy)', fontSize: 14, lineHeight: 1.7 }}>{desc}</p>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/services" className="btn-outline" style={{ borderWidth: 2, borderColor: 'var(--gold)', color: 'var(--gold)', fontWeight: 600 }}>View All Services <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ background: 'var(--red)', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-accent)', fontSize: 18, fontWeight: 700, letterSpacing: 6, color: 'var(--white)', marginBottom: 12 }}>READY TO START?</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 64px)', color: 'var(--white)', letterSpacing: 3, marginBottom: 16 }}>GET YOUR FREE QUOTE TODAY</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: 16, marginBottom: 40, maxWidth: 500, margin: '0 auto 40px' }}>
            Tell us about your project and our team will provide a detailed, no-obligation estimate within 24 hours.
          </p>
          <Link to="/quote" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'var(--ink)', color: '#FFFFFF',
            fontFamily: 'var(--font-accent)', fontWeight: 700, fontSize: 14,
            letterSpacing: 2, textTransform: 'uppercase', padding: '14px 32px', borderRadius: 2,
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--ink-hover)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--ink)'}>
            Request a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
