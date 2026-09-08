import { experienceTimeline } from '../data/experience';
import { Calendar, CheckCircle } from 'lucide-react';

export default function Experience() {
  return (
    <section 
      id="experience" 
      className="py-24 sm:py-28 bg-zinc-50/40 relative border-t border-zinc-100"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200/80 text-xs font-semibold text-zinc-700 mb-3 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Timeline</span>
          </div>

          <h2 
            id="experience-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950"
          >
            4+ years of building.
          </h2>

          <p className="mt-3 text-base text-zinc-600">
            A chronological timeline of hands-on technical evolution, continuous shipping, and domain expansion.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-zinc-200/80 ml-3 sm:ml-6 space-y-10">
          {experienceTimeline.map((item, index) => (
            <div 
              key={index}
              id={`timeline-item-${index}`}
              className="relative pl-6 sm:pl-8 group"
            >
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-zinc-300 group-hover:border-emerald-500 transition-colors flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 group-hover:bg-emerald-500 transition-colors" />
              </div>

              {/* Timeline Card */}
              <div className="p-6 rounded-2xl bg-white border border-zinc-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:border-zinc-300 transition-all duration-200">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                    <Calendar className="w-3 h-3" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-zinc-950 tracking-tight mb-2">
                  {item.focus}
                </h3>

                <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                {item.highlights && item.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-zinc-100">
                    {item.highlights.map((highlight, hIdx) => (
                      <span 
                        key={hIdx}
                        className="inline-flex items-center gap-1 text-xs text-zinc-600 font-medium bg-zinc-50 px-2.5 py-1 rounded-lg border border-zinc-100"
                      >
                        <CheckCircle className="w-3 h-3 text-emerald-500" />
                        <span>{highlight}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
