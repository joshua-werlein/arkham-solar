import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle, Sun, Building2, HardHat, Zap, Home, Factory, Wrench, Shield } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import Seo from '../components/Seo';

const steps = ['Project Type', 'Project Details', 'Your Info', 'Review & Submit'];

const projectTypes = [
  { id: 'residential-solar', icon: Home, label: 'Residential Solar', desc: 'Solar for your home' },
  { id: 'commercial-solar', icon: Building2, label: 'Commercial Solar', desc: 'Solar for your business' },
  { id: 'construction', icon: HardHat, label: 'Construction', desc: 'Construction project' },
  { id: 'energy-storage', icon: Zap, label: 'Energy Storage', desc: 'Battery storage system' },
  { id: 'solar-construction', icon: Factory, label: 'Solar + Construction', desc: 'Combined project' },
  { id: 'maintenance', icon: Wrench, label: 'Maintenance & Monitoring', desc: 'Service for an existing system' },
  { id: 'consultation', icon: Shield, label: 'Energy Consultation', desc: 'Energy audit & ROI analysis' },
  { id: 'other', icon: Sun, label: 'Other / Unsure', desc: 'Tell us more' },
];

const initialData = {
  projectType: '',
  propertyType: '',
  monthlyBill: '',
  roofAge: '',
  timeline: '',
  budget: '',
  notes: '',
  name: '',
  email: '',
  phone: '',
  address: '',
  preferredContact: 'email',
};

// Visually hidden but still available to screen readers.
const srOnly = {
  position: 'absolute', width: 1, height: 1, padding: 0, margin: -1,
  overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0,
};

const fieldLabel = { display: 'block', fontFamily: 'var(--font-accent)', fontSize: 13, fontWeight: 600, letterSpacing: 3, color: 'var(--copy)', textTransform: 'uppercase', marginBottom: 8 };
const fieldError = { color: 'var(--red)', fontSize: 13, marginTop: 6 };

