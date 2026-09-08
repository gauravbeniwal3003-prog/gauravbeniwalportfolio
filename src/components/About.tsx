import { siteConfig } from '../config/site';
import { 
  CheckCircle2, 
  Terminal, 
  Layers, 
  Zap, 
  ShieldAlert, 
  Server 
} from 'lucide-react';

export default function About() {
  const capabilities = [
    { label: "Website Builder (Fast & Affordable)", icon: Layers },
    { label: "Full-Stack Web Applications", icon: Terminal },
    { label: "Android & Mobile App Builder", icon: Zap },
    { label: "High-End Scalable E-Commerce", icon: Server },
    { label: "Business Automation Systems", icon: CheckCircle2 },
    { label: "Cybersecurity & Reverse Engineering", icon: ShieldAlert },
  ];

  return (
    <section 
      id="about" 
      className="py-24 sm:py-28 relative border-t border-zinc-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Key Metrics */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-xs font-semibold text-zinc-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Background &amp; Philosophy</span>
            </div>

            <h2 
              id="about-heading"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 leading-tight"
            >
              More than just a developer.
            </h2>

            {/* Experience Indicator Card */}
            <div 
              id="about-experience-card"
              className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-4"
            >
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-zinc-950 tracking-tight">4+</span>
                <span className="text-base font-semibold text-emerald-600">Years Practical Coding</span>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Started building software early. Hundreds of hours spent dissecting applications, 
                experimenting with system internals, and delivering reliable digital products from concept to deployment.
              </p>
              
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-zinc-200/60 text-xs">
                <div>
                  <span className="text-zinc-400 block font-medium">Age</span>
                  <span className="font-bold text-zinc-800 text-sm">{siteConfig.age} Years Old</span>
                </div>
                <div>
                  <span className="text-zinc-400 block font-medium">Based in</span>
                  <span className="font-bold text-zinc-800 text-sm">Panipat &amp; Samalkha, Haryana</span>
                </div>
              </div>
            </div>

            {/* Service & Business Positioning Quote */}
            <div className="p-4 rounded-xl border border-emerald-100 bg-emerald-50/40 text-xs sm:text-sm text-zinc-700 leading-relaxed">
              <p className="font-medium text-emerald-900 mb-1">Looking for a collaboration?</p>
              <p className="text-zinc-600">
                &ldquo;{siteConfig.servicePositioning}&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Narrative Journey & Technical Scope */}
          <div className="lg:col-span-7 space-y-6 text-zinc-600 leading-relaxed text-base">
            <p className="text-lg text-zinc-800 font-medium leading-relaxed">
              I started writing code and experimenting with computers at a young age. 
              Over the last four years, what began as curiosity turned into an intense, disciplined 
              pursuit of software craftsmanship and practical product building.
            </p>

            <p>
              My work stretches across the complete lifecycle of modern software — from sketching clean 
              interfaces and designing relational schemas to architecting resilient APIs, setting up cloud hosting, 
              and writing background automation scripts that save businesses hours of manual effort every day.
            </p>

            <p>
              Beyond standard application development, my technical foundation is anchored in 
              <strong> cybersecurity, ethical hacking, and reverse engineering</strong>. 
              This security research mindset provides a much deeper perspective: rather than merely knowing 
              how to make a website look good, I understand how software runs at the protocol, binary, and network levels.
            </p>

            {/* Scope Matrix */}
            <div className="pt-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4">
                Full Technical Spectrum
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {capabilities.map((cap, idx) => {
                  const Icon = cap.icon;
                  return (
                    <div 
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white border border-zinc-200/70 hover:border-zinc-300 transition-colors shadow-2xs"
                    >
                      <div className="w-8 h-8 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center shrink-0 text-zinc-700">
                        <Icon className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-xs font-semibold text-zinc-800">
                        {cap.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
