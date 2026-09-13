'use client';

import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface Spec {
  label: string;
  value: string;
}

interface Feature {
  title: string;
  desc: string;
}

interface FeatureStrip {
  icon: string;
  label: string;
  value: string;
}

interface ProductDetailPageProps {
  breadcrumbs: BreadcrumbItem[];
  category: string;
  model: string;
  subtitle: string;
  image: string;
  placeholder: string;
  keySpecs: Spec[];
  description: string[];
  featureStrip: FeatureStrip[];
  specs: Spec[];
  features: Feature[];
  backHref: string;
  backLabel: string;
}

export default function ProductDetailPage({
  breadcrumbs,
  category,
  model,
  subtitle,
  image,
  placeholder,
  keySpecs,
  description,
  featureStrip,
  specs,
  features,
  backHref,
  backLabel,
}: ProductDetailPageProps) {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Breadcrumb items={breadcrumbs} />

      {/* ── PRODUCT HERO ── */}
      <section className="bg-white pt-10 pb-0 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start">
            {/* Image */}
            <div className="flex items-center justify-center bg-[#f7f7f7] p-12 min-h-[480px]">
              <img
                src={image}
                alt={model}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://via.placeholder.com/480x400?text=${encodeURIComponent(placeholder)}`;
                }}
                className="max-h-[400px] w-auto object-contain"
              />
            </div>

            {/* Info */}
            <div className="bg-white px-8 md:px-12 py-10 flex flex-col justify-start">
              <p className="text-sm uppercase tracking-widest text-[#00b4d8] font-bold mb-3">{category}</p>
              <h1 className="text-6xl md:text-7xl font-black text-[#1a1a1a] leading-none mb-4">{model}</h1>
              <p className="text-2xl text-gray-600 font-medium mb-6 leading-snug">{subtitle}</p>
              <div className="w-12 h-1 bg-[#00b4d8] mb-8" />

              <div className="grid grid-cols-3 gap-4 mb-10">
                {keySpecs.map((s, i) => (
                  <div key={i} className="border-l-2 border-[#00b4d8] pl-3">
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">{s.label}</p>
                    <p className="text-xl font-black text-[#1a3a8f]">{s.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-[#1a3a8f] text-white font-bold py-4 px-8 text-base uppercase tracking-widest hover:bg-[#00b4d8] transition-colors text-center"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-[#1a3a8f] text-[#1a3a8f] font-bold py-4 px-8 text-base uppercase tracking-widest hover:bg-[#1a3a8f] hover:text-white transition-colors text-center"
                >
                  Download Specs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE STRIP ── */}
      <section className="bg-[#1a3a8f] py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {featureStrip.map((f, i) => (
              <div key={i} className="text-white">
                <div className="text-3xl mb-2">{f.icon}</div>
                <p className="text-[#00b4d8] text-xs uppercase tracking-widest font-bold mb-1">{f.label}</p>
                <p className="text-base font-medium leading-snug">{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESCRIPTION + SIDEBAR ── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-black text-[#1a1a1a] mb-2">About this Product</h2>
              <div className="w-10 h-1 bg-[#00b4d8] mb-8" />
              <div className="space-y-5">
                {description.map((para, i) => (
                  <p key={i} className="text-lg text-gray-700 leading-relaxed">{para}</p>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-8 border border-gray-200">
              <h3 className="text-xl font-black text-[#1a3a8f] mb-6">Product Info</h3>
              <div className="space-y-5">
                <div>
                  <p className="text-gray-500 text-xs uppercase font-bold mb-1">Model</p>
                  <p className="text-lg font-semibold text-[#1a3a8f]">{model}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase font-bold mb-1">Category</p>
                  <p className="text-lg font-semibold text-[#1a3a8f]">{category}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase font-bold mb-1">Warranty</p>
                  <p className="text-lg font-semibold text-[#1a3a8f]">2 Years</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase font-bold mb-1">Service</p>
                  <p className="text-lg font-semibold text-[#1a3a8f]">Full East Africa Coverage</p>
                </div>
              </div>
              <Link
                href="/contact"
                className="block text-center mt-8 bg-[#1a3a8f] text-white font-bold py-3 text-sm uppercase tracking-widest hover:bg-[#00b4d8] transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL SPECIFICATIONS ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-4xl font-black text-[#1a1a1a] mb-2">Technical Specifications</h2>
          <div className="w-10 h-1 bg-[#00b4d8] mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200">
            {specs.map((spec, i) => (
              <div
                key={i}
                className={`flex justify-between items-center px-6 py-4 border-b border-gray-200 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
              >
                <span className="text-sm uppercase tracking-wide font-bold text-gray-500">{spec.label}</span>
                <span className="text-lg font-black text-[#1a3a8f] text-right">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY FEATURES ── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-4xl font-black text-[#1a1a1a] mb-2">Key Features</h2>
          <div className="w-10 h-1 bg-[#00b4d8] mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-gray-50 p-6 border border-gray-200">
                <div className="w-8 h-1 bg-[#00b4d8] mb-4" />
                <h3 className="text-xl font-black text-[#1a3a8f] mb-3">{f.title}</h3>
                <p className="text-base text-gray-700 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#1a3a8f] py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Ready to get started?</h2>
            <p className="text-[#00b4d8] text-lg font-medium">Contact us for pricing, availability, and installation support.</p>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <Link href="/contact" className="bg-[#00b4d8] text-white font-black py-4 px-10 text-base uppercase tracking-widest hover:bg-white hover:text-[#1a3a8f] transition-colors">
              Get in Touch
            </Link>
            <Link href={backHref} className="border-2 border-white text-white font-bold py-4 px-8 text-base uppercase tracking-widest hover:bg-white hover:text-[#1a3a8f] transition-colors">
              {backLabel}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
