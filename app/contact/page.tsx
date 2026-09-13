'use client';

import { useState } from 'react';
import Breadcrumb from '@/app/components/Breadcrumb';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' });

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <div>
      <Breadcrumb items={[{ label: 'Contact' }]} />

      {/* ══ HERO ═══════════════════════════════════════════════ */}
      <section
        className="ds-hero ds-hero-tall"
        style={{ backgroundImage: 'url("/hero-contact.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="ds-hero-overlay-strong" />
        <div className="ds-container relative z-10 w-full" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
          <div style={{ maxWidth: '560px' }}>
            <span className="ds-eyebrow" style={{ color: 'var(--color-brand-cyan)', display: 'block', marginBottom: '1rem' }}>Reach Out</span>
            <h1 className="ds-h1" style={{ color: '#ffffff', marginBottom: '1rem' }}>Contact Us</h1>
            <p className="ds-lead" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Get in touch with our team for enquiries, quotes, and support.
            </p>
          </div>
        </div>
      </section>

      {/* ══ FORM + INFO ════════════════════════════════════════ */}
      <section className="ds-section" style={{ background: '#ffffff' }}>
        <div className="ds-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

            {/* Form */}
            <div>
              <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>Send a Message</span>
              <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginBottom: '0.5rem' }}>
                Send Us a Message
              </h2>
              <span className="ds-accent-line" style={{ marginBottom: '2rem' }} />

              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
                {[
                  { id: 'name',    label: 'Full Name *',            type: 'text',  placeholder: 'John Doe',              required: true },
                  { id: 'email',   label: 'Email Address *',        type: 'email', placeholder: 'john@example.com',       required: true },
                  { id: 'phone',   label: 'Phone Number *',         type: 'tel',   placeholder: '+254 700 000 000',        required: true },
                  { id: 'company', label: 'Company / Organisation', type: 'text',  placeholder: 'Your Company Name',      required: false },
                ].map(({ id, label, type, placeholder, required }) => (
                  <div key={id}>
                    <label className="ds-label-form">{label}</label>
                    <input
                      type={type}
                      id={id}
                      name={id}
                      required={required}
                      className="ds-input"
                      placeholder={placeholder}
                      value={form[id as keyof typeof form]}
                      onChange={handle}
                    />
                  </div>
                ))}
                <div>
                  <label className="ds-label-form">Service Interested In *</label>
                  <select name="service" required className="ds-input" value={form.service} onChange={handle}>
                    <option value="">Select a service</option>
                    <option value="laundry">Laundry Equipment</option>
                    <option value="kitchen">Kitchen Systems</option>
                    <option value="ac">Air Conditioning</option>
                    <option value="consultancy">Engineering Consultancy</option>
                    <option value="maintenance">Maintenance &amp; Repair</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="ds-label-form">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="ds-input"
                    style={{ resize: 'none' }}
                    placeholder="Tell us about your project or inquiry…"
                    value={form.message}
                    onChange={handle}
                  />
                </div>
                <button type="submit" className="ds-btn ds-btn-primary ds-btn-lg" style={{ justifyContent: 'center' }}>
                  Send Message
                </button>
              </form>
            </div>

            {/* Info panel */}
            <div
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>Find Us</span>
              <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginBottom: '0.5rem' }}>
                Contact Information
              </h2>
              <span className="ds-accent-line" style={{ marginBottom: '2rem' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: 1 }}>
                {[
                  {
                    icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></>,
                    title: 'Location',
                    content: 'Baraka Estate along Airport North Road\nNairobi, Kenya',
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
                    title: 'Phone',
                    content: '+254 729 212 254 / +254 733 788 357',
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                    title: 'Email',
                    content: 'info@dabeckslaundry.com',
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
                    title: 'Business Hours',
                    content: 'Mon – Fri: 8:00 AM – 5:00 PM\nSaturday: 9:00 AM – 1:00 PM',
                  },
                ].map(({ icon, title, content }) => (
                  <div key={title} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        background: 'var(--color-brand-navy)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="var(--color-brand-cyan)" viewBox="0 0 24 24">{icon}</svg>
                    </div>
                    <div>
                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1rem',
                          fontWeight: 700,
                          color: 'var(--color-brand-navy)',
                          marginBottom: '0.25rem',
                        }}
                      >
                        {title}
                      </h3>
                      <p
                        className="ds-body"
                        style={{ color: 'var(--color-text-muted)', whiteSpace: 'pre-line', lineHeight: '1.6' }}
                      >
                        {content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
