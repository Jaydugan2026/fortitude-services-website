import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

const services = [
  {
    id: 'maintenance',
    title: 'Roof Maintenance Plans',
    subtitle: 'Protect your investment year-round',
    description:
      'Our maintenance plans keep your roof performing at its best through every season. We catch small issues before they become costly repairs — saving eastern NC homeowners thousands every year.',
    features: [
      'Bi-annual roof inspections',
      'Debris and gutter clearing',
      'Sealant & flashing checks',
      'Storm-readiness assessment',
      'Priority scheduling for repairs',
      'Detailed written report after every visit',
    ],
    cta: { label: 'View Plans & Pricing', href: '/plans' },
  },
  {
    id: 'gutters',
    title: 'Gutters & Drainage',
    subtitle: 'Keep water moving — away from your home',
    description:
      'Clogged or failing gutters cause foundation damage, fascia rot, and mold. We install, clean, and repair gutters to make sure every drop of rain ends up exactly where it should.',
    features: [
      'Seamless gutter installation',
      'Downspout extensions & redirects',
      'Gutter guard installation',
      'Seasonal cleaning & flushing',
      'Fascia and soffit inspection',
      'Drainage grading consultation',
    ],
    cta: { label: 'Schedule a Quote', href: '/contact' },
  },
  {
    id: 'storm',
    title: 'Storm Damage Response',
    subtitle: 'Fast, honest help when it matters most',
    description:
      'Eastern NC weather is no joke. When a storm hits, we respond fast — with a real local crew, not a storm-chasing contractor from out of state. We document damage, work with your insurance, and get you back under a solid roof.',
    features: [
      'Same-day or next-day assessments',
      'Photo documentation for insurance claims',
      'Insurance adjuster coordination',
      'Temporary tarping & leak control',
      'Full replacement or targeted repair',
      'No-pressure, honest damage reports',
    ],
    cta: { label: 'Get Emergency Help', href: '/contact' },
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#1E293B] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Fortitude Services handles the work most roofing companies ignore — maintenance, drainage,
          and storm response. Built for eastern NC homes.
        </p>
      </section>

      {/* Service Sections */}
      {services.map((service, idx) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 px-6 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
        >
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#F59E0B] font-semibold uppercase tracking-wider text-sm mb-2">
                {service.subtitle}
              </p>
              <h2 className="text-3xl font-bold text-[#1E293B] mb-4">{service.title}</h2>
              <p className="text-slate-600 leading-relaxed mb-8">{service.description}</p>
              <Link
                href={service.cta.href}
                className="inline-block bg-[#F59E0B] text-white font-semibold px-6 py-3 rounded-lg hover:bg-amber-500 transition-colors"
              >
                {service.cta.label}
              </Link>
            </div>
            <ul className="space-y-4 pt-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle className="text-[#F59E0B] mt-0.5 shrink-0" size={20} />
                  <span className="text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      {/* CTA Banner */}
      <section className="bg-[#F59E0B] py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-3">Ready to protect your roof?</h2>
        <p className="text-amber-100 mb-8 max-w-xl mx-auto">
          Our maintenance plans start at less than the cost of one repair call. Lock in your rate
          today.
        </p>
        <Link
          href="/plans"
          className="inline-block bg-white text-[#F59E0B] font-bold px-8 py-4 rounded-lg hover:bg-amber-50 transition-colors text-lg"
        >
          See Maintenance Plans
        </Link>
      </section>
    </main>
  );
}