export default function Quote() {
  const [searchParams] = useSearchParams();
  const typeParam = searchParams.get('type');
  const preselectedType = projectTypes.some(p => p.id === typeParam) ? typeParam : '';
  const [step, setStep] = useState(preselectedType ? 1 : 0);
  const [data, setData] = useState({ ...initialData, projectType: preselectedType });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [announcement, setAnnouncement] = useState('');

  const prevStepRef = useRef(step);
  const stepHeadingRef = useRef(null);
  const confirmHeadingRef = useRef(null);
  const projectTypeRef = useRef(null);
  const timelineRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const set = (field, value) => setData(d => ({ ...d, [field]: value }));

  // Announce the new step and move focus to its heading — screen reader
  // and keyboard users otherwise stay "stuck" on the old step's content.
  useEffect(() => {
    if (prevStepRef.current !== step) {
      setAnnouncement(`Step ${step + 1} of ${steps.length}: ${steps[step]}`);
      stepHeadingRef.current?.focus();
    }
    prevStepRef.current = step;
  }, [step]);

  useEffect(() => {
    if (submitted) confirmHeadingRef.current?.focus();
  }, [submitted]);

  const validateStep = (s) => {
    const next = {};
    if (s === 0 && !data.projectType) next.projectType = 'Please select a project type.';
    if (s === 1 && !data.timeline) next.timeline = 'Please select your desired timeline.';
    if (s === 2) {
      if (!data.name.trim()) next.name = 'Please enter your name.';
      if (!data.email.trim()) next.email = 'Please enter your email address.';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) next.email = 'Please enter a valid email address.';
    }
    return next;
  };

  const focusFirstError = (fieldErrors) => {
    if (fieldErrors.projectType) projectTypeRef.current?.focus();
    else if (fieldErrors.timeline) timelineRef.current?.focus();
    else if (fieldErrors.name) nameRef.current?.focus();
    else if (fieldErrors.email) emailRef.current?.focus();
  };

  const goNext = () => {
    const fieldErrors = validateStep(step);
    if (Object.keys(fieldErrors).length) {
      setErrors(fieldErrors);
      focusFirstError(fieldErrors);
      return;
    }
    setErrors({});
    setStep(s => s + 1);
  };

  const goBack = () => {
    setErrors({});
    setStep(s => s - 1);
  };

  const handleSubmit = async () => {
    const fieldErrors = { ...validateStep(0), ...validateStep(1), ...validateStep(2) };
    if (Object.keys(fieldErrors).length) {
      setErrors(fieldErrors);
      const badStep = fieldErrors.projectType ? 0 : fieldErrors.timeline ? 1 : 2;
      setStep(badStep);
      focusFirstError(fieldErrors);
      return;
    }
    setSending(true);
    setError('');
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          projectType: projectTypes.find(p => p.id === data.projectType)?.label || data.projectType,
        }),
      });
      if (!res.ok) throw new Error('send failed');
      setSubmitted(true);
    } catch {
      setError('Something went wrong submitting your request. Please try again, or call/text us at (715) 210-9610.');
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <main id="main-content" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 24px' }}>
        <Seo
          title="Quote Request Received | Apex Solar and Construction"
          description="Your free solar or construction quote request has been received. Our team will follow up within 24 hours."
          path="/quote"
        />
        <div style={{ textAlign: 'center', maxWidth: 480 }}>
          <CheckCircle size={64} color="var(--red)" style={{ margin: '0 auto 32px' }} aria-hidden="true" />
          <h1 ref={confirmHeadingRef} tabIndex={-1} style={{ fontFamily: 'var(--font-display)', fontSize: 56, color: 'var(--stone)', letterSpacing: 3, marginBottom: 16, outline: 'none' }}>QUOTE REQUEST<br />RECEIVED</h1>
          <div style={{ width: 60, height: 2, background: 'var(--red)', margin: '0 auto 24px' }} />
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: 16 }}>
            Thank you, <strong style={{ color: 'var(--stone)' }}>{data.name}</strong>. Our team will review your project details and reach out within <strong style={{ color: 'var(--gold)' }}>24 hours</strong> with a personalized estimate.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main id="main-content" style={{ minHeight: '100vh', paddingTop: 100, paddingBottom: 80 }}>
      <Seo
        title="Request a Quote | Apex Solar and Construction"
        description="Request a free solar or construction quote from Apex Solar and Construction, serving Buffalo County and the Chippewa Valley, WI."
        path="/quote"
      />
      <div aria-live="polite" style={srOnly}>{announcement}</div>
      <div className="container" style={{ maxWidth: 720 }}>
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div className="section-label" style={{ marginBottom: 12, color: 'var(--gold)', fontSize: 15, fontWeight: 700 }}>Free Estimate</div>
          <div className="section-divider" />
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 64px)', color: 'var(--stone)', letterSpacing: 2, lineHeight: 1 }}>REQUEST A QUOTE</h1>
        </div>

        {/* Step Indicator */}
        <div style={{ display: 'flex', gap: 0, marginBottom: 48, border: '1px solid var(--border)', borderRadius: 2, overflow: 'hidden' }}>
          {steps.map((s, i) => (
            <div key={s} aria-current={i === step ? 'step' : undefined} style={{
              flex: 1, padding: '14px 12px', textAlign: 'center',
              background: i === step ? 'var(--red)' : i < step ? 'var(--surface)' : 'var(--charcoal)',
              borderRight: i < steps.length - 1 ? '1px solid var(--border)' : 'none',
              transition: 'background 0.3s',
            }}>
              <div style={{ fontFamily: 'var(--font-accent)', fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', color: i === step ? '#FFFFFF' : i < step ? 'var(--stone)' : 'var(--copy)' }}>
                {i < step ? '✓ ' : `${i + 1}. `}{s}
              </div>
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div style={{ background: 'var(--charcoal)', border: '1px solid var(--border)', borderRadius: 2, padding: '48px', minHeight: 360 }}>
          {/* Step 0: Project Type */}
          {step === 0 && (
            <div>
              <h2 ref={stepHeadingRef} tabIndex={-1} style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: 'var(--stone)', letterSpacing: 2, marginBottom: 8, outline: 'none' }}>WHAT TYPE OF PROJECT?</h2>
              <p style={{ color: 'var(--muted)', marginBottom: 32, fontSize: 14 }}>Select the option that best describes your needs.</p>
              <fieldset style={{ border: 'none', padding: 0, margin: 0 }} aria-describedby={errors.projectType ? 'quote-project-type-error' : undefined}>
                <legend style={srOnly}>What type of project?</legend>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: 12 }}>
                  {projectTypes.map(({ id, icon: Icon, label, desc }, i) => (
                    <button
                      key={id}
                      type="button"
                      ref={i === 0 ? projectTypeRef : undefined}
                      onClick={() => { set('projectType', id); setErrors(e => ({ ...e, projectType: undefined })); }}
                      aria-pressed={data.projectType === id}
                      style={{
                        padding: '24px 20px', background: data.projectType === id ? 'var(--red-glow)' : 'var(--surface)',
                        border: `1px solid ${data.projectType === id ? 'var(--red)' : 'var(--border)'}`,
                        borderRadius: 2, textAlign: 'left', transition: 'all 0.2s', cursor: 'pointer',
                      }}>
                      <Icon size={24} color={data.projectType === id ? 'var(--red)' : 'var(--muted)'} strokeWidth={1.5} style={{ marginBottom: 12 }} aria-hidden="true" />
                      <div style={{ fontFamily: 'var(--font-accent)', fontSize: 14, fontWeight: 700, color: 'var(--stone)', marginBottom: 4 }}>{label}</div>
                      <div style={{ fontSize: 12, color: 'var(--muted)' }}>{desc}</div>
                    </button>
                  ))}
                </div>
              </fieldset>
              {errors.projectType && <p id="quote-project-type-error" role="alert" style={fieldError}>{errors.projectType}</p>}
            </div>
          )}

          {/* Step 1: Project Details */}
          {step === 1 && (
            <div>
              <h2 ref={stepHeadingRef} tabIndex={-1} style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: 'var(--stone)', letterSpacing: 2, marginBottom: 8, outline: 'none' }}>PROJECT DETAILS</h2>
              <p style={{ color: 'var(--muted)', marginBottom: 32, fontSize: 14 }}>Help us understand the scope of your project.</p>
              <div style={{ display: 'grid', gap: 20 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label htmlFor="quote-property-type" style={fieldLabel}>Property Type</label>
                    <select id="quote-property-type" value={data.propertyType} onChange={e => set('propertyType', e.target.value)}>
                      <option value="">Select...</option>
                      <option>Single Family Home</option>
                      <option>Multi-Family</option>
                      <option>Commercial Building</option>
                      <option>Industrial / Warehouse</option>
                      <option>Farm / Agricultural</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="quote-monthly-bill" style={fieldLabel}>Monthly Electric Bill</label>
                    <select id="quote-monthly-bill" value={data.monthlyBill} onChange={e => set('monthlyBill', e.target.value)}>
                      <option value="">Select...</option>
                      <option>Under $100</option>
                      <option>$100 – $250</option>
                      <option>$250 – $500</option>
                      <option>$500 – $1,000</option>
                      <option>Over $1,000</option>
                    </select>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label htmlFor="quote-timeline" style={fieldLabel}>Desired Timeline *</label>
                    <select
                      id="quote-timeline"
                      required
                      ref={timelineRef}
                      value={data.timeline}
                      onChange={e => { set('timeline', e.target.value); setErrors(er => ({ ...er, timeline: undefined })); }}
                      aria-invalid={errors.timeline ? 'true' : undefined}
                      aria-describedby={errors.timeline ? 'quote-timeline-error' : undefined}
                    >
                      <option value="">Select...</option>
                      <option>As soon as possible</option>
                      <option>1–3 months</option>
                      <option>3–6 months</option>
                      <option>6–12 months</option>
                      <option>Just exploring</option>
                    </select>
                    {errors.timeline && <p id="quote-timeline-error" role="alert" style={fieldError}>{errors.timeline}</p>}
                  </div>
                  <div>
                    <label htmlFor="quote-budget" style={fieldLabel}>Budget Range</label>
                    <select id="quote-budget" value={data.budget} onChange={e => set('budget', e.target.value)}>
                      <option value="">Select...</option>
                      <option>Under $15,000</option>
                      <option>$15,000 – $30,000</option>
                      <option>$30,000 – $75,000</option>
                      <option>$75,000 – $200,000</option>
                      <option>Over $200,000</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="quote-notes" style={fieldLabel}>Additional Notes</label>
                  <textarea id="quote-notes" rows={4} value={data.notes} onChange={e => set('notes', e.target.value)} placeholder="Tell us anything else that would help us prepare your estimate..." style={{ resize: 'vertical' }} />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Contact Info */}
          {step === 2 && (
            <div>
              <h2 ref={stepHeadingRef} tabIndex={-1} style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: 'var(--stone)', letterSpacing: 2, marginBottom: 8, outline: 'none' }}>YOUR INFORMATION</h2>
              <p style={{ color: 'var(--muted)', marginBottom: 32, fontSize: 14 }}>So we can reach you with your personalized estimate.</p>
              <div style={{ display: 'grid', gap: 20 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label htmlFor="quote-name" style={fieldLabel}>Full Name *</label>
                    <input
                      id="quote-name"
                      required
                      ref={nameRef}
                      value={data.name}
                      onChange={e => { set('name', e.target.value); setErrors(er => ({ ...er, name: undefined })); }}
                      placeholder="John Smith"
                      aria-invalid={errors.name ? 'true' : undefined}
                      aria-describedby={errors.name ? 'quote-name-error' : undefined}
                    />
                    {errors.name && <p id="quote-name-error" role="alert" style={fieldError}>{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="quote-email" style={fieldLabel}>Email *</label>
                    <input
                      id="quote-email"
                      required
                      type="email"
                      ref={emailRef}
                      value={data.email}
                      onChange={e => { set('email', e.target.value); setErrors(er => ({ ...er, email: undefined })); }}
                      placeholder="john@example.com"
                      aria-invalid={errors.email ? 'true' : undefined}
                      aria-describedby={errors.email ? 'quote-email-error' : undefined}
                    />
                    {errors.email && <p id="quote-email-error" role="alert" style={fieldError}>{errors.email}</p>}
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label htmlFor="quote-phone" style={fieldLabel}>Phone</label>
                    <input id="quote-phone" type="tel" value={data.phone} onChange={e => set('phone', e.target.value)} placeholder="(555) 000-0000" />
                  </div>
                  <div>
                    <label htmlFor="quote-address" style={fieldLabel}>Property Address</label>
                    <input id="quote-address" value={data.address} onChange={e => set('address', e.target.value)} placeholder="123 Main St, City, State" />
                  </div>
                </div>
                <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
                  <legend style={{ fontFamily: 'var(--font-accent)', fontSize: 11, letterSpacing: 3, color: 'var(--muted)', textTransform: 'uppercase', marginBottom: 12, padding: 0 }}>Preferred Contact Method</legend>
                  <div style={{ display: 'flex', gap: 16 }}>
                    {['email', 'phone', 'either'].map(method => (
                      <button key={method} type="button" onClick={() => set('preferredContact', method)} aria-pressed={data.preferredContact === method} style={{
                        padding: '10px 20px', borderRadius: 2, fontSize: 13, fontFamily: 'var(--font-accent)', fontWeight: 600, letterSpacing: 1,
                        textTransform: 'capitalize', cursor: 'pointer', transition: 'all 0.2s',
                        background: data.preferredContact === method ? 'var(--red)' : 'var(--surface)',
                        color: data.preferredContact === method ? 'white' : 'var(--muted)',
                        border: `1px solid ${data.preferredContact === method ? 'var(--red)' : 'var(--border)'}`,
                      }}>{method}</button>
                    ))}
                  </div>
                </fieldset>
              </div>
            </div>
          )}

          {/* Step 3: Review */}
          {step === 3 && (
            <div>
              <h2 ref={stepHeadingRef} tabIndex={-1} style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: 'var(--stone)', letterSpacing: 2, marginBottom: 8, outline: 'none' }}>REVIEW & SUBMIT</h2>
              <p style={{ color: 'var(--muted)', marginBottom: 32, fontSize: 14 }}>Everything look right? Hit Submit and we'll be in touch.</p>
              <div style={{ display: 'grid', gap: 16 }}>
                {[
                  { label: 'Project Type', value: projectTypes.find(p => p.id === data.projectType)?.label || data.projectType },
                  { label: 'Property Type', value: data.propertyType || 'Not specified' },
                  { label: 'Monthly Bill', value: data.monthlyBill || 'Not specified' },
                  { label: 'Timeline', value: data.timeline },
                  { label: 'Budget', value: data.budget || 'Not specified' },
                  { label: 'Name', value: data.name },
                  { label: 'Email', value: data.email },
                  { label: 'Phone', value: data.phone || 'Not provided' },
                  { label: 'Address', value: data.address || 'Not provided' },
                  { label: 'Contact via', value: data.preferredContact },
                ].map(({ label, value }) => (
                  <div key={label} style={{ display: 'flex', gap: 16, padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
                    <div style={{ fontFamily: 'var(--font-accent)', fontSize: 11, letterSpacing: 3, color: 'var(--muted)', textTransform: 'uppercase', minWidth: 140 }}>{label}</div>
                    <div style={{ color: 'var(--stone)', fontSize: 14 }}>{value}</div>
                  </div>
                ))}
                {data.notes && (
                  <div style={{ padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
                    <div style={{ fontFamily: 'var(--font-accent)', fontSize: 13, fontWeight: 600, letterSpacing: 3, color: 'var(--copy)', textTransform: 'uppercase', marginBottom: 8 }}>Notes</div>
                    <div style={{ color: 'var(--stone)', fontSize: 14, lineHeight: 1.6 }}>{data.notes}</div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24 }}>
          <button onClick={goBack} disabled={step === 0} className="btn-outline" style={{ opacity: step === 0 ? 0.3 : 1, pointerEvents: step === 0 ? 'none' : 'auto' }}>
            <ArrowLeft size={16} aria-hidden="true" /> Back
          </button>
          {step < steps.length - 1 ? (
            <button onClick={goNext} className="btn-primary">
              Next <ArrowRight size={16} aria-hidden="true" />
            </button>
          ) : (
            <button onClick={handleSubmit} className="btn-primary" disabled={sending} style={{ opacity: sending ? 0.6 : 1 }}>
              {sending ? 'Submitting...' : 'Submit Quote Request'} <ArrowRight size={16} aria-hidden="true" />
            </button>
          )}
        </div>
        {error && (
          <p role="alert" style={{ color: 'var(--stone)', fontSize: 14, lineHeight: 1.6, marginTop: 16, textAlign: 'right' }}>{error}</p>
        )}
      </div>
    </main>
  );
}
