import { MouseEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { siteConfig } from '../config/site';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Youtube, 
  Twitter, 
  ArrowUp,
  MapPin,
  ShieldCheck,
  Zap,
  Globe
} from 'lucide-react';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/')) return;

    e.preventDefault();
    const targetId = href.replace('#', '');

    if (!isHomePage) {
      navigate(`/${href}`);
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
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
    <footer className="border-t border-zinc-200/80 bg-zinc-50/70 pt-16 pb-12 text-zinc-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column SEO Authority Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-200/70">
          
          {/* Column 1: Identity & Local Presence */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-extrabold text-base tracking-tight text-zinc-950">
                {siteConfig.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Full-Stack Software Engineer, Fast Website Builder &amp; Cybersecurity Specialist. Hand-crafting high-performance digital products that rank and scale.
            </p>

            <div className="pt-1 space-y-1.5 text-xs text-zinc-500">
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Panipat &amp; Samalkha, Haryana, India</span>
              </p>
              <p>
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="font-semibold text-zinc-800 hover:text-emerald-600">
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${siteConfig.email}`} className="font-semibold text-zinc-800 hover:text-emerald-600">
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </div>

          {/* Column 2: Dedicated SEO Service Pages */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-zinc-950 uppercase tracking-wider">
              Specialized Services
            </h3>
            <ul className="space-y-2 text-xs">
              {siteConfig.servicePages.map((service) => (
                <li key={service.href}>
                  <Link 
                    to={service.href} 
                    className="hover:text-emerald-600 font-medium transition-colors block"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link to="/services" className="text-emerald-600 font-bold hover:underline">
                  All Services Directory →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Portfolio Navigation */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-zinc-950 uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" onClick={scrollToTop} className="hover:text-zinc-950 transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-zinc-950 transition-colors">
                  About Gaurav
                </a>
              </li>
              <li>
                <a href="#what-i-build" onClick={(e) => handleNavClick(e, '#what-i-build')} className="hover:text-zinc-950 transition-colors">
                  Architecture &amp; Skills
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="hover:text-zinc-950 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#experience" onClick={(e) => handleNavClick(e, '#experience')} className="hover:text-zinc-950 transition-colors">
                  Experience &amp; Timeline
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-zinc-950 transition-colors">
                  Contact &amp; Quotes
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Regional Service Coverage & Security */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-zinc-950 uppercase tracking-wider">
              Regional Coverage
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Serving businesses, factories, exporters, and entrepreneurs across:
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px] text-zinc-600">
              <span className="bg-white px-2 py-0.5 rounded border border-zinc-200">Panipat GT Road</span>
              <span className="bg-white px-2 py-0.5 rounded border border-zinc-200">Samalkha</span>
              <span className="bg-white px-2 py-0.5 rounded border border-zinc-200">Karnal</span>
              <span className="bg-white px-2 py-0.5 rounded border border-zinc-200">Sonipat</span>
              <span className="bg-white px-2 py-0.5 rounded border border-zinc-200">Kurukshetra</span>
              <span className="bg-white px-2 py-0.5 rounded border border-zinc-200">Delhi NCR</span>
              <span className="bg-white px-2 py-0.5 rounded border border-zinc-200">Worldwide</span>
            </div>
            
            <div className="pt-2 flex items-center gap-2 text-[11px] text-emerald-700">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Anti-DDoS &amp; WAF Protected</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Copyright, Domain, Socials & Scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © {new Date().getFullYear()} {siteConfig.name}. Published on{' '}
            <a 
              href={`https://${siteConfig.domain}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-700 hover:text-emerald-600 font-semibold"
            >
              {siteConfig.domain}
            </a>
            . All rights reserved.
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 text-zinc-500">
              {siteConfig.socials.github && (
                <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-950 transition-colors" aria-label="GitHub">
                  <Github className="w-4 h-4" />
                </a>
              )}
              {siteConfig.socials.linkedin && (
                <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-950 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {siteConfig.socials.instagram && (
                <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
              )}
            </div>

            <button
              id="footer-back-to-top"
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-zinc-100 text-zinc-700 text-xs font-semibold border border-zinc-200/80 transition-all shadow-2xs cursor-pointer ml-2"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
