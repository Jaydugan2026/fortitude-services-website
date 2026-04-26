import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

const values = [
  {
    title: 'Honest pricing, always',
    description:
      "We give you a straight number upfront — no hidden fees, no upsells you don't need. If your roof only needs a patch, that's what we'll tell you.",
  },
  {
    title: 'Local crew, local accountability',
    description:
      "Our team lives and works in eastern NC. We're not chasing storms from out of state. When something goes wrong, you can actually reach us.",
  },
  {
    title: 'Built for the long haul',
    description:
      "We'd rather earn a maintenance customer for 10 years than a one-time replacement. That means doing the job right the first time, every time.",
  },
];

const counties = ['Onslow', 'Brunswick', 'Pender', 'Craven'];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#1E293B] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Fortitude Services</h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Built on real work, real relationships, and 500+ roofs across eastern North Carolina.
        </p>
      </section>

      {/* Company Story */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#F59E0B] font-semibold uppercase tracking-wider text-sm mb-2">
              Our Story
            </p>
            <h2 className="text-3xl font-bold text-[#1E293B] mb-5">500+ jobs. One standard.</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Fortitude Services is the sister company to Fortitude Roofing — one of eastern NC's
              most trusted roofing contractors. After years of fielding calls about maintenance,
              gutters, and storm response, we built a dedicated team to handle exactly that.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              We believe most roof problems are preventable. A $300 inspection catches the $12,000
              replacement before it happens. That philosophy is why we exist.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Honest pricing. Local crew. No storm chasers, no out-of-state contractors. Just
              Fortitude — doing the work that keeps your home protected.
            </p>
          </div>

          {/* Team Photo Placeholder */}
          <div className="bg-slate-100 rounded-2xl h-72 md:h-80 flex items-center justify-center border-2 border-dashed border-slate-300">
            <span className="text-slate-400 text-sm font-medium">Team photo coming soon</span>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#F59E0B] font-semibold uppercase tracking-wider text-sm mb-2">
            Where We Work
          </p>
          <h2 className="text-3xl font-bold text-[#1E293B] mb-6">Eastern NC Service Area</h2>
          <p className="text-slate-600 mb-8">
            We serve homeowners and property managers across four counties in eastern North Carolina.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {counties.map((county) => (
              <span
                key={county}
                className="bg-white border border-slate-200 text-[#1E293B] font-semibold px-5 py-2 rounded-full shadow-sm"
              >
                {county} County
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#F59E0B] font-semibold uppercase tracking-wider text-sm mb-2">
              What We Stand For
            </p>
            <h2 className="text-3xl font-bold text-[#1E293B]">The Fortitude Standard</h2>
          </div>
          <div className="space-y-6">
            {values.map((value) => (
              <div key={value.title} className="flex items-start gap-4 bg-slate-50 rounded-xl p-6">
                <CheckCircle className="text-[#F59E0B] mt-0.5 shrink-0" size={22} />
                <div>
                  <h3 className="font-bold text-[#1E293B] text-lg mb-1">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fortitude Family */}
      <section className="bg-[#1E293B] text-white py-16 px-6 text-center">
        <p className="text-[#F59E0B] font-semibold uppercase tracking-wider text-sm mb-3">
          Part of the Fortitude Family
        </p>
        <h2 className="text-3xl font-bold mb-4">Need a full roof replacement?</h2>
        <p className="text-slate-300 max-w-xl mx-auto mb-8">
          Our sister company, Fortitude Roofing, handles complete roof replacements across eastern
          NC. Same honesty. Same crew. Bigger scope.
        </p>
        <a
          href="https://fortituderoofing.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#F59E0B] text-white font-semibold px-6 py-3 rounded-lg hover:bg-amber-500 transition-colors"
        >
          Visit Fortitude Roofing →
        </a>
      </section>

      {/* CTA */}
      <section className="py-14 px-6 bg-white text-center">
        <h2 className="text-2xl font-bold text-[#1E293B] mb-4">
          Ready to work with a local team you can trust?
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="bg-[#F59E0B] text-white font-semibold px-6 py-3 rounded-lg hover:bg-amber-500 transition-colors"
          >
            Contact Us
          </Link>
          <Link
            href="/plans"
            className="bg-white border border-slate-300 text-[#1E293B] font-semibold px-6 py-3 rounded-lg hover:bg-slate-50 transition-colors"
          >
            View Plans
          </Link>
        </div>
      </section>
    </main>
  );
}
