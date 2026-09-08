import { Shield, Lock, Binary, Cpu, Search } from 'lucide-react';

export default function BeyondDevelopment() {
  const securityPillars = [
    { name: "Cybersecurity", icon: Shield, desc: "Defensive posture & secure system design" },
    { name: "Ethical Hacking", icon: Lock, desc: "Understanding attack vectors to strengthen code" },
    { name: "Reverse Engineering", icon: Binary, desc: "Decompiling and analyzing binary execution" },
    { name: "Automation", icon: Cpu, desc: "Scripting repetitive tasks & security telemetry" },
    { name: "Security Research", icon: Search, desc: "Investigating emerging protocols & vulnerabilities" },
  ];

  return (
    <section 
      id="beyond-development" 
      className="py-20 sm:py-24 bg-zinc-50/60 relative border-t border-zinc-100"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle, respectful framing */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-zinc-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.03)] text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-xs font-semibold text-zinc-700 mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Systems &amp; Architecture</span>
          </div>

          <h2 
            id="beyond-dev-heading"
            className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950"
          >
            Beyond Development
          </h2>

          <p className="text-base text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            Development is my primary craft, but technology has never stopped there. I also explore 
            cybersecurity, ethical hacking, reverse engineering and automation — areas that have helped 
            me understand how software behaves from a deeper technical perspective.
          </p>

          {/* Pillars & Tags */}
          <div className="pt-4 flex flex-wrap justify-center gap-3">
            {securityPillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-50 border border-zinc-200/80 hover:border-zinc-300 transition-colors shadow-2xs"
                >
                  <Icon className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-xs font-semibold text-zinc-800">{item.name}</span>
                </div>
              );
            })}
          </div>

          <div className="pt-2 text-[11px] text-zinc-400">
            Note: Security concepts are utilized strictly to architect resilient, bug-free, and defensively engineered applications.
          </div>

        </div>

      </div>
    </section>
  );
}
