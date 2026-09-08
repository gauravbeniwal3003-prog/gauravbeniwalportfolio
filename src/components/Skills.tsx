import { skillCategories, highlightSkills } from '../data/skills';
import { Cpu } from 'lucide-react';

export default function Skills() {
  return (
    <section 
      id="skills" 
      className="py-24 sm:py-28 relative border-t border-zinc-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-xs font-semibold text-zinc-700 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Technologies &amp; Tools</span>
          </div>

          <h2 
            id="skills-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950"
          >
            Technical Stack
          </h2>

          <p className="mt-3 text-base text-zinc-600">
            A curated set of technologies, languages, and runtime tools I use regularly to build reliable digital products.
          </p>
        </div>

        {/* Quick Flat Pills Bar */}
        <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto mb-14">
          {highlightSkills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-pill px-3.5 py-1.5 rounded-full text-xs font-semibold text-zinc-800 shadow-2xs flex items-center gap-1.5"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>{skill}</span>
            </div>
          ))}
        </div>

        {/* Categorized Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-zinc-50/70 border border-zinc-200/80 hover:border-zinc-300 hover:bg-white transition-all duration-200 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-700">
                    <Cpu className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <h3 className="text-sm font-bold text-zinc-900">{cat.title}</h3>
                </div>

                <p className="text-xs text-zinc-500 leading-relaxed mb-4">
                  {cat.description}
                </p>
              </div>

              {/* Skills list inside category */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-200/50">
                {cat.skills.map((s, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white border border-zinc-200 text-zinc-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
