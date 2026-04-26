import Link from 'next/link';
import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1E293B] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-[#F59E0B] flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-[13px] font-black uppercase tracking-tight">Fortitude Services</span>
          </div>
          <p className="text-[13px] text-[#94A3B8] leading-relaxed">
            Eastern NC's local roofing partner. We protect what you've built — one roof at a time.
          </p>
          <p className="text-[12px] text-[#64748B] mt-3">A Fortitude Roofing company</p>
        </div>

        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#64748B] mb-3">Navigation</h4>
          <ul className="space-y-2">
            {[
              { href: '/plans', label: 'Maintenance Plans' },
              { href: '/services', label: 'Services' },
              { href: '/about', label: 'About Us' },
              { href: '/contact', label: 'Contact' },
            ].map(link => (
              <li key={link.href}>
                <Link href={link.href} className="text-[13px] text-[#94A3B8] hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#64748B] mb-3">Service Area</h4>
          <p className="text-[13px] text-[#94A3B8] leading-relaxed">
            Onslow · Brunswick · Pender · Craven counties and surrounding areas in eastern North Carolina.
          </p>
          <div className="mt-4 space-y-1">
            <a href="tel:+19105550000" className="block text-[13px] text-[#94A3B8] hover:text-white transition-colors">
              (910) 555-0000
            </a>
            <a href="mailto:jd@fortituderoofing.co" className="block text-[13px] text-[#94A3B8] hover:text-white transition-colors">
              jd@fortituderoofing.co
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-[12px] text-[#64748B]">© 2026 Fortitude Services LLC. All rights reserved.</p>
        <p className="text-[12px] text-[#64748B]">Licensed & Insured · Eastern NC</p>
      </div>
    </footer>
  );
}
