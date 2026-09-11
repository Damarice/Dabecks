import Link from 'next/link';

export default function IndustrialDryers() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 font-bold">
            <Link href="/" className="hover:text-[#1a3a8f]">Home</Link>
            <span>/</span>
            <Link href="/solutions/laundry" className="hover:text-[#1a3a8f]">Laundry Equipment</Link>
            <span>/</span>
            <span className="text-[#1a3a8f] font-semibold">Industrial Dryers</span>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-[#1a3a8f] to-[#00b4d8] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-bold mb-4">Industrial Dryers</h1>
          <p className="opacity-90">Fast and reliable drying solutions</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="font-bold text-[#1a3a8f] mb-4">Industrial Dryer Options</h2>
            <p className="text-gray-600 mb-6">
              Our industrial dryers are engineered for heavy-duty laundry operations. 
              Choose from gas, electric, or steam-powered solutions.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-[#00b4d8] pl-4">
                <h3 className="font-bold text-gray-800 mb-2">Gas Dryers</h3>
                <p className="text-gray-600">Cost-effective drying with superior heat control and energy efficiency.</p>
              </div>

              <div className="border-l-4 border-[#00b4d8] pl-4">
                <h3 className="font-bold text-gray-800 mb-2">Electric Dryers</h3>
                <p className="text-gray-600">Reliable electric heating systems for consistent drying performance.</p>
              </div>

              <div className="border-l-4 border-[#00b4d8] pl-4">
                <h3 className="font-bold text-gray-800 mb-2">Steam Dryers</h3>
                <p className="text-gray-600">Gentle steam drying for delicate fabrics with quick turnaround times.</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
              <h3 className="font-bold text-[#1a3a8f] mb-4">Key Features</h3>
              <ul className="space-y-3 font-bold text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00b4d8] mt-1">→</span>
                  <span>Variable heat settings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00b4d8] mt-1">→</span>
                  <span>Large capacity tumble drums</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00b4d8] mt-1">→</span>
                  <span>Quick cool down cycles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00b4d8] mt-1">→</span>
                  <span>Reduced operating costs</span>
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
