'use client';

import { useState } from 'react';
import { CheckCircle, X } from 'lucide-react';

type Billing = 'monthly' | 'annual';
type PlanId = 'essential' | 'premium';

const PLANS = [
  {
    id: 'essential' as PlanId,
    name: 'Essential',
    tagline: 'Best for roofs 0–10 years old',
    monthly: 30,
    annual: 349,
    dark: false,
    popular: false,
    features: [
      { text: 'Annual inspection + photo report', included: true },
      { text: 'Roof Health Report emailed to you', included: true },
      { text: 'Light debris removal', included: true },
      { text: 'Gutter cleaning once per year', included: true },
      { text: 'Priority scheduling', included: true },
      { text: '10–15% off future repairs & services', included: true },
      { text: '10% off first 6 months (POS enrollment)', included: true },
      { text: '2 inspections per year', included: false },
      { text: 'Sealing of all roof penetrations', included: false },
      { text: 'Minor repairs (up to 10 shingles)', included: false },
      { text: 'Free emergency leak inspections', included: false },
      { text: 'Transferable warranty documentation', included: false },
    ],
  },
  {
    id: 'premium' as PlanId,
    name: 'Premium',
    tagline: 'Best for roofs 10–25 years old',
    monthly: 50,
    annual: 599,
    dark: true,
    popular: true,
    features: [
      { text: 'Annual inspection + photo report', included: true },
      { text: 'Roof Health Report emailed to you', included: true },
      { text: 'Light debris removal', included: true },
      { text: '2× gutter cleaning per year', included: true },
      { text: 'Priority scheduling', included: true },
      { text: '20% off future repairs & services (grandfather rate)', included: true },
      { text: '2 inspections/year (hurricane season + end of summer)', included: true },
      { text: 'Sealing of all roof penetrations', included: true },
      { text: 'Minor repairs (up to 10 shingles)', included: true },
      { text: 'Free emergency leak inspections', included: true },
      { text: 'Transferable warranty documentation', included: true },
      { text: 'Everything in Essential, and more', included: true },
    ],
  },
];

const FAQS = [
  { q: 'What if I sell my house?', a: 'Your Premium plan includes transferable warranty documentation, so coverage can pass to the new owner — a great selling point. Essential plans can be cancelled anytime.' },
  { q: 'What counties do you serve?', a: 'We serve Onslow, Brunswick, Pender, and Craven counties in eastern NC, plus surrounding areas. Contact us if you\'re unsure.' },
  { q: 'How do I schedule my inspection?', a: 'After enrolling we\'ll contact you within 24 hours to schedule your first inspection at a time that works for you.' },
  { q: 'Can I cancel anytime?', a: 'Yes. Monthly plans can be cancelled anytime with no penalty. Annual plans are billed upfront but we\'ll work with you if your situation changes.' },
  { q: 'How is this different from a one-time inspection?', a: 'A maintenance plan keeps your roof on a schedule — we track its history, catch problems early, and give you priority access when you need repairs. Proactive vs. reactive.' },
];

export default function PlansPage() {
  const [billing, setBilling] = useState<Billing>('monthly');
  const [loading, setLoading] = useState<PlanId | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleEnroll = async (planId: PlanId) => {
    setLoading(planId);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planId, billing }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      window.location.href = data.url;
    } catch {
      alert('Something went wrong. Please call us to enroll: (910) 555-0000');
    } finally {
      setLoading(null);
    }
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-12 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-2">Roof Maintenance Plans</h1>
        <p className="text-[#64748B] text-[15px] mb-8">Flat-rate coverage. No surprises. Cancel anytime.</p>
        <div className="inline-flex items-center gap-1 bg-white border border-[#E2E8F0] rounded-lg p-1 shadow-sm">
          <button
            onClick={() => setBilling('monthly')}
            className={`px-4 py-1.5 rounded-md text-[13px] font-semibold transition-colors ${billing === 'monthly' ? 'bg-[#1E293B] text-white' : 'text-[#64748B] hover:text-[#0F172A]'}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling('annual')}
            className={`px-4 py-1.5 rounded-md text-[13px] font-semibold transition-colors flex items-center gap-1.5 ${billing === 'annual' ? 'bg-[#1E293B] text-white' : 'text-[#64748B] hover:text-[#0F172A]'}`}
          >
            Annual
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#F59E0B] text-white">Save 3 mo</span>
          </button>
        </div>
      </section>

      {/* Cards */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PLANS.map(plan => (
            <div
              key={plan.id}
              className={`rounded-2xl p-8 relative ${plan.dark ? 'bg-[#1E293B] text-white' : 'bg-white border border-[#E2E8F0]'}`}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-[#F59E0B] text-white text-[10px] font-bold uppercase tracking-wide">
                  Most Popular
                </div>
              )}

              <h2 className="text-xl font-black mb-1">{plan.name}</h2>
              <p className={`text-[13px] mb-6 ${plan.dark ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>{plan.tagline}</p>

              <div className="mb-6">
                {billing === 'monthly' ? (
                  <>
                    <span className="text-4xl font-black">${plan.monthly}</span>
                    <span className={`text-sm ml-1 ${plan.dark ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>/month</span>
                    <p className={`text-[12px] mt-1 ${plan.dark ? 'text-[#64748B]' : 'text-[#94A3B8]'}`}>
                      or ${plan.annual}/yr — save ${plan.monthly * 12 - plan.annual}
                    </p>
                  </>
                ) : (
                  <>
                    <span className="text-4xl font-black">${plan.annual}</span>
                    <span className={`text-sm ml-1 ${plan.dark ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>/year</span>
                    <p className={`text-[12px] mt-1 ${plan.dark ? 'text-[#64748B]' : 'text-[#94A3B8]'}`}>
                      ~${Math.round(plan.annual / 12)}/mo · save ${plan.monthly * 12 - plan.annual}
                    </p>
                  </>
                )}
              </div>

              <ul className="space-y-2.5 mb-8">
                {plan.features.map(f => (
                  <li key={f.text} className="flex items-start gap-2.5 text-[13px]">
                    {f.included
                      ? <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${plan.dark ? 'text-[#F59E0B]' : 'text-[#10B981]'}`} />
                      : <X className="w-4 h-4 shrink-0 mt-0.5 text-[#CBD5E1]" />}
                    <span className={!f.included ? (plan.dark ? 'text-[#475569]' : 'text-[#CBD5E1]') : ''}>{f.text}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleEnroll(plan.id)}
                disabled={loading === plan.id}
                className={`w-full py-3 rounded-lg font-bold text-[15px] transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${
                  plan.dark
                    ? 'bg-[#F59E0B] text-white hover:bg-[#D97706]'
                    : 'border-2 border-[#F59E0B] text-[#F59E0B] hover:bg-[#FEF3C7]'
                }`}
              >
                {loading === plan.id ? 'Redirecting...' : `Enroll in ${plan.name}`}
              </button>
            </div>
          ))}
        </div>
        <p className="text-center text-[12px] text-[#94A3B8] mt-6">
          Questions? Call <a href="tel:+19105550000" className="underline hover:text-[#F59E0B]">(910) 555-0000</a>
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-2xl font-black text-[#0F172A] text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-[14px] font-semibold text-[#0F172A]">{faq.q}</span>
                  <span className="text-[#94A3B8] text-lg ml-4 shrink-0">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-[13px] text-[#64748B] leading-relaxed border-t border-[#F1F5F9]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
