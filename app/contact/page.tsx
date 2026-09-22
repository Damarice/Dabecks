'use client';

import { useState } from 'react';
import PageHero from '@/app/components/PageHero';
import Icon from '@/app/components/Icon';

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
      <PageHero
        image="/hero-contact.jpg"
        eyebrow="Reach Out"
        heading="Contact Us"
        subtext="Get in touch with our team for enquiries, quotes, and support."
      />

      {/* ══ FORM + INFO ════════════════════════════════════════ */}
      <section className="ds-section" style={{ background: 'var(--color-surface)' }}>
        <div className="ds-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Form */}
            <div className="lg:col-span-3" style={{ background: '#ffffff', padding: '3rem', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>Get Started</span>
              <h2 className="ds-h2" style={{ color: 'var(--color-brand-navy)', marginBottom: '0.5rem' }}>
                Request a Quote / Site Assessment
              </h2>
              <span className="ds-accent-line" style={{ marginBottom: '2rem' }} />

              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="ds-label-form">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="ds-input"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handle}
                    />
                  </div>
                  <div>
                    <label className="ds-label-form">Company / Organisation</label>
                    <input
                      type="text"
                      name="company"
                      className="ds-input"
                      placeholder="Your Company Name"
                      value={form.company}
                      onChange={handle}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="ds-label-form">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="ds-input"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handle}
                    />
                  </div>
                  <div>
                    <label className="ds-label-form">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="ds-input"
                      placeholder="+254 700 000 000"
                      value={form.phone}
                      onChange={handle}
                    />
                  </div>
                </div>
                
                {/* What do you need? - Regular dropdown */}
                <div>
                  <label className="ds-label-form">What do you need? *</label>
                  <select
                    name="service"
                    required
                    className="ds-input"
                    value={form.service}
                    onChange={handle}
                    style={{ cursor: 'pointer' }}
                  >
                    <option value="">Select a service</option>
                    <option value="laundry">Laundry equipment</option>
                    <option value="kitchen">Kitchen equipment</option>
                    <option value="hvac">HVAC</option>
                    <option value="installation">Installation</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="replacement">Replacement/upgrade</option>
                    <option value="new-facility">New facility/project</option>
                    <option value="consultancy">Consultancy</option>
                  </select>
                </div>

                <div>
                  <label className="ds-label-form">Tell us about your project *</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="ds-input"
                    placeholder="Describe your project requirements, facility type, timeline, etc..."
                    value={form.message}
                    onChange={handle}
                    style={{ resize: 'vertical' }}
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="ds-btn ds-btn-primary ds-btn-lg" 
                  style={{ justifyContent: 'center' }}
                >
                  Submit Request
                </button>
              </form>
            </div>

            {/* Info panel */}
            <div
              className="lg:col-span-2"
              style={{
                background: 'var(--color-brand-navy)',
                padding: '3rem 2.5rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span className="ds-eyebrow" style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--color-brand-cyan)' }}>Find Us</span>
              <h2 className="ds-h2" style={{ color: '#ffffff', marginBottom: '0.5rem' }}>
                Contact Information
              </h2>
              <span className="ds-accent-line" style={{ marginBottom: '2.5rem', background: 'var(--color-brand-cyan)' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', flex: 1 }}>
                {[
                  {
                    iconName: 'location' as const,
                    title: 'Location',
                    content: 'Lunga Lunga Square, Lunga Lunga Road\nIndustrial Area, P.O. Box 103513-00100\nNairobi, Kenya',
                  },
                  {
                    iconName: 'phone' as const,
                    title: 'Phone',
                    content: '+254 729 212 254\n+254 733 788 357',
                  },
                  {
                    iconName: 'email' as const,
                    title: 'Email',
                    content: 'info@dabeckslaundry.com',
                  },
                  {
                    iconName: 'clock' as const,
                    title: 'Business Hours',
                    content: 'Mon – Fri: 8:00 AM – 5:00 PM\nSaturday: 9:00 AM – 1:00 PM',
                  },
                ].map(({ iconName, title, content }) => (
                  <div key={title} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        background: 'var(--color-brand-cyan)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Icon name={iconName} style={{ color: 'var(--color-brand-navy)', fontSize: '1.125rem' }} />
                    </div>
                    <div>
                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '0.8125rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          color: 'var(--color-brand-cyan)',
                          marginBottom: '0.375rem',
                        }}
                      >
                        {title}
                      </h3>
                      <p
                        className="ds-body"
                        style={{ color: 'rgba(255,255,255,0.85)', whiteSpace: 'pre-line', lineHeight: '1.65', fontSize: '0.9375rem' }}
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
