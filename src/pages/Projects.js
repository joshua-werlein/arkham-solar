import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Zap, Calendar, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import FacebookIcon from '../components/FacebookIcon';
import heroBg from '../ApexSolar.png';
import Seo from '../components/Seo';

const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61590641048935';

const projects = [
  {
    id: 1,
    title: 'Suburban Rooftop Install',
    type: 'Residential Solar',
    location: 'Chippewa Valley',
    year: '2024',
    capacity: '12kW',
    desc: 'South-facing rooftop array on a family home — clean panel lines, tucked wiring, and production that covers the bulk of the monthly bill.',
    category: 'residential',
    images: ['/projects/rooftop-array-closeup.jpg', '/projects/rooftop-suburban-home.jpg' ],
  },
  {
    id: 2,
    title: 'Modern Farmhouse New Build',
    type: 'Construction + Solar',
    location: 'Buffalo County',
    year: '2025',
    capacity: '18kW',
    desc: 'Ground-up construction with solar designed in from the first blueprint — roof pitch, orientation, and electrical all planned around the array.',
    category: 'construction',
    images: ['/projects/farmhouse-new-build.jpg'],
  },
  {
    id: 3,
    title: 'Lakeside Two-Story Retrofit',
    type: 'Residential Solar',
    location: 'Lakeshore Property',
    year: '2024',
    capacity: '16kW',
    desc: 'Multi-plane rooftop retrofit on a two-story lake home — panels split across roof faces to maximize sun exposure through the day.',
    category: 'residential',
    images: ['/projects/lakeside-two-story.jpg'],
  },
  {
    id: 4,
    title: 'Working Farm Ground Mounts',
    type: 'Ground Mount Solar',
    location: 'Buffalo County',
    year: '2023',
    capacity: '40kW',
    desc: 'Dual ground-mount arrays powering a working farm — sited on unused hillside pasture to offset barn, silo, and equipment loads.',
    category: 'ground-mount',
    images: ['/projects/farm-hillside-arrays.jpg', '/projects/farm-ground-mount-silo.jpg'],
  },
  {
    id: 5,
    title: 'Off-Grid Workshop',
    type: 'Construction + Solar',
    location: 'Rural Wisconsin',
    year: '2024',
    capacity: '10kW',
    desc: 'Standalone workshop built with its own solar array, battery storage, and mini-split heating and cooling — fully functional without a grid tie.',
    category: 'construction',
    images: ['/projects/offgrid-workshop.jpg'],
  },
  {
    id: 6,
    title: 'Woodland Ground Mount',
    type: 'Ground Mount Solar',
    location: 'Chippewa Valley',
    year: '2022',
    capacity: '24kW',
    desc: 'Field-sited ground mount array in a woodland clearing — engineered footings and optimal tilt for year-round production, snow or shine.',
    category: 'ground-mount',
    images: ['/projects/ground-mount-autumn.jpg', '/projects/ground-mount-sunset.jpg', '/projects/ground-mount-field-1.jpg', '/projects/ground-mount-field-2.jpg'],
  },
];

