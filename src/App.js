import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Quote from './pages/Quote';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px' }}>
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(80px, 15vw, 180px)', color: 'var(--red-glow)', lineHeight: 1 }}>404</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 48px)', color: 'var(--stone)', letterSpacing: 2, marginTop: -20, marginBottom: 16 }}>PAGE NOT FOUND</h1>
        <p style={{ color: 'var(--muted)', marginBottom: 32 }}>The page you are looking for does not exist.</p>
        <a href="/" className="btn-primary">Return Home</a>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
