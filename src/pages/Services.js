import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Building2, HardHat, Zap, Wrench, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import heroBg from '../ApexSolar.png';
import Seo from '../components/Seo';

const services = [
  {
    icon: Sun,
    title: 'Residential Solar',
    tagline: 'Powering homes with clean energy',
    desc: 'Custom-designed solar systems for your home. We handle everything from energy audit and design to installation, permitting, and utility interconnection.',
    features: ['Custom system design', 'Full permitting support', 'Utility interconnection', '25-year panel warranty', 'Performance monitoring'],
  },
  {
    icon: Building2,
    title: 'Commercial Solar',
    tagline: 'Scale your energy independence',
    desc: 'Large-scale commercial solar arrays engineered to dramatically reduce operating costs while demonstrating your commitment to sustainability.',
    features: ['Rooftop & ground mount', 'Carport canopies', 'Battery storage integration', 'Energy management systems', 'Tax credit guidance'],
  },
  {
    icon: HardHat,
    title: 'Construction Services',
    tagline: 'Built right, built to last',
    desc: 'Full-service construction capabilities supporting every phase of your build — from structural reinforcement for solar loads to complete new builds.',
    features: ['Structural engineering', 'Roof reinforcement', 'Electrical upgrades', 'New construction', 'Renovation & remodel'],
  },
  {
    icon: Zap,
    title: 'Energy Storage',
    tagline: 'Power on your terms',
    desc: 'Battery storage systems that pair with your solar installation to provide backup power and maximize your return on energy investment.',
    features: ['Tesla Powerwall certified', 'LG Chem systems', 'Load management', 'Grid independence options', 'Smart home integration'],
  },
  {
    icon: Wrench,
    title: 'Maintenance & Monitoring',
    tagline: 'Peak performance, always',
    desc: 'Proactive maintenance programs and real-time monitoring to ensure your system performs at maximum efficiency throughout its lifetime.',
    features: ['24/7 system monitoring', 'Annual inspections', 'Panel cleaning', 'Inverter servicing', 'Performance reporting'],
  },
  {
    icon: Shield,
    title: 'Energy Consultation',
    tagline: 'Strategy before investment',
    desc: 'In-depth energy audits and ROI analysis to help you make informed decisions before committing to any system.',
    features: ['Energy usage analysis', 'ROI projections', 'Incentive identification', 'System sizing', 'Vendor-neutral advice'],
  },
];

export default function Services() {
  return (
    <main id="main-content">
      <Seo
        title="Services | Apex Solar and Construction"
        description="Residential & commercial solar, construction, energy storage, and maintenance across Buffalo County and the Chippewa Valley, WI."
        path="/services"
      />
      {/* Hero */}
      <section style={{ position: 'relative', height: 360, display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <img src={heroBg} alt="" aria-hidden style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.25)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--black) 0%, transparent 60%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: 64 }}>
          <div className="section-label" style={{ marginBottom: 8, color: '#D6B64A', fontSize: 15, fontWeight: 700 }}>What We Offer</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 6vw, 80px)', color: 'var(--hero-heading)', letterSpacing: 3 }}>OUR SERVICES</h1>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gap: 2, background: 'var(--border)' }}>
            {services.map(({ icon: Icon, title, tagline, desc, features }, i) => (
              <div key={title} className="service-row" style={{
                background: i % 2 === 0 ? 'var(--black)' : 'var(--charcoal)',
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64,
                padding: '64px', alignItems: 'center',
              }}>
                <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                    <Icon size={28} color="var(--gold)" strokeWidth={1.5} />
                    <span style={{ fontFamily: 'var(--font-accent)', fontSize: 13, fontWeight: 700, letterSpacing: 4, color: 'var(--gold)', textTransform: 'uppercase' }}>{tagline}</span>
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 3vw, 48px)', color: 'var(--stone)', letterSpacing: 2, marginBottom: 16 }}>{title.toUpperCase()}</h2>
                  <p style={{ color: 'var(--copy)', lineHeight: 1.8, marginBottom: 32 }}>{desc}</p>
                  <Link to="/quote" className="btn-primary" style={{ fontSize: 12 }}>Request This Service <ArrowRight size={14} /></Link>
                </div>
                <div style={{ order: i % 2 === 0 ? 1 : 0, padding: '32px', background: 'var(--surface)', borderLeft: '2px solid var(--gold)' }}>
                  <div style={{ fontFamily: 'var(--font-accent)', fontSize: 11, letterSpacing: 4, color: 'var(--stone)', textTransform: 'uppercase', marginBottom: 20 }}>Includes</div>
                  {features.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                      <CheckCircle size={16} color="var(--gold)" strokeWidth={2} style={{ flexShrink: 0 }} />
                      <span style={{ color: 'var(--copy)', fontSize: 14 }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: 'var(--red)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 56px)', color: 'var(--white)', letterSpacing: 3, marginBottom: 16 }}>NOT SURE WHERE TO START?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 40, maxWidth: 480, margin: '0 auto 40px' }}>Our team will walk you through your options and recommend the right solution for your needs and budget.</p>
          <Link to="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'var(--ink)', color: '#FFFFFF',
            fontFamily: 'var(--font-accent)', fontWeight: 700, fontSize: 14,
            letterSpacing: 2, textTransform: 'uppercase', padding: '16px 40px', borderRadius: 2,
          }}>
            Talk to an Expert <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <style>{`@media(max-width:768px){
        .service-row{grid-template-columns:1fr !important; padding:40px 24px !important; gap:32px !important;}
        .service-row > div { order: 0 !important; }
      }`}</style>
    </main>
  );
}
