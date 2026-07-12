import { useState } from 'react'

const experienceData = [
  {
    company: 'GTBank',
    role: 'Information Security Intern',
    period: '2026 - PRESENT',
    tasks: [
      'Assisting with regular vulnerability detection metrics and log architecture remediation steps across enterprise frameworks.',
      'Monitoring centralized alert parameters and events to isolate, evaluate, and neutralize active network security anomalies.',
      'Contributing directly to the updates, drafting, and testing validation rules for modern system access control baselines.'
    ]
  },
  // You can add more companies here later
]

export default function Experience() {
  const [selectedIdx, setSelectedIdx] = useState(0)
  const exp = experienceData[selectedIdx]

  return (
    <section id="experience" className="space-y-6">
      <h2 className="font-mono text-xs tracking-widest text-zinc-400 font-bold uppercase flex items-center gap-2">
        <span className="text-orange-500"></span> EXPERIENCE_LOG
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Company Selection */}
        <div className="flex md:flex-col gap-2 min-w-[150px]">
          {experienceData.map((item, idx) => (
            <button
              key={item.company}
              onClick={() => setSelectedIdx(idx)}
              className={`px-4 py-2 text-left text-sm font-mono border-l-2 transition-all ${
                selectedIdx === idx 
                  ? 'border-orange-500 text-white bg-zinc-900/50' 
                  : 'border-zinc-800 text-zinc-500 hover:text-zinc-300 hover:border-zinc-600'
              }`}
            >
              {item.company}
            </button>
          ))}
        </div>

        {/* The Vertical Line Divider */}
        <div className="hidden md:block w-[1px] bg-zinc-800"></div>

        {/* Right: Details */}
        <div className="flex-1 pb-4">
          <h3 className="text-lg font-bold text-white">
            {exp.role} <span className="text-orange-500">@ {exp.company}</span>
          </h3>
          <p className="text-xs font-mono text-zinc-500 mt-1 mb-6">{exp.period}</p>
          <ul className="space-y-4">
            {exp.tasks.map((task, i) => (
              <li key={i} className="flex gap-3 text-zinc-300 text-sm leading-relaxed">
                <span className="text-orange-500 mt-1">▹</span>
                {task}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}