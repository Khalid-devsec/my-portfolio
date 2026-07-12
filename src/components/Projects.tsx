// 1. Define the TypeScript shape for a project object
interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  github: string;
}

// 2. Define the props interface to receive data from App.tsx
interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-20 border-t border-slate-800">
      <div className="text-center md:text-left mb-12">
        <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
        <p className="text-slate-400 mt-2">A selection of recent applications and open-source contributions.</p>
      </div>

      {/* 3-Column Grid for Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className="bg-slate-800/40 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 group"
          >
            <div>
              {/* Title */}
              <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              {/* Description */}
              <p className="text-slate-400 text-sm mt-3 line-clamp-3 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mt-6 space-y-4">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-4 pt-2 text-sm font-medium">
                <a href={project.link} className="text-blue-400 hover:text-blue-300 transition-colors">
                  Live Demo &rarr;
                </a>
                <a href={project.github} className="text-slate-400 hover:text-slate-200 transition-colors">
                  GitHub
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}