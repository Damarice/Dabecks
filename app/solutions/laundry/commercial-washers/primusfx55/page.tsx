import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

export default function PrimusFX55ProductDetail() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[
        { label: 'Solutions', href: '/solutions' },
        { label: 'Commercial Washers', href: '/solutions/laundry/commercial-washers' },
        { label: 'Primus FX55' }
      ]} />

      {/* ── HERO / PRODUCT INFO ── */}
      <section className="bg-white py-16 md:py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Small info at top */}
          <div className="mb-12">
            <p className="text-gray-500 text-lg mb-2">Commercial Washers</p>
            <h1 className="text-5xl md:text-7xl font-black text-[#1a3a8f] mb-6">Primus FX55</h1>
            <p className="text-2xl md:text-3xl text-gray-700 font-medium max-w-2xl">
              Front load industrial washer with 55 lbs (25kg) capacity. Built for heavy daily use in demanding commercial environments.
            </p>
          </div>

          {/* Two-column: image left, specs right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex items-center justify-center bg-gray-50 rounded-lg p-8 min-h-96">
              <img
                src="https://via.placeholder.com/400x350?text=Primus+FX55"
                alt="Primus FX55"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="flex flex-col justify-center space-y-8">
              <div>
                <p className="text-[#00b4d8] font-bold text-xl uppercase tracking-wider mb-2">Load Capacity</p>
                <p className="text-4xl md:text-5xl font-black text-[#1a3a8f]">55 lbs (25 kg)</p>
              </div>
              <div>
                <p className="text-[#00b4d8] font-bold text-xl uppercase tracking-wider mb-2">Spin Speed</p>
                <p className="text-4xl md:text-5xl font-black text-[#1a3a8f]">1000 RPM</p>
              </div>
              <div>
                <p className="text-[#00b4d8] font-bold text-xl uppercase tracking-wider mb-2">Energy Rating</p>
                <p className="text-4xl md:text-5xl font-black text-[#1a3a8f]">A+</p>
              </div>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="bg-[#00b4d8] text-white font-bold py-4 px-10 rounded text-xl uppercase tracking-wide hover:bg-[#00a0b8] transition-colors inline-block"
                >
                  Get More Information
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DESCRIPTION + SIDEBAR ── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main description */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-black text-[#1a3a8f] mb-8">About this Washer</h2>
            <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
              <p>
                The Primus FX55 is an industrial-grade front-load washer engineered for intensive commercial use. With 55 lbs capacity and robust construction, it is the ideal choice for high-demand laundry environments such as hotels, hospitals, and large-scale commercial laundries.
              </p>
              <p>
                Built for reliability and longevity, this washer delivers consistent performance even under the most demanding conditions, with minimal downtime and easy maintenance.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-black text-[#1a3a8f] mb-6">Product Info</h3>
            <div className="space-y-6">
              <div>
                <p className="text-gray-500 text-sm uppercase font-bold mb-1">Model</p>
                <p className="text-xl font-semibold text-[#1a3a8f]">Primus FX55</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm uppercase font-bold mb-1">Category</p>
                <p className="text-xl font-semibold text-[#1a3a8f]">Commercial Washers</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm uppercase font-bold mb-1">Warranty</p>
                <p className="text-xl font-semibold text-[#1a3a8f]">2 Years</p>
              </div>
              <button className="w-full bg-[#1a3a8f] text-white font-bold py-3 rounded text-lg uppercase tracking-wide hover:bg-[#00b4d8] transition-colors mt-4">
                Request Specs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL SPECIFICATIONS ── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-black text-[#1a3a8f] mb-12">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: 'Load Capacity', value: '55 lbs (25 kg)' },
              { label: 'Spin Speed', value: '1000 RPM' },
              { label: 'Water Usage', value: '75 L/cycle' },
              { label: 'Energy Class', value: 'A+' },
              { label: 'Dimensions (W×H×D)', value: '700 × 950 × 1000 mm' },
              { label: 'Weight', value: '130 kg' },
            ].map((spec, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-gray-200">
                <p className="text-gray-500 text-sm uppercase font-bold mb-2">{spec.label}</p>
                <p className="text-3xl font-black text-[#1a3a8f]">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY FEATURES (listed below) ── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-black text-[#1a3a8f] mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            { title: 'Industrial Grade', desc: 'Built tough for heavy daily use in demanding environments' },
            { title: 'Reliable Performance', desc: 'Consistent results across all wash cycles' },
            { title: 'Easy Controls', desc: 'Straightforward operation for all staff levels' },
            { title: 'Robust Construction', desc: 'Heavy-duty materials engineered for longevity' },
            { title: 'Low Downtime', desc: 'Minimal maintenance requirements keep operations running' },
            { title: 'Cost Effective', desc: 'Excellent value and efficiency for commercial operations' },
          ].map((f, i) => (
            <div key={i} className="flex gap-4">
              <div className="text-[#00b4d8] font-black text-2xl pt-1 flex-shrink-0">•</div>
              <div>
                <h3 className="text-2xl font-bold text-[#1a3a8f] mb-2">{f.title}</h3>
                <p className="text-xl text-gray-700">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BACK BUTTON ── */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <Link
            href="/solutions/laundry/commercial-washers"
            className="inline-block bg-[#1a3a8f] text-white font-bold py-3 px-10 rounded text-lg uppercase tracking-wide hover:bg-[#00b4d8] transition-colors"
          >
            ← Back to Commercial Washers
          </Link>
        </div>
      </section>
    </div>
  );
}
