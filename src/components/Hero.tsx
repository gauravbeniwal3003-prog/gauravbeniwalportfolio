import { useState, MouseEvent } from 'react';
import { siteConfig } from '../config/site';
import { 
  ArrowRight, 
  ArrowDown, 
  Sparkles, 
  Clock, 
  Award, 
  Code2, 
  MapPin 
} from 'lucide-react';

export default function Hero() {
  const [imgSrc, setImgSrc] = useState(siteConfig.hero.profileImage);
  const [hasError, setHasError] = useState(false);

  const handleImageError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(siteConfig.hero.profileImageFallback);
    } else {
      setImgSrc('/images/profile-placeholder.svg');
    }
  };

  const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-36 pb-12 overflow-hidden"
    >
      {/* Subtle background ambient glow (very light, clean) */}
      <div 
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl -z-10 pointer-events-none" 
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 left-10 w-72 h-72 bg-zinc-100/50 rounded-full blur-2xl -z-10 pointer-events-none" 
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ===============================================================
              LEFT COLUMN: Messaging & CTAs
             =============================================================== */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-7">
            
            {/* Live Availability Badge */}
            <div 
              id="hero-availability-badge"
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50/90 border border-emerald-200/60 shadow-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-emerald-800 tracking-wide">
                {siteConfig.hero.badge}
              </span>
            </div>

            {/* Primary Headline */}
            <h1 
              id="hero-main-headline"
              className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-zinc-950 leading-[1.12]"
            >
              {siteConfig.hero.headline}
            </h1>

            {/* Natural Human Introduction */}
            <p 
              id="hero-description"
              className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed max-w-xl"
            >
              {siteConfig.hero.description}
            </p>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-zinc-500 pt-1">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                {siteConfig.location}
              </span>
              <span className="w-1 h-1 rounded-full bg-zinc-300" />
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-500" />
                {siteConfig.experienceYears} Years Hands-on Code
              </span>
              <span className="w-1 h-1 rounded-full bg-zinc-300" />
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                {siteConfig.status.liveStatusText}
              </span>
            </div>

            {/* CTA Buttons with Excellent Hover Transitions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2 w-full sm:w-auto">
              <a
                id="hero-cta-work-together"
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-[15px] transition-all duration-200 shadow-sm hover:shadow-[0_8px_20px_rgba(16,185,129,0.25)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{siteConfig.hero.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                id="hero-cta-view-work"
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-zinc-50 text-zinc-900 font-semibold text-[15px] border border-zinc-200 hover:border-zinc-300 transition-all duration-200 shadow-xs hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{siteConfig.hero.secondaryCtaText}</span>
              </a>
            </div>

          </div>

          {/* ===============================================================
              RIGHT COLUMN: Premium Profile Card & Floating Glass Micro-Cards
             =============================================================== */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            
            {/* Visual Glass Container for Profile Photo */}
            <div 
              id="hero-profile-container"
              className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] rounded-3xl p-2.5 bg-gradient-to-b from-white/90 to-zinc-100/70 border border-zinc-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.06)] animate-profile-breath"
            >
              {/* Internal Framing */}
              <div className="w-full h-full rounded-[22px] overflow-hidden bg-zinc-100 relative shadow-inner">
                <img
                  src={imgSrc}
                  onError={handleImageError}
                  referrerPolicy="no-referrer"
                  alt="Gaurav Beniwal — Developer & Digital Product Builder"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />

                {/* Subtle bottom lighting overlay to blend the text nicely */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent pointer-events-none" />

                {/* Bottom nameplate tag */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 px-3 py-2 rounded-xl bg-white/85 backdrop-blur-md border border-white/40 shadow-xs flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-zinc-900">{siteConfig.name}</p>
                    <p className="text-[11px] text-zinc-500 font-medium">Panipat, Haryana</p>
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-800">
                    Active
                  </span>
                </div>
              </div>

              {/* Floating Glass Pill 1: Experience (Top Left) */}
              <div 
                id="floating-badge-exp"
                className="absolute -top-4 -left-4 sm:-left-6 px-3.5 py-2 rounded-2xl bg-white/90 backdrop-blur-md border border-zinc-200 shadow-[0_8px_20px_rgba(0,0,0,0.06)] flex items-center gap-2 animate-float-slow"
              >
                <div className="w-7 h-7 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Experience</p>
                  <p className="text-xs font-bold text-zinc-900">4+ Years Hands-on</p>
                </div>
              </div>

              {/* Floating Glass Pill 2: Age (Top Right) */}
              <div 
                id="floating-badge-age"
                className="absolute top-10 -right-4 sm:-right-6 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-zinc-200 shadow-[0_8px_20px_rgba(0,0,0,0.06)] flex items-center gap-2 animate-float-delayed"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-bold text-zinc-900">{siteConfig.age} Years Old</span>
              </div>

              {/* Floating Glass Pill 3: Product Builder (Bottom Right) */}
              <div 
                id="floating-badge-builder"
                className="absolute -bottom-5 -right-3 sm:-right-5 px-3.5 py-2 rounded-2xl bg-white/90 backdrop-blur-md border border-zinc-200 shadow-[0_8px_20px_rgba(0,0,0,0.06)] flex items-center gap-2.5 animate-float-slow"
              >
                <div className="w-7 h-7 rounded-xl bg-zinc-900 text-white flex items-center justify-center">
                  <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">Specialization</p>
                  <p className="text-xs font-bold text-zinc-900">Digital Product Builder</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* ===================================================================
          HERO MICRO-INTERACTION: Minimal "Scroll to explore" with subtle arrow
         =================================================================== */}
      <div className="mt-12 flex justify-center">
        <a
          id="hero-scroll-indicator"
          href="#about"
          onClick={(e) => scrollToSection(e, 'about')}
          className="group inline-flex flex-col items-center gap-1 text-xs font-medium text-zinc-400 hover:text-zinc-700 transition-colors"
          aria-label="Scroll to explore section"
        >
          <span className="tracking-wide text-[11px] uppercase">Scroll to explore</span>
          <div className="p-1 rounded-full border border-zinc-200 group-hover:border-zinc-300 group-hover:bg-zinc-50 transition-all">
            <ArrowDown className="w-3.5 h-3.5 text-zinc-400 group-hover:text-emerald-600 transition-colors animate-bounce" />
          </div>
        </a>
      </div>

    </section>
  );
}
