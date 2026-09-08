import { useState } from 'react';
import { projects, Project } from '../data/projects';
import { ArrowUpRight, Github, ExternalLink, Code2 } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  // Extract unique categories for optional filter tabs
  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section 
      id="projects" 
      className="py-24 sm:py-28 relative border-t border-zinc-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-xs font-semibold text-zinc-700 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Portfolio &amp; Work</span>
            </div>

            <h2 
              id="projects-heading"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950"
            >
              Selected Work
            </h2>

            <p className="mt-2 text-base text-zinc-600">
              A few things I&apos;ve built across software, web applications, and automation systems.
            </p>
          </div>

          {/* Quick Category Filter Pills */}
          {categories.length > 2 && (
            <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-zinc-100/80 border border-zinc-200/50 self-start md:self-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    activeFilter === cat
                      ? 'bg-white text-zinc-950 shadow-xs border border-zinc-200/60'
                      : 'text-zinc-600 hover:text-zinc-950 hover:bg-white/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Editorial Asymmetric Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8">
          {filteredProjects.map((project, index) => {
            const isFeatured = project.featured ?? (index === 0 || index === 3);

            return (
              <ProjectCard
                key={project.id || index}
                project={project}
                isFeatured={isFeatured && activeFilter === 'All'}
              />
            );
          })}
        </div>

        {/* Bottom Note for Adding Projects */}
        <div className="mt-14 p-4 rounded-2xl bg-zinc-50 border border-zinc-200/70 text-center max-w-xl mx-auto text-xs text-zinc-500">
          <p>
            Have a custom software or digital product requirement?{' '}
            <a 
              href="#contact" 
              className="font-semibold text-emerald-600 hover:text-emerald-700 underline underline-offset-2"
            >
              Let&apos;s build it together &rarr;
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  isFeatured: boolean;
  key?: string | number;
}

// Subcomponent: Individual Editorial Project Card
function ProjectCard({ project, isFeatured }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={`group rounded-3xl bg-white border border-zinc-200/80 hover:border-emerald-500/40 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col overflow-hidden ${
        isFeatured ? 'md:col-span-2' : 'md:col-span-1'
      }`}
    >
      <div className={`grid ${isFeatured ? 'grid-cols-1 lg:grid-cols-12' : 'grid-cols-1'} h-full`}>
        
        {/* Project Preview Image with Aspect Ratio & Gentle Zoom */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative block overflow-hidden bg-zinc-100 ${
            isFeatured ? 'lg:col-span-7 aspect-[16/10]' : 'aspect-[16/10]'
          }`}
          aria-label={`View ${project.title}`}
        >
          {!imageError ? (
            <img
              src={project.image}
              onError={() => setImageError(true)}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-zinc-100 text-zinc-400">
              <Code2 className="w-10 h-10 mb-2 text-zinc-300" />
              <span className="text-xs font-mono font-medium text-zinc-500">{project.category}</span>
              <span className="text-sm font-semibold text-zinc-700 mt-1">{project.title}</span>
            </div>
          )}

          {/* Category Tag on Image */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-zinc-800 border border-zinc-200/70 shadow-xs">
              {project.category}
            </span>
          </div>

          {/* Corner View Icon */}
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200/70 flex items-center justify-center text-zinc-700 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-xs">
            <ArrowUpRight className="w-4 h-4 text-emerald-600" />
          </div>
        </a>

        {/* Project Metadata & Content */}
        <div
          className={`p-6 sm:p-8 flex flex-col justify-between ${
            isFeatured ? 'lg:col-span-5' : ''
          }`}
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                {project.category}
              </span>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 text-zinc-400 hover:text-zinc-900 transition-colors"
                  aria-label="View source on GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight group-hover:text-emerald-950 transition-colors">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4 decoration-zinc-300"
              >
                {project.title}
              </a>
            </h3>

            <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Bottom Area: Tech Tags & Direct Action Button */}
          <div className="mt-6 pt-5 border-t border-zinc-100 flex flex-col gap-4">
            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-medium rounded-lg bg-zinc-100 text-zinc-700 border border-zinc-200/50"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Link */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                <span>Visit Live Site</span>
                <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <span className="text-[11px] font-mono text-zinc-500 bg-zinc-50 px-2 py-0.5 rounded border border-zinc-200/60 truncate max-w-[200px]">
                {project.link.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/$/, '')}
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
