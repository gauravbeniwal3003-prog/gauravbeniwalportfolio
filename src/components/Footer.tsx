import { MouseEvent } from 'react';
import { siteConfig } from '../config/site';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Youtube, 
  Twitter, 
  ArrowUp 
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    <footer className="border-t border-zinc-200/80 bg-zinc-50/50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top footer row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-zinc-200/60">
          
          {/* Left Brand info */}
          <div className="space-y-2.5 max-w-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="font-bold text-base tracking-tight text-zinc-950">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm text-zinc-500">
              Building useful things with technology. Based in Panipat, Haryana.
            </p>
            <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs text-zinc-500">
              <a 
                href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} 
                className="hover:text-emerald-600 transition-colors font-medium"
              >
                {siteConfig.phone}
              </a>
              <span className="text-zinc-300">•</span>
              <a 
                href={`mailto:${siteConfig.email}`} 
                className="hover:text-emerald-600 transition-colors font-medium"
              >
                {siteConfig.email}
              </a>
              <span className="text-zinc-300">•</span>
              <a 
                href={siteConfig.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-pink-600 transition-colors font-medium"
              >
                {siteConfig.instagramHandle || "@gauravbeniwalx"}
              </a>
            </div>
          </div>

          {/* Right Navigation Links */}
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-zinc-600">
            <a 
              href="#hero" 
              onClick={(e) => handleNavClick(e, '#hero')}
              className="hover:text-zinc-950 transition-colors"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, '#about')}
              className="hover:text-zinc-950 transition-colors"
            >
              About
            </a>
            <a 
              href="#what-i-build" 
              onClick={(e) => handleNavClick(e, '#what-i-build')}
              className="hover:text-zinc-950 transition-colors"
            >
              What I Build
            </a>
            <a 
              href="#projects" 
              onClick={(e) => handleNavClick(e, '#projects')}
              className="hover:text-zinc-950 transition-colors"
            >
              Projects
            </a>
            <a 
              href="#experience" 
              onClick={(e) => handleNavClick(e, '#experience')}
              className="hover:text-zinc-950 transition-colors"
            >
              Experience
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hover:text-zinc-950 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Social Links (Only displayed if configured in siteConfig) */}
          <div className="flex items-center gap-3">
            {siteConfig.socials.github && (
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-zinc-950 hover:border-zinc-300 transition-colors shadow-2xs"
              >
                <Github className="w-4 h-4" />
              </a>
            )}

            {siteConfig.socials.linkedin && (
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-zinc-950 hover:border-zinc-300 transition-colors shadow-2xs"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}

            {siteConfig.socials.instagram && (
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="w-9 h-9 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-zinc-950 hover:border-zinc-300 transition-colors shadow-2xs"
              >
                <Instagram className="w-4 h-4" />
              </a>
            )}

            {siteConfig.socials.youtube && (
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Channel"
                className="w-9 h-9 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-zinc-950 hover:border-zinc-300 transition-colors shadow-2xs"
              >
                <Youtube className="w-4 h-4" />
              </a>
            )}

            {siteConfig.socials.x && (
              <a
                href={siteConfig.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X Profile"
                className="w-9 h-9 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-zinc-950 hover:border-zinc-300 transition-colors shadow-2xs"
              >
                <Twitter className="w-4 h-4" />
              </a>
            )}
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-zinc-900 font-medium transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
