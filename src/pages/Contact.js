import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import FacebookIcon from '../components/FacebookIcon';
import heroBg from '../ApexSolar.png';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '', company: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('send failed');
      setSubmitted(true);
    } catch {
      setError('Something went wrong sending your message. Please try again, or call/text us at (715) 210-9610.');
    } finally {
      setSending(false);
    }
  };

  return (
    <main>
      {/* Hero */}
      <section style={{ position: 'relative', height: 360, display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <img src={heroBg} alt="" aria-hidden style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.25)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--black) 0%, transparent 60%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: 64 }}>
          <div className="section-label" style={{ marginBottom: 8 }}>Get in Touch</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 6vw, 80px)', color: 'var(--stone)', letterSpacing: 3 }}>CONTACT</h1>
        </div>
      </section>

      <section style={{ padding: '100px 0' }}>
        <div className="container grid-collapse" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 80 }}>
          {/* Info */}
          <div>
            <div className="section-label" style={{ marginBottom: 12, color: '#D6B64A', fontSize: 14, fontWeight: 700 }}>Contact Information</div>
            <div className="section-divider" />
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 3vw, 48px)', color: 'var(--stone)', letterSpacing: 2, marginBottom: 32, lineHeight: 1 }}>LET'S BUILD<br />TOGETHER</h2>
            <p style={{ color: '#D6E4F0', lineHeight: 1.8, marginBottom: 48 }}>
              Ready to start your solar or construction project? Reach out and our team will get back to you within one business day.
            </p>

            {[
              { icon: Phone, label: 'Call', value: '(715) 210-9610', href: 'tel:+17152109610' },
              { icon: MessageSquare, label: 'Text', value: '(715) 210-9610', href: 'sms:+17152109610' },
              { icon: Mail, label: 'Email', value: 'redacted@example.com', href: 'mailto:redacted@example.com' },
              { icon: FacebookIcon, label: 'Facebook', value: 'Find us on Facebook', href: 'https://www.facebook.com/profile.php?id=61590641048935' },
              { icon: MapPin, label: 'Service Area', value: 'Regional — contact to confirm' },
              { icon: Clock, label: 'Hours', value: 'Mon–Fri: 8am–6pm' },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} style={{ display: 'flex', gap: 16, marginBottom: 28, alignItems: 'flex-start' }}>
                <div style={{ width: 40, height: 40, background: 'var(--surface)', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid var(--border)' }}>
                  <Icon size={18} color={label === 'Facebook' ? '#1877F2' : '#D6B64A'} strokeWidth={1.5} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-accent)', fontSize: 11, letterSpacing: 3, color: 'var(--muted)', textTransform: 'uppercase', marginBottom: 4 }}>{label}</div>
                  {href ? (
                    <a href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} style={{ color: 'var(--stone)', fontSize: 14, textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>{value}</a>
                  ) : (
                    <div style={{ color: 'var(--stone)', fontSize: 14 }}>{value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '80px 40px', background: 'var(--charcoal)', border: '1px solid var(--border)', borderRadius: 2 }}>
                <CheckCircle size={48} color="#D6B64A" style={{ margin: '0 auto 24px' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 40, color: 'var(--stone)', letterSpacing: 2, marginBottom: 12 }}>MESSAGE SENT</h3>
                <p style={{ color: '#D6E4F0' }}>We'll be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 20 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-accent)', fontSize: 13, fontWeight: 600, letterSpacing: 3, color: '#D6E4F0', textTransform: 'uppercase', marginBottom: 8 }}>Full Name *</label>
                    <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="John Smith" />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-accent)', fontSize: 13, fontWeight: 600, letterSpacing: 3, color: '#D6E4F0', textTransform: 'uppercase', marginBottom: 8 }}>Email *</label>
                    <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="john@example.com" />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-accent)', fontSize: 13, fontWeight: 600, letterSpacing: 3, color: '#D6E4F0', textTransform: 'uppercase', marginBottom: 8 }}>Phone</label>
                    <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="(555) 000-0000" />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-accent)', fontSize: 13, fontWeight: 600, letterSpacing: 3, color: '#D6E4F0', textTransform: 'uppercase', marginBottom: 8 }}>Subject</label>
                    <input value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} placeholder="General inquiry" />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-accent)', fontSize: 13, fontWeight: 600, letterSpacing: 3, color: '#D6E4F0', textTransform: 'uppercase', marginBottom: 8 }}>Message *</label>
                  <textarea required rows={6} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your project or inquiry..." style={{ resize: 'vertical' }} />
                </div>
                {/* Honeypot field — hidden from humans, catches spam bots */}
                <input type="text" name="company" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} tabIndex="-1" autoComplete="off" style={{ position: 'absolute', left: '-9999px', height: 0, opacity: 0 }} aria-hidden="true" />
                {error && (
                  <p style={{ color: 'var(--red)', fontSize: 14, lineHeight: 1.6 }}>{error}</p>
                )}
                <button type="submit" className="btn-primary" disabled={sending} style={{ justifySelf: 'start', padding: '16px 40px', opacity: sending ? 0.6 : 1 }}>
                  {sending ? 'Sending...' : 'Send Message'} <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
