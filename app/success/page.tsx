import Link from 'next/link';
import { CheckCircle, Phone, Calendar, Shield } from 'lucide-react';

const nextSteps = [
  {
    icon: Phone,
    step: '01',
    title: "We'll call within 24 hours",
    description:
      'A member of our local team will reach out to confirm your enrollment and answer any questions.',
  },
  {
    icon: Calendar,
    step: '02',
    title: 'Schedule your first inspection',
    description:
      "We'll book a time that works for you. Your first roof inspection is included with your plan.",
  },
  {
    icon: Shield,
    step: '03',
    title: 'Your roof is covered',
    description:
      "From here on, we've got eyes on your roof. You'll get a written report after every visit.",
  },
];

export default function SuccessPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#1E293B] text-white py-24 px-6 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-[#F59E0B] rounded-full p-4">
            <CheckCircle className="text-white" size={40} />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">You&apos;re Protected.</h1>
        <p className="text-lg text-slate-300 max-w-xl mx-auto">
          Your enrollment is confirmed. Welcome to the Fortitude family — your roof is in good
          hands.
        </p>
      </section>

      {/* Confirmation note */}
      <section className="py-12 px-6 bg-amber-50 border-b border-amber-100">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[#1E293B] font-medium">
            A confirmation email is on its way to your inbox. Keep it for your records — it includes
            your plan details and next steps.
          </p>
        </div>
      </section>

      {/* What happens next */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#F59E0B] font-semibold uppercase tracking-wider text-sm mb-2">
              What Happens Next
            </p>
            <h2 className="text-3xl font-bold text-[#1E293B]">Here&apos;s the plan</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {nextSteps.map(({ icon: Icon, step, title, description }) => (
              <div
                key={step}
                className="relative bg-slate-50 rounded-2xl p-8 border border-slate-100"
              >
                <span className="absolute top-6 right-6 text-4xl font-black text-slate-100 select-none">
                  {step}
                </span>
                <div className="bg-[#F59E0B] rounded-xl p-3 inline-flex mb-5">
                  <Icon className="text-white" size={22} />
                </div>
                <h3 className="font-bold text-[#1E293B] text-lg mb-2">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA back home */}
      <section className="py-16 px-6 bg-[#1E293B] text-center">
        <h2 className="text-2xl font-bold text-white mb-3">Questions before we call?</h2>
        <p className="text-slate-300 mb-8 max-w-md mx-auto">
          Reach out anytime — we&apos;re a local team and we actually pick up.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="bg-[#F59E0B] text-white font-semibold px-6 py-3 rounded-lg hover:bg-amber-500 transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="bg-transparent border border-slate-500 text-white font-semibold px-6 py-3 rounded-lg hover:border-white transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
