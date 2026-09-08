import { useState, useEffect, MouseEvent } from 'react';
import { siteConfig } from '../config/site';
import { Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['hero', 'about', 'what-i-build', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const topOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 pt-4 pb-2 transition-all duration-300 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Floating Glass Pill Bar */}
        <nav
          id="main-navigation"
          aria-label="Main Navigation"
          className={`pointer-events-auto w-full flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
            isScrolled
              ? 'bg-white/85 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-zinc-200/80'
              : 'bg-white/70 backdrop-blur-sm shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-zinc-200/50'
          }`}
        >
          {/* Logo / Name */}
          <a
            id="nav-logo-link"
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="relative w-2.5 h-2.5 rounded-full bg-emerald-500">
              <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
            </div>
            <span className="font-semibold text-[15px] tracking-tight text-zinc-900 group-hover:text-emerald-600 transition-colors">
              {siteConfig.name}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-1.5 text-[13.5px] font-medium text-zinc-600">
            {siteConfig.navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  id={`nav-link-${sectionId}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-zinc-950 font-semibold bg-zinc-100/90'
                      : 'hover:text-zinc-950 hover:bg-zinc-100/50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Right side CTA & Mobile trigger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop "Let's Talk" Button */}
            <a
              id="nav-cta-talk-button"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-[13px] font-semibold transition-all duration-200 shadow-sm hover:shadow-[0_4px_12px_rgba(16,185,129,0.25)] active:scale-95"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-zinc-700 hover:text-zinc-950 rounded-full hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden pointer-events-auto max-w-6xl mx-auto mt-2 px-2">
          <div 
            id="mobile-navigation-dropdown"
            className="rounded-2xl bg-white/95 backdrop-blur-xl border border-zinc-200/90 shadow-[0_16px_36px_rgba(0,0,0,0.08)] p-4 flex flex-col gap-1 animate-in fade-in slide-in-from-top-3 duration-200"
          >
            {siteConfig.navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  id={`mobile-nav-link-${sectionId}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-700 font-semibold'
                      : 'text-zinc-700 hover:bg-zinc-100/70 hover:text-zinc-950'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            <div className="pt-2 mt-1 border-t border-zinc-100 flex items-center justify-between">
              <span className="text-xs text-zinc-500 font-medium px-1">
                {siteConfig.location}
              </span>
              <a
                id="mobile-nav-cta-talk"
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-all shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Let&apos;s Talk</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
