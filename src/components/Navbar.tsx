import { useState, useEffect, MouseEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { siteConfig } from '../config/site';
import { Menu, X, ArrowUpRight, ChevronDown, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (isHomePage) {
        const sections = ['hero', 'about', 'what-i-build', 'projects', 'experience', 'contact'];
        const scrollPosition = window.scrollY + 140;

        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el && el.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);

    if (href.startsWith('/')) {
      // Standard route
      return;
    }

    e.preventDefault();
    const targetId = href.replace('#', '');

    if (!isHomePage) {
      navigate(`/${href}`);
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

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
          {/* Logo / Name with Gaurav Beniwal Avatar */}
          <Link
            id="nav-logo-link"
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-emerald-500/25 group-hover:ring-emerald-500 transition-all shadow-xs shrink-0 bg-zinc-100">
              <img
                src={siteConfig.hero.profileImage}
                alt={siteConfig.name}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
            </div>
            <span className="font-semibold text-[15px] tracking-tight text-zinc-900 group-hover:text-emerald-600 transition-colors">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-1.5 text-[13.5px] font-medium text-zinc-600">
            {siteConfig.navLinks.map((link) => {
              const isRoute = link.href.startsWith('/');
              const sectionId = link.href.replace('#', '');
              const isActive = isRoute 
                ? location.pathname.startsWith(link.href) 
                : isHomePage && activeSection === sectionId;

              // Services with subtle dropdown indicator
              if (link.label === 'Services') {
                return (
                  <div 
                    key={link.href} 
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      id="nav-link-services"
                      to="/services"
                      className={`px-3 py-1.5 rounded-full inline-flex items-center gap-1 transition-all duration-200 ${
                        isActive
                          ? 'text-zinc-950 font-semibold bg-zinc-100/90'
                          : 'hover:text-zinc-950 hover:bg-zinc-100/50'
                      }`}
                    >
                      <span>Services</span>
                      <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                    </Link>

                    {/* Services Mini Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-64 p-2 rounded-2xl bg-white border border-zinc-200 shadow-xl animate-in fade-in zoom-in-95 duration-150 z-50">
                        <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider px-3 py-1.5">
                          Dedicated SEO Solutions
                        </div>
                        {siteConfig.servicePages.map((sp) => (
                          <Link
                            key={sp.href}
                            to={sp.href}
                            onClick={() => setServicesDropdownOpen(false)}
                            className="block px-3 py-2 rounded-xl text-xs font-semibold text-zinc-800 hover:text-emerald-600 hover:bg-zinc-50 transition-colors"
                          >
                            <p className="truncate">{sp.label}</p>
                            <p className="text-[10.5px] text-zinc-400 font-normal truncate">{sp.description}</p>
                          </Link>
                        ))}
                        <div className="border-t border-zinc-100 mt-1 pt-1">
                          <Link
                            to="/services"
                            onClick={() => setServicesDropdownOpen(false)}
                            className="block px-3 py-1.5 text-[11px] font-bold text-emerald-600 hover:text-emerald-700"
                          >
                            Browse All Services →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (isRoute) {
                return (
                  <Link
                    key={link.href}
                    id={`nav-link-${link.label.toLowerCase()}`}
                    to={link.href}
                    className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-zinc-950 font-semibold bg-zinc-100/90'
                        : 'hover:text-zinc-950 hover:bg-zinc-100/50'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }

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
            className="rounded-2xl bg-white/95 backdrop-blur-xl border border-zinc-200/90 shadow-[0_16px_36px_rgba(0,0,0,0.08)] p-4 flex flex-col gap-1 animate-in fade-in slide-in-from-top-3 duration-200 max-h-[80vh] overflow-y-auto"
          >
            {siteConfig.navLinks.map((link) => {
              const isRoute = link.href.startsWith('/');
              const sectionId = link.href.replace('#', '');
              const isActive = isRoute 
                ? location.pathname.startsWith(link.href) 
                : isHomePage && activeSection === sectionId;

              if (isRoute) {
                return (
                  <Link
                    key={link.href}
                    id={`mobile-nav-link-${link.label.toLowerCase()}`}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-700 font-semibold'
                        : 'text-zinc-700 hover:bg-zinc-100/70 hover:text-zinc-950'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }

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

            {/* Specialized Pages in Mobile Menu */}
            <div className="pt-2 mt-1 border-t border-zinc-100">
              <span className="text-[10.5px] font-bold text-zinc-400 uppercase tracking-wider px-3.5">
                Specialized Services
              </span>
              <div className="mt-1 space-y-1">
                {siteConfig.servicePages.map((sp) => (
                  <Link
                    key={sp.href}
                    to={sp.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3.5 py-1.5 text-xs font-semibold text-zinc-700 hover:text-emerald-600 rounded-lg hover:bg-zinc-50"
                  >
                    • {sp.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-3 mt-2 border-t border-zinc-100 flex items-center justify-between">
              <span className="text-xs text-zinc-500 font-medium px-1">
                {siteConfig.location}
              </span>
              <a
                id="mobile-nav-cta-talk"
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-all shadow-sm"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
