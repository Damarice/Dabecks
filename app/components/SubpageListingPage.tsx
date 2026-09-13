import Link from 'next/link';
import Breadcrumb from '@/app/components/Breadcrumb';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface Product {
  model: string;
  desc: string;
  slug: string;
  placeholder: string;
  image?: string;
}

interface Benefit {
  icon: string;
  title: string;
  desc: string;
}

interface SubpageListingPageProps {
  breadcrumbs: BreadcrumbItem[];
  heroImage: string;
  category: string;
  title: string;
  heroSubtitle: string;
  introTitle: string;
  introText: string;
  benefits: Benefit[];
  products: Product[];
  basePath: string;
}

export default function SubpageListingPage({
  breadcrumbs,
  heroImage,
  category,
  title,
  heroSubtitle,
  introTitle,
  introText,
  benefits,
  products,
  basePath,
}: SubpageListingPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={breadcrumbs} />

      {/* ── HERO ── */}
      <section
        className="relative text-white flex items-center justify-center"
        style={{
          backgroundImage: `url('${heroImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '560px',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a3a8f]/50 via-[#1a3a8f]/60 to-[#1a3a8f]/75" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-24">
          <p className="text-sm uppercase tracking-widest text-[#00b4d8] font-bold mb-4">{category}</p>
          <h1 className="text-6xl md:text-8xl font-black leading-none mb-6">{title}</h1>
          <p className="text-xl md:text-2xl font-medium opacity-90 max-w-2xl mx-auto leading-relaxed">
            {heroSubtitle}
          </p>
          <a
            href="#products"
            className="inline-block mt-10 bg-[#00b4d8] text-white font-black text-sm uppercase tracking-widest px-10 py-4 hover:bg-white hover:text-[#1a3a8f] transition-colors"
          >
            View Products
          </a>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-3">{introTitle}</h2>
            <div className="w-12 h-1 bg-[#00b4d8] mb-8" />
            <p className="text-lg text-gray-700 leading-relaxed">{introText}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {benefits.map((b, i) => (
              <div key={i}>
                <div className="text-4xl mb-4">{b.icon}</div>
                <h3 className="text-2xl font-black text-[#1a3a8f] mb-3">{b.title}</h3>
                <p className="text-base text-gray-700 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT GRID ── */}
      <section id="products" className="bg-[#f7f7f7] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-3">Our Range</h2>
            <div className="w-12 h-1 bg-[#00b4d8]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <div key={i} className="bg-white border border-gray-200 group hover:shadow-xl transition-shadow">
                <div className="bg-[#f0f0f0] h-64 flex items-center justify-center overflow-hidden p-6">
                  <img
                    src={product.image || `https://via.placeholder.com/320x260?text=${encodeURIComponent(product.placeholder)}`}
                    alt={product.model}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500 font-medium mb-1">{product.desc}</p>
                  <h3 className="text-2xl font-black text-[#1a3a8f] mb-6">{product.model}</h3>
                  <div className="flex gap-3">
                    <Link
                      href={`${basePath}/${product.slug}`}
                      className="flex-1 text-center bg-[#1a3a8f] text-white font-bold py-3 text-sm uppercase tracking-widest hover:bg-[#00b4d8] transition-colors"
                    >
                      View More
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 text-center border-2 border-[#1a3a8f] text-[#1a3a8f] font-bold py-3 text-sm uppercase tracking-widest hover:bg-[#1a3a8f] hover:text-white transition-colors"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-[#1a3a8f] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Not sure which model is right for you?</h2>
            <p className="text-[#00b4d8] text-lg font-medium">Our team will assess your needs and recommend the best solution.</p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 bg-[#00b4d8] text-white font-black py-4 px-10 text-base uppercase tracking-widest hover:bg-white hover:text-[#1a3a8f] transition-colors"
          >
            Talk to an Expert
          </Link>
        </div>
      </section>
    </div>
  );
}
