import Link from 'next/link';

export default function DuctedSystems() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 font-bold">
            <Link href="/" className="hover:text-[#1a3a8f]">Home</Link>
            <span>/</span>
            <Link href="/solutions/air-conditioning" className="hover:text-[#1a3a8f]">Air Conditioning</Link>
            <span>/</span>
            <span className="text-[#1a3a8f] font-semibold">Ducted Systems</span>
          </div>
        </div>
      </div>

      <section 
        className="relative text-white py-32 flex items-center justify-center"
        style={{
          backgroundImage: "url('/hero-ac.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '400px'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <h1 className="font-bold mb-4">Ducted Systems</h1>
          <p className="text-xl opacity-90">Centralized air conditioning distribution</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="font-bold text-[#1a3a8f] mb-4">Ducted System Solutions</h2>
            <p className="text-gray-600 mb-6">Central air conditioning systems that distribute conditioned air through ducts for uniform climate control.</p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-[#00b4d8] pl-4">
                <h3 className="font-bold text-gray-800 mb-2">Central AC Units</h3>
                <p className="text-gray-600">Large capacity central systems for entire building cooling.</p>
              </div>

              <div className="border-l-4 border-[#00b4d8] pl-4">
                <h3 className="font-bold text-gray-800 mb-2">Ductwork & Distribution</h3>
                <p className="text-gray-600">Complete duct installation and air distribution networks.</p>
              </div>

              <div className="border-l-4 border-[#00b4d8] pl-4">
                <h3 className="font-bold text-gray-800 mb-2">Smart Controls</h3>
                <p className="text-gray-600">Zone-based temperature control with intelligent thermostats.</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
              <h3 className="font-bold text-[#1a3a8f] mb-4">Advantages</h3>
              <ul className="space-y-3 font-bold text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00b4d8] mt-1">→</span>
                  <span>Uniform temperature</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00b4d8] mt-1">→</span>
                  <span>Professional appearance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00b4d8] mt-1">→</span>
                  <span>Better air filtering</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00b4d8] mt-1">→</span>
                  <span>Zone flexibility</span>
                </li>
              </ul>
              
              <button className="w-full mt-6 bg-[#1a3a8f] text-white py-2 rounded font-bold hover:bg-[#00b4d8] hover:text-[#1a3a8f] transition-colors">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
