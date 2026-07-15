// Cloudflare Worker: serves the static site and handles form submissions via Resend.

const esc = (s = '') =>
  String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });

const isEmail = (s = '') => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

async function sendEmail(env, { subject, html, replyTo }) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.FROM_EMAIL,
      to: [env.TO_EMAIL],
      reply_to: replyTo,
      subject,
      html,
    }),
  });
  if (!res.ok) {
    const detail = await res.text();
    console.error('Resend error:', res.status, detail);
    throw new Error('Email send failed');
  }
}

const row = (label, value) =>
  value
    ? `<tr><td style="padding:6px 12px 6px 0;color:#666;font-size:13px;text-transform:uppercase;letter-spacing:1px;vertical-align:top;white-space:nowrap;">${label}</td><td style="padding:6px 0;color:#111;font-size:15px;">${esc(value)}</td></tr>`
    : '';

async function handleContact(request, env) {
  const body = await request.json();

  // Honeypot: real users never fill this field
  if (body.company) return json({ ok: true });

  const { name, email, phone, subject, message } = body;
  if (!name || !isEmail(email) || !message) return json({ error: 'Missing required fields' }, 400);

  await sendEmail(env, {
    subject: `Website Contact: ${subject ? subject.slice(0, 100) : name}`,
    replyTo: email,
    html: `
      <h2 style="font-family:sans-serif;color:#111;">New Contact Message — arkhamsolar.com</h2>
      <table style="font-family:sans-serif;border-collapse:collapse;">
        ${row('Name', name)}
        ${row('Email', email)}
        ${row('Phone', phone)}
        ${row('Subject', subject)}
      </table>
      <p style="font-family:sans-serif;color:#111;font-size:15px;line-height:1.6;white-space:pre-wrap;border-top:1px solid #ddd;padding-top:12px;">${esc(message)}</p>
      <p style="font-family:sans-serif;color:#999;font-size:12px;">Reply to this email to respond directly to the customer.</p>`,
  });

  return json({ ok: true });
}

async function handleQuote(request, env) {
  const body = await request.json();

  if (body.company) return json({ ok: true });

  const { name, email } = body;
  if (!name || !isEmail(email)) return json({ error: 'Missing required fields' }, 400);

  await sendEmail(env, {
    subject: `Quote Request: ${body.projectType || 'General'} — ${name.slice(0, 60)}`,
    replyTo: email,
    html: `
      <h2 style="font-family:sans-serif;color:#111;">New Quote Request — arkhamsolar.com</h2>
      <table style="font-family:sans-serif;border-collapse:collapse;">
        ${row('Project Type', body.projectType)}
        ${row('Property Type', body.propertyType)}
        ${row('Monthly Bill', body.monthlyBill)}
        ${row('Roof Age', body.roofAge)}
        ${row('Timeline', body.timeline)}
        ${row('Budget', body.budget)}
        ${row('Name', name)}
        ${row('Email', email)}
        ${row('Phone', body.phone)}
        ${row('Address', body.address)}
        ${row('Contact via', body.preferredContact)}
      </table>
      ${body.notes ? `<p style="font-family:sans-serif;color:#111;font-size:15px;line-height:1.6;white-space:pre-wrap;border-top:1px solid #ddd;padding-top:12px;"><strong>Notes:</strong><br/>${esc(body.notes)}</p>` : ''}
      <p style="font-family:sans-serif;color:#999;font-size:12px;">Reply to this email to respond directly to the customer.</p>`,
  });

  return json({ ok: true });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.startsWith('/api/')) {
      if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405);
      try {
        if (url.pathname === '/api/contact') return await handleContact(request, env);
        if (url.pathname === '/api/quote') return await handleQuote(request, env);
        return json({ error: 'Not found' }, 404);
      } catch (err) {
        console.error(err);
        return json({ error: 'Failed to send. Please try again or call us.' }, 500);
      }
    }

    return env.ASSETS.fetch(request);
  },
};
