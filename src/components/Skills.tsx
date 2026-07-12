// 1. Define the TypeScript shape for a skill item
interface Skill {
  name: string;
  level: string;
  icon: string;
  color: string;
}

// 2. Define the props interface to receive the array from App.tsx
interface SkillsProps {
  skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="py-20 border-t border-slate-800">
      <div className="text-center md:text-left mb-12">
        <h2 className="text-3xl font-bold tracking-tight">Tech Stack</h2>
        <p className="text-slate-400 mt-2">The tools, languages, and frameworks I use to bring ideas to life.</p>
      </div>
      
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div 
            key={skill.name} 
            className={`p-5 rounded-xl border ${skill.color} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-slate-800/40 flex flex-col items-center md:items-start gap-3`}
          >
            <span className="text-2xl">{skill.icon}</span>
            <div>
              <h3 className="font-semibold text-slate-100">{skill.name}</h3>
              <p className="text-xs text-slate-400 mt-0.5">{skill.level}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}