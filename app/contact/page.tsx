'use client';

import { useState } from 'react';
import Breadcrumb from '@/app/components/Breadcrumb';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <div className="bg-white">
      <Breadcrumb items={[{ label: 'Contact' }]} />

      {/* Header */}
      <section className="bg-[#1a3a8f] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Reach Out</span>
          <h1 className="text-white font-black text-5xl mt-3 mb-4 leading-tight">Contact Us</h1>
          <p className="text-white/75 text-lg max-w-xl leading-relaxed">Get in touch with our team for inquiries and support</p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Form */}
            <div>
              <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest">Send a Message</span>
              <h2 className="text-[#1a3a8f] font-black text-5xl mt-3 mb-8 leading-tight">Send Us A Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { id: 'name', label: 'Full Name *', type: 'text', placeholder: 'John Doe', required: true },
                  { id: 'email', label: 'Email Address *', type: 'email', placeholder: 'john@example.com', required: true },
                  { id: 'phone', label: 'Phone Number *', type: 'tel', placeholder: '+254 700 000 000', required: true },
                  { id: 'company', label: 'Company/Organization', type: 'text', placeholder: 'Your Company Name', required: false },
                ].map(({ id, label, type, placeholder, required }) => (
                  <div key={id}>
                    <label htmlFor={id} className="block text-sm font-bold text-gray-700 mb-2">{label}</label>
                    <input
                      type={type} id={id} name={id} required={required}
                      value={formData[id as keyof typeof formData]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      className="w-full px-4 py-3.5 border border-gray-300 focus:outline-none focus:border-[#1a3a8f] text-lg bg-white"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-2">Service Interested In *</label>
                  <select
                    id="service" name="service" required
                    value={formData.service} onChange={handleChange}
                    className="w-full px-4 py-3.5 border border-gray-300 focus:outline-none focus:border-[#1a3a8f] text-lg bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="laundry">Laundry Equipment</option>
                    <option value="kitchen">Kitchen Systems</option>
                    <option value="ac">Air Conditioning</option>
                    <option value="consultancy">Engineering Consultancy</option>
                    <option value="maintenance">Maintenance & Repair</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Message *</label>
                  <textarea
                    id="message" name="message" required rows={5}
                    value={formData.message} onChange={handleChange}
                    placeholder="Tell us about your project or inquiry..."
                    className="w-full px-4 py-3.5 border border-gray-300 focus:outline-none focus:border-[#1a3a8f] text-lg resize-none bg-white"
                  />
                </div>
                <button type="submit" className="bg-[#1a3a8f] text-white py-4 px-10 font-bold hover:bg-[#00b4d8] transition-colors uppercase tracking-wide text-sm">
                  Send Message
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="bg-gray-50 border border-gray-200 p-8 flex flex-col">
              <span className="text-[#00b4d8] text-sm font-bold uppercase tracking-widest mb-3">Find Us</span>
              <h2 className="text-[#1a3a8f] font-black text-5xl mb-8 leading-tight">Contact Information</h2>
              <div className="space-y-6 flex-1">
                {[
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />,
                    title: 'Location',
                    content: 'Baraka Estate along Airport North Road, Nairobi, Kenya',
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
                    title: 'Phone',
                    content: '+254 729 212 254 / +254 733 788 357',
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                    title: 'Email',
                    content: 'info@dabeckslaundry.com',
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
                    title: 'Business Hours',
                    content: 'Mon – Fri: 8:00 AM – 5:00 PM\nSaturday: 9:00 AM – 1:00 PM',
                  },
                ].map(({ icon, title, content }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="bg-[#1a3a8f] w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#00b4d8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">{icon}</svg>
                    </div>
                    <div>
                      <h3 className="font-black text-[#1a3a8f] text-lg mb-1">{title}</h3>
                      <p className="text-gray-600 text-lg whitespace-pre-line leading-relaxed">{content}</p>
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