const categories = ['all', 'residential', 'ground-mount', 'construction'];
const categoryLabel = (cat) => {
  if (cat === 'all') return 'All Projects';
  if (cat === 'ground-mount') return 'Ground Mount';
  return cat.charAt(0).toUpperCase() + cat.slice(1);
};

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null); // { project, index }
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback((dir) => {
    setLightbox(lb => {
      if (!lb) return lb;
      const n = lb.project.images.length;
      return { ...lb, index: (lb.index + dir + n) % n };
    });
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, close, step]);

  return (
    <main id="main-content">
      <Seo
        title="Projects | Apex Solar and Construction"
        description="See completed solar and construction projects across Buffalo County and the Chippewa Valley, WI."
        path="/projects"
      />
      {/* Hero */}
      <section style={{ position: 'relative', height: 360, display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <img src={heroBg} alt="" aria-hidden style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.25)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--black) 0%, transparent 60%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: 64 }}>
          <div className="section-label" style={{ marginBottom: 8, color: '#D6B64A', fontSize: 15, fontWeight: 700 }}>Our Work</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 6vw, 80px)', color: 'var(--hero-heading)', letterSpacing: 3 }}>PROJECTS</h1>
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
              color: filter === cat ? '#FFFFFF' : 'var(--copy)',
              border: '1px solid', borderColor: filter === cat ? 'var(--red)' : 'var(--border)',
              borderRadius: 2, transition: 'all 0.2s',
            }}>
              {categoryLabel(cat)}
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
                background: 'var(--charcoal)',
                transition: 'background 0.2s',
                position: 'relative', overflow: 'hidden',
                display: 'flex', flexDirection: 'column',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--surface)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--charcoal)'}>
                <button
                  onClick={() => setLightbox({ project, index: 0 })}
                  aria-label={`View photos of ${project.title}`}
                  style={{ display: 'block', width: '100%', padding: 0, position: 'relative', cursor: 'zoom-in' }}>
                  <img src={project.images[0]} alt={project.title} loading="lazy"
                    style={{ width: '100%', aspectRatio: '16 / 10', objectFit: 'cover', display: 'block' }} />
                  {project.images.length > 1 && (
                    <span style={{
                      position: 'absolute', bottom: 10, right: 10,
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      background: 'rgba(10,10,10,0.75)', color: 'var(--stone)',
                      fontFamily: 'var(--font-accent)', fontSize: 11, fontWeight: 600, letterSpacing: 1,
                      padding: '4px 10px', borderRadius: 2,
                    }}>
                      <Camera size={12} /> {project.images.length} PHOTOS
                    </span>
                  )}
                </button>
                <div style={{ padding: '32px 36px 40px', borderLeft: '3px solid var(--gold)', flex: 1 }}>
                  <div style={{ fontFamily: 'var(--font-accent)', fontSize: 12, fontWeight: 700, letterSpacing: 4, color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 12 }}>{project.type}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--stone)', letterSpacing: 1, marginBottom: 12 }}>{project.title}</h3>
                  <p style={{ color: 'var(--copy)', fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>{project.desc}</p>
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
              </div>
            ))}
          </div>

          {/* Facebook CTA */}
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-outline"
              style={{ borderWidth: 2, borderColor: 'var(--gold)', color: 'var(--gold)', fontWeight: 600 }}>
              <FacebookIcon size={16} color="#1877F2" /> See More on Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div onClick={close} role="dialog" aria-modal="true" style={{
          position: 'fixed', inset: 0, zIndex: 2000,
          background: 'rgba(5,5,5,0.94)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 24,
        }}>
          <button onClick={close} aria-label="Close" style={{ position: 'absolute', top: 20, right: 20, color: 'var(--stone)', zIndex: 2 }}>
            <X size={32} />
          </button>

          {lightbox.project.images.length > 1 && (
            <button onClick={e => { e.stopPropagation(); step(-1); }} aria-label="Previous photo"
              style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--stone)', zIndex: 2, padding: 12 }}>
              <ChevronLeft size={36} />
            </button>
          )}

          <figure onClick={e => e.stopPropagation()} style={{ maxWidth: '92vw', maxHeight: '86vh', textAlign: 'center' }}>
            <img
              src={lightbox.project.images[lightbox.index]}
              alt={`${lightbox.project.title} — ${lightbox.index + 1} of ${lightbox.project.images.length}`}
              style={{ maxWidth: '92vw', maxHeight: '78vh', objectFit: 'contain', display: 'block', margin: '0 auto' }}
            />
            <figcaption style={{ marginTop: 16 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--stone)', letterSpacing: 1 }}>{lightbox.project.title}</span>
              {lightbox.project.images.length > 1 && (
                <span style={{ color: 'var(--muted)', fontSize: 13, marginLeft: 12 }}>
                  {lightbox.index + 1} / {lightbox.project.images.length}
                </span>
              )}
            </figcaption>
          </figure>

          {lightbox.project.images.length > 1 && (
            <button onClick={e => { e.stopPropagation(); step(1); }} aria-label="Next photo"
              style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--stone)', zIndex: 2, padding: 12 }}>
              <ChevronRight size={36} />
            </button>
          )}
        </div>
      )}

      {/* CTA */}
      <section style={{ padding: '80px 0', textAlign: 'center', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="ghost-a" style={{ left: '50%', transform: 'translateX(-50%)', top: -80, opacity: 0.03 }}>A</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4vw, 56px)', color: 'var(--stone)', letterSpacing: 2, marginBottom: 16 }}>YOUR PROJECT NEXT</h2>
          <p style={{ color: 'var(--copy)', marginBottom: 40, maxWidth: 480, margin: '0 auto 40px' }}>Join our growing list of satisfied clients. Get a free quote and see what Apex Solar and Construction can do for you.</p>
          <Link to="/quote" className="btn-primary">Start Your Project <ArrowRight size={16} /></Link>
        </div>
      </section>
    </main>
  );
}
