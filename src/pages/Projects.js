import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Zap, Calendar } from 'lucide-react';
import heroBg from '../ApexSolar.png';

const projects = [
  { id: 1, title: 'Downtown Commercial Array', type: 'Commercial Solar', location: 'City Center', year: '2024', capacity: '250kW', desc: 'Rooftop solar installation across a 12-story commercial building. Reduced energy costs by 68%.', category: 'commercial' },
  { id: 2, title: 'Residential Estate System', type: 'Residential Solar', location: 'Lakeside District', year: '2024', capacity: '18kW', desc: 'Full residential solar and battery storage package for a large family home with EV charging integration.', category: 'residential' },
  { id: 3, title: 'Warehouse Solar Canopy', type: 'Commercial Solar', location: 'Industrial Park', year: '2023', capacity: '400kW', desc: 'Ground-mount solar canopy covering 2 acres of warehouse parking. Full battery backup included.', category: 'commercial' },
  { id: 4, title: 'Multi-Family Development', type: 'Construction + Solar', location: 'Eastside', year: '2023', capacity: '90kW', desc: 'New construction of a 24-unit residential complex with integrated solar from the foundation up.', category: 'construction' },
  { id: 5, title: 'Corporate Campus Array', type: 'Commercial Solar', location: 'Tech District', year: '2023', capacity: '1.2MW', desc: 'Flagship commercial installation across a multi-building corporate campus. Largest project to date.', category: 'commercial' },
  { id: 6, title: 'Rural Farm System', type: 'Residential Solar', location: 'Rural County', year: '2022', capacity: '32kW', desc: 'Off-grid capable solar installation with Tesla Powerwall battery bank for a working farm property.', category: 'residential' },
  { id: 7, title: 'Self-Sustaining Smart Home', type: 'Construction + Solar', location: 'Chippewa Valley', year: '2025', capacity: '24kW', desc: 'Ground-up construction of a fully self-sustaining home — solar array, whole-home battery storage, and rainwater systems designed for true energy independence.', category: 'construction' },
  { id: 8, title: 'Storm Shelter & Safe Room', type: 'Construction', location: 'Buffalo County', year: '2025', capacity: 'N/A', desc: 'Reinforced concrete storm shelter built to FEMA P-361 standards with battery-backed emergency power and ventilation. Peace of mind, engineered in.', category: 'construction' },
  { id: 9, title: 'Residential Solar Carport', type: 'Residential Solar', location: 'Mondovi', year: '2025', capacity: '12kW', desc: 'Solar carport for a small-lot property with no usable roof space — covered parking and clean energy production from the same compact footprint.', category: 'residential' },
];

const categories = ['all', 'commercial', 'residential', 'construction'];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <main>
      {/* Hero */}
      <section style={{ position: 'relative', height: 360, display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <img src={heroBg} alt="" aria-hidden style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.25)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--black) 0%, transparent 60%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: 64 }}>
          <div className="section-label" style={{ marginBottom: 8 }}>Our Work</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 6vw, 80px)', color: 'var(--stone)', letterSpacing: 3 }}>PROJECTS</h1>
        </div>
      </section>

      {/* Filter */}
      <section style={{ background: 'var(--charcoal)', borderBottom: '1px solid var(--border)', padding: '24px 0' }}>
        <div className="container" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} style={{
              fontFamily: 'var(--font-accent)', fontSize: 12, fontWeight: 600,
              letterSpacing: 2, textTransform: 'uppercase', padding: '10px 20px',
              background: filter === cat ? 'var(--red)' : 'transparent',
              color: filter === cat ? 'var(--white)' : '#D6E4F0',
              border: '1px solid', borderColor: filter === cat ? 'var(--red)' : 'var(--border)',
              borderRadius: 2, transition: 'all 0.2s',
            }}>
              {cat === 'all' ? 'All Projects' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 2, background: 'var(--border)' }}>
            {filtered.map(project => (
              <div key={project.id} style={{
                background: 'var(--charcoal)', padding: '40px 36px',
                transition: 'background 0.2s',
                position: 'relative', overflow: 'hidden',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--surface)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--charcoal)'}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: 3, height: '100%', background: '#D6B64A' }} />
                <div style={{ fontFamily: 'var(--font-accent)', fontSize: 12, fontWeight: 700, letterSpacing: 4, color: '#D6B64A', textTransform: 'uppercase', marginBottom: 12 }}>{project.type}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--stone)', letterSpacing: 1, marginBottom: 12 }}>{project.title}</h3>
                <p style={{ color: '#D6E4F0', fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>{project.desc}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, borderTop: '1px solid var(--border)', paddingTop: 20 }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--muted)', fontSize: 11, marginBottom: 4 }}><MapPin size={10} /><span>Location</span></div>
                    <div style={{ color: 'var(--stone)', fontSize: 12, fontWeight: 500 }}>{project.location}</div>
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--muted)', fontSize: 11, marginBottom: 4 }}><Zap size={10} /><span>Capacity</span></div>
                    <div style={{ color: 'var(--stone)', fontSize: 12, fontWeight: 500 }}>{project.capacity}</div>
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--muted)', fontSize: 11, marginBottom: 4 }}><Calendar size={10} /><span>Year</span></div>
                    <div style={{ color: 'var(--stone)', fontSize: 12, fontWeight: 500 }}>{project.year}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', textAlign: 'center', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="ghost-a" style={{ left: '50%', transform: 'translateX(-50%)', top: -80, opacity: 0.03 }}>A</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4vw, 56px)', color: 'var(--stone)', letterSpacing: 2, marginBottom: 16 }}>YOUR PROJECT NEXT</h2>
          <p style={{ color: '#D6E4F0', marginBottom: 40, maxWidth: 480, margin: '0 auto 40px' }}>Join our growing list of satisfied clients. Get a free quote and see what Apex Solar and Construction can do for you.</p>
          <Link to="/quote" className="btn-primary">Start Your Project <ArrowRight size={16} /></Link>
        </div>
      </section>
    </main>
  );
}
