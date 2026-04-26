'use client';

import { useState, FormEvent } from 'react';

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#1E293B] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg text-slate-300 max-w-xl mx-auto">
          We&apos;re a local crew — you&apos;ll talk to a real person, not a call center.
        </p>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          {/* Phone CTA */}
          <div className="text-center mb-12">
            <p className="text-slate-500 uppercase tracking-wider text-sm font-semibold mb-2">
              Call or text us directly
            </p>
            <a
              href="tel:9105550000"
              className="text-5xl md:text-6xl font-bold text-[#1E293B] hover:text-[#F59E0B] transition-colors"
            >
              (910) 555-0000
            </a>
          </div>

          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-slate-400 text-sm font-medium">or send us a message</span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          {/* Success State */}
          {status === 'success' && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center mb-8">
              <p className="text-green-800 font-semibold text-lg mb-1">Message received!</p>
              <p className="text-green-700 text-sm">
                We&apos;ll be in touch within 1 business day. For urgent needs, please call us
                directly.
              </p>
            </div>
          )}

          {/* Error State */}
          {status === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center mb-8">
              <p className="text-red-700 text-sm">
                Something went wrong. Please try again or call us at (910) 555-0000.
              </p>
            </div>
          )}

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-[#1E293B] mb-1.5"
                >
                  Name <span className="text-[#F59E0B]">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 text-[#1E293B] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[#1E293B] mb-1.5"
                >
                  Email <span className="text-[#F59E0B]">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 text-[#1E293B] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-[#1E293B] mb-1.5"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(910) 555-0000"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 text-[#1E293B] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-semibold text-[#1E293B] mb-1.5"
                >
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent bg-white"
                >
                  <option value="">Select a service…</option>
                  <option value="maintenance">Maintenance Plan</option>
                  <option value="gutters">Gutters</option>
                  <option value="storm">Storm Damage</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-[#1E293B] mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us what's going on with your roof…"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 text-[#1E293B] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-[#F59E0B] text-white font-bold py-4 rounded-lg hover:bg-amber-500 transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-lg"
            >
              {status === 'loading' ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
