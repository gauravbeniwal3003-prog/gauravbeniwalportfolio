import { whatIBuildOfferings } from '../data/whatIBuild';
import { 
  Globe, 
  Layout, 
  Smartphone, 
  Cpu, 
  Box, 
  ShieldCheck 
} from 'lucide-react';

const iconMap = {
  Globe,
  Layout,
  Smartphone,
  Cpu,
  Box,
  ShieldCheck,
};

export default function WhatIBuild() {
  return (
    <section 
      id="what-i-build" 
      className="py-24 sm:py-28 bg-zinc-50/50 border-t border-zinc-100 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200/80 text-xs font-semibold text-zinc-700 mb-3 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Capabilities &amp; Solutions</span>
          </div>

          <h2 
            id="what-i-build-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950"
          >
            What I Build
          </h2>

          <p className="mt-3 text-base text-zinc-600 leading-relaxed">
            Practical technology solutions designed for speed, durability, and business impact. 
            No unnecessary complexity — just reliable software engineered properly.
          </p>
        </div>

        {/* 6 Premium Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {whatIBuildOfferings.map((item) => {
            const IconComponent = iconMap[item.iconName] || Box;
            return (
              <div
                key={item.number}
                id={`build-card-${item.number}`}
                className="group relative p-7 rounded-2xl bg-white/80 backdrop-blur-md border border-zinc-200/80 hover:border-emerald-500/40 hover:bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top card bar: Number + Minimal Line Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-semibold tracking-wider text-zinc-400 group-hover:text-emerald-600 transition-colors">
                      {item.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-zinc-50 border border-zinc-100 group-hover:bg-emerald-50 group-hover:border-emerald-200/50 flex items-center justify-center text-zinc-700 group-hover:text-emerald-600 transition-all duration-200">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-zinc-950 mb-2.5 tracking-tight group-hover:text-emerald-950 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Sub tags */}
                <div className="mt-6 pt-4 border-t border-zinc-100 flex flex-wrap gap-1.5">
                  {item.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-zinc-100/80 text-zinc-600 group-hover:bg-zinc-100 group-hover:text-zinc-800 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
