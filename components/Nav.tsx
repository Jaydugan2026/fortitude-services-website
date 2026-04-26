'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const links = [
  { href: '/plans', label: 'Plans' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E2E8F0] shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-[#F59E0B] flex items-center justify-center">
            <Shield className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
          <div className="leading-tight">
            <div className="text-[13px] font-black text-[#1E293B] tracking-tight uppercase">Fortitude</div>
            <div className="text-[9px] text-[#94A3B8] uppercase tracking-widest -mt-0.5">Services</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[14px] font-medium transition-colors ${
                pathname.startsWith(link.href)
                  ? 'text-[#F59E0B]'
                  : 'text-[#475569] hover:text-[#0F172A]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/plans"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#F59E0B] text-white text-[14px] font-bold hover:bg-[#D97706] transition-colors"
          >
            Get Protected →
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-[#475569] hover:text-[#0F172A]"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#E2E8F0] bg-white px-4 py-4 space-y-3">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-[15px] font-medium text-[#475569] hover:text-[#0F172A] py-1"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/plans"
            onClick={() => setOpen(false)}
            className="block text-center mt-2 px-4 py-2.5 rounded-lg bg-[#F59E0B] text-white text-[14px] font-bold hover:bg-[#D97706] transition-colors"
          >
            Get Protected →
          </Link>
        </div>
      )}
    </header>
  );
}
