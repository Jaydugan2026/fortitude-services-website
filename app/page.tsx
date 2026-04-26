import Link from 'next/link';
import { CheckCircle, Wrench, CloudRain, Star } from 'lucide-react';

const PLAN_FEATURES = {
  essential: [
    'Annual inspection + photo report',
    'Roof health report emailed to you',
    'Light debris removal',
    'Gutter cleaning once per year',
    'Priority scheduling',
    '10–15% off future repairs',
  ],
  premium: [
    'Everything in Essential, plus:',
    '2 inspections/year (hurricane season)',
    'Sealing of all roof penetrations',
    '2× gutter cleaning per year',
    'Minor repairs (up to 10 shingles)',
    '20% off future repairs (grandfather rate)',
    'Free emergency leak inspections',
    'Transferable warranty documentation',
  ],
};

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#1E293B] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'url(/hero-roof.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E293B]/95 to-[#1E293B]/60" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-32">
          <div className="max-w-xl">
            <span className="inline-block px-3 py-1 rounded-full bg-[#F59E0B]/20 text-[#F59E0B] text-[11px] font-bold uppercase tracking-widest mb-4">
              Eastern NC's Local Roofer
            </span>
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
              Your Roof.<br />Protected Year-Round.
            </h1>
            <p className="text-[#94A3B8] text-lg leading-relaxed mb-8">
              Annual maintenance plans, gutter cleaning, and storm response — from the neighbors who know eastern NC roofs best.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/plans"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#F59E0B] text-white font-bold text-[15px] hover:bg-[#D97706] transition-colors"
              >
                View Plans — from $30/mo
              </Link>
              <a
                href="tel:+19105550000"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/20 text-white font-semibold text-[15px] hover:bg-white/10 transition-colors"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[12px] font-semibold text-[#64748B] uppercase tracking-wider">
          <span>500+ Eastern NC Homeowners</span>
          <span className="hidden sm:block text-[#CBD5E1]">·</span>
          <span>Licensed & Insured</span>
          <span className="hidden sm:block text-[#CBD5E1]">·</span>
          <span>Onslow County</span>
          <span className="hidden sm:block text-[#CBD5E1]">·</span>
          <span>Brunswick County</span>
          <span className="hidden sm:block text-[#CBD5E1]">·</span>
          <span>Pender County</span>
          <span className="hidden sm:block text-[#CBD5E1]">·</span>
          <span>Craven County</span>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-black text-center text-[#0F172A] mb-2">How It Works</h2>
        <p className="text-center text-[#64748B] mb-12">Three steps to a protected roof</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: '01', title: 'Inspect', desc: "We do a thorough annual inspection and send you a full photo report of your roof's health." },
            { step: '02', title: 'Protect', desc: 'We handle debris, gutters, penetration sealing, and minor repairs before small problems become big ones.' },
            { step: '03', title: 'Rest Easy', desc: "Priority scheduling, steep discounts on repairs, and emergency response — you're covered." },
          ].map(item => (
            <div key={item.step} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FEF3C7] text-[#F59E0B] text-xl font-black mb-4">
                {item.step}
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">{item.title}</h3>
              <p className="text-[14px] text-[#64748B] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Plan preview */}
      <section className="bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-black text-center text-[#0F172A] mb-2">Choose Your Plan</h2>
          <p className="text-center text-[#64748B] mb-12">Flat-rate annual coverage — no surprises</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm">
              <div className="mb-4">
                <h3 className="text-lg font-black text-[#0F172A]">Essential</h3>
                <p className="text-[12px] text-[#64748B] mt-0.5">Best for roofs 0–10 years old</p>
              </div>
              <div className="mb-4">
                <span className="text-3xl font-black text-[#0F172A]">$30</span>
                <span className="text-[#64748B] text-sm">/mo</span>
                <span className="ml-2 text-[12px] text-[#94A3B8]">or $349/yr</span>
              </div>
              <ul className="space-y-2 mb-6">
                {PLAN_FEATURES.essential.map(f => (
                  <li key={f} className="flex items-start gap-2 text-[13px] text-[#475569]">
                    <CheckCircle className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/plans" className="block text-center py-2.5 rounded-lg border-2 border-[#F59E0B] text-[#F59E0B] font-bold text-[14px] hover:bg-[#FEF3C7] transition-colors">
                Choose Essential
              </Link>
            </div>

            <div className="bg-[#1E293B] rounded-2xl p-6 shadow-sm relative overflow-hidden">
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-[#F59E0B] text-white text-[10px] font-bold uppercase tracking-wide">
                Most Popular
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-black text-white">Premium</h3>
                <p className="text-[12px] text-[#94A3B8] mt-0.5">Best for roofs 10–25 years old</p>
              </div>
              <div className="mb-4">
                <span className="text-3xl font-black text-white">$50</span>
                <span className="text-[#94A3B8] text-sm">/mo</span>
                <span className="ml-2 text-[12px] text-[#64748B]">or $599/yr</span>
              </div>
              <ul className="space-y-2 mb-6">
                {PLAN_FEATURES.premium.slice(0, 5).map(f => (
                  <li key={f} className="flex items-start gap-2 text-[13px] text-[#94A3B8]">
                    <CheckCircle className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
                <li className="text-[12px] text-[#64748B] pl-6">+ 3 more benefits</li>
              </ul>
              <Link href="/plans" className="block text-center py-2.5 rounded-lg bg-[#F59E0B] text-white font-bold text-[14px] hover:bg-[#D97706] transition-colors">
                Choose Premium
              </Link>
            </div>
          </div>
          <p className="text-center text-[12px] text-[#94A3B8] mt-6">
            <Link href="/plans" className="underline hover:text-[#F59E0B]">See full plan comparison →</Link>
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-black text-center text-[#0F172A] mb-12">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Star, title: 'Roof Maintenance Plans', desc: 'Annual inspections, reports, and preventive care that catch problems before they become expensive.' },
            { icon: Wrench, title: 'Gutters & Drainage', desc: 'Cleaning, installation, and guards to keep water moving away from your home year-round.' },
            { icon: CloudRain, title: 'Storm Damage Response', desc: 'Rapid inspections after severe weather, documentation for insurance claims, and fast repairs.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#FEF3C7] flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-[#F59E0B]" />
              </div>
              <div>
                <h3 className="font-bold text-[#0F172A] mb-1">{title}</h3>
                <p className="text-[13px] text-[#64748B] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Fortitude */}
      <section className="bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-[#0F172A] mb-4">
                Your neighbor who happens to be the best roofer in the county.
              </h2>
              <p className="text-[#64748B] leading-relaxed mb-6">
                Fortitude Services is built on the same foundation as Fortitude Roofing — 500+ jobs completed across eastern NC, honest pricing, and a crew that treats your home like their own.
              </p>
              <ul className="space-y-3">
                {[
                  'Local team — we live and work in eastern NC',
                  'Fast response — no waiting weeks for a call back',
                  'Honest pricing — flat-rate plans, no hidden fees',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2 text-[14px] text-[#475569] font-medium">
                    <CheckCircle className="w-4 h-4 text-[#F59E0B] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#E2E8F0] rounded-2xl aspect-video flex items-center justify-center text-[#94A3B8] text-sm">
              {/* Replace with actual job photo using next/image */}
              Team / Job Photo
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#F59E0B]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3">Protect your roof before the next storm.</h2>
          <p className="text-white/80 mb-8 text-[15px]">Plans start at $30/month. Cancel anytime.</p>
          <Link
            href="/plans"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-white text-[#F59E0B] font-black text-[15px] hover:bg-[#FEF3C7] transition-colors"
          >
            Enroll Today →
          </Link>
        </div>
      </section>
    </div>
  );
}
