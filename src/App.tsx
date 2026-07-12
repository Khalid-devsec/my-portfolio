import { useState } from 'react'
import Hero from './components/Hero'
import Experience from './components/Experience'

// Standard imports for remaining valid utility icons
import { Mail, SquarePen } from 'lucide-react' 

// Real imports linked directly to your dropped files
import myProfileImg from './assets/profile.png'
import certIcipImg from './assets/opswat-cert.png'
import certIsc2Img from './assets/isc2-cert.png'
import isbatLogoImg from './assets/isbat.png'
import wazuhProjImg from './assets/wazuh.png'
import greTunnelImg from './assets/Site-to-Site GRE Tunnel.png'

export default function App() {
  const [isCopied, setIsCopied] = useState(false)
  const [featuredProjectIndex, setFeaturedProjectIndex] = useState(0)

  const featuredProjects = [
    {
      title: 'Wazuh SIEM System',
      category: 'Security Automation',
      description: 'Deployed an end-to-end Wazuh SIEM ecosystem executing automated log collection and threat correlation.',
      image: wazuhProjImg,
      link: 'https://github.com/Khalid-devsec/wazuh-siem-lab',
      github: 'https://github.com/Khalid-devsec/wazuh-siem-lab',
    },
    {
      title: 'GRE Tunnel Architecture',
      category: 'Network Security',
      description: 'Designed a secure site-to-site GRE tunnel with traffic filtering and monitoring for resilient enterprise connectivity.',
      image: greTunnelImg,
      link: 'https://github.com/Khalid-devsec',
      github: 'https://github.com/Khalid-devsec',
    },
  ]

  const projectHighlights = [
    {
      title: 'Wazuh SIEM System',
      description: 'End-to-end Wazuh SIEM deployment with threat detection rules and log ingestion pipelines.',
      badge: 'Wazuh, ELK, Security',
      github: 'https://github.com/Khalid-devsec/wazuh-siem-lab',
    },
    {
      title: 'GRE Tunnel Architecture',
      description: 'GRE tunnel build for secure cross-site connectivity and monitored traffic handling.',
      badge: 'GRE, Routing, Network Security',
      github: 'https://github.com/Khalid-devsec',
    },
  ]

  const featuredProject = featuredProjects[featuredProjectIndex]
  const totalFeatured = featuredProjects.length

  const nextFeatured = () => setFeaturedProjectIndex((value) => (value + 1) % totalFeatured)
  const prevFeatured = () => setFeaturedProjectIndex((value) => (value - 1 + totalFeatured) % totalFeatured)

  const networkBackground = `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="1400" height="1000" viewBox="0 0 1400 1000">
      <rect width="1400" height="1000" fill="transparent" />
      <g stroke="rgba(255,255,255,0.08)" stroke-width="1.5" fill="none">
        <path d="M80 180 C260 180, 300 320, 470 320 S760 140, 910 140 S1120 300, 1320 300" />
        <path d="M70 520 C250 520, 280 690, 430 690 S720 500, 920 500 S1080 620, 1320 620" />
        <path d="M140 830 L340 830" />
        <path d="M680 120 L680 300 L820 300" />
        <path d="M460 320 L460 440 L620 440" />
        <circle cx="470" cy="320" r="8" fill="rgba(249,115,22,0.35)" />
        <circle cx="920" cy="500" r="8" fill="rgba(249,115,22,0.35)" />
        <circle cx="680" cy="300" r="8" fill="rgba(249,115,22,0.35)" />
        <rect x="1040" y="240" width="90" height="60" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" />
        <rect x="1040" y="560" width="100" height="70" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" />
      </g>
    </svg>
  `)}`

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#06070a] text-slate-200 font-sans selection:bg-orange-500/30 selection:text-orange-400">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-45"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(6,7,10,0.18) 0%, rgba(6,7,10,0.9) 100%), url(${networkBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at top left, rgba(249,115,22,0.16), transparent 30%), radial-gradient(circle at bottom right, rgba(249,115,22,0.13), transparent 32%)',
        }}
      />

      {/* HEADER / NAVIGATION */}
      <header className="border-b border-zinc-800/70 bg-[#06070a]/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between font-sans text-sm">
          <div className="font-bold text-white tracking-tight hover:text-orange-400 transition-colors cursor-pointer">
            Khalid Abdullahi
          </div>
          
          <nav className="hidden md:flex items-center gap-6 text-zinc-300 font-medium text-xs">
            <a href="#" className="hover:text-white transition-colors text-white">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#expertise" className="hover:text-white transition-colors">Expertise</a>
            <a href="#writeups" className="hover:text-white transition-colors">Write-ups</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#timeline" className="hover:text-white transition-colors">Certs</a>
          </nav>
          
          <div className="flex items-center gap-4 text-zinc-400">
            <a href="mailto:abdullahikhalid918@gmail.com" className="hover:text-orange-400 transition-colors">
              <Mail className="w-4 h-4" />
            </a>
            <a href="https://github.com/Khalid-devsec/" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/khalid-abdullahi-535b543a6" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="https://medium.com/@khalid_abdullahi" className="hover:text-orange-400 transition-colors">
              <SquarePen className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-4 py-12 space-y-28">
        <Hero />

        {/* 01. PROFESSIONAL_NARRATIVE */}
        <section id="about" className="space-y-6">
          <h2 className="font-mono text-xs tracking-widest text-zinc-400 font-bold uppercase flex items-center gap-2">
            <span className="text-orange-500"></span> PROFESSIONAL_NARRATIVE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-2 space-y-4 text-zinc-300 text-sm leading-relaxed font-sans">
              <p>My entry into cybersecurity began with a fundamental curiosity about how modern enterprise landscapes operate under adversarial conditions. That spark quickly evolved into rigorous hands-on practice building secure network layers, evaluating defenses, and configuring security systems.</p>
              <p>I actively operate under an <span className="text-white font-semibold">"Assume Breach"</span> mentality. My approach relies heavily on proactive endpoint inspection, precise log enrichment workflows, and defensive automation setups designed to discover and stop infrastructure threats before serious impact occurs.</p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-72 h-80 sm:w-80 sm:h-[24rem] bg-zinc-900 rounded-2xl border border-zinc-800 p-2 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.35)] flex items-center justify-center">
                <img src={myProfileImg} alt="Khalid Abdullahi" className="w-full h-full object-cover rounded-xl transition-all duration-500 hover:scale-105" />
              </div>
            </div>
          </div>
        </section>

        {/* 02. EXPERIENCE_LOG */}
        <Experience />

        {/* 03. CORE EXPERTISE */}
        <section id="expertise" className="space-y-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-mono text-xs tracking-widest text-zinc-400 font-bold uppercase flex items-center gap-2">
              <span className="text-orange-500"></span> CORE_EXPERTISE
            </h2>
            <p className="text-sm text-zinc-400">Focused on resilient, layered security operations.</p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/80 via-zinc-900/70 to-zinc-950/80 p-5 sm:p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_20px_60px_rgba(0,0,0,0.35)]">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-orange-400">
                  <span className="h-2 w-2 rounded-full bg-orange-500" />
                  Security domains
                </div>
                <h3 className="mt-3 text-xl font-semibold text-white">Operational focus across the full defense lifecycle</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  From network hardening to incident response, I concentrate on practical controls and automation that reduce risk without adding needless noise.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 py-3 text-sm text-zinc-300">
                <div className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">Current emphasis</div>
                <div className="mt-2 font-medium text-white">Detection engineering • Threat hunting • Secure architecture</div>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                ['Network Security', 'Designing and hardening enterprise connectivity, segmentation, and routing controls.'],
                ['Threat Hunting', 'Investigating suspicious activity and tuning detections to catch anomalies early.'],
                ['Access Control', 'Strengthening identity, privilege, and least-privilege practices.'],
                ['Vulnerability Assessment', 'Evaluating systems and prioritizing remediation for real exposure.'],
                ['Linux Administration', 'Maintaining resilient, auditable server environments with secure baselines.'],
                ['Incident Response', 'Coordinating response workflows and containment for critical events.'],
              ].map(([title, description]) => (
                <div key={title} className="group rounded-xl border border-zinc-800 bg-zinc-900/70 p-4 transition hover:-translate-y-0.5 hover:border-orange-500/40 hover:bg-zinc-900">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" />
                    <h4 className="text-sm font-semibold text-white">{title}</h4>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 04. WRITE-UP */}
        <section id="writeups" className="space-y-6">
          <div className="relative overflow-hidden rounded-[28px] border border-zinc-800 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.18),transparent_35%),linear-gradient(135deg,rgba(24,24,27,0.95),rgba(9,9,11,0.95))] p-6 sm:p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_25px_80px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0)_40%,rgba(255,255,255,0.02)_100%)]" />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-orange-400">
                  <SquarePen className="h-3.5 w-3.5" />
                  Featured write-up
                </div>
                <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-white">Magic of Internship</h2>
                <p className="mt-3 text-sm sm:text-[15px] leading-7 text-zinc-400">
                  A candid reflection on the lessons, growth, and unforgettable moments that shaped my internship journey.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-zinc-700 bg-zinc-950/60 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-zinc-500">Career Growth</span>
                  <span className="rounded-full border border-zinc-700 bg-zinc-950/60 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-zinc-500">Learning</span>
                  <span className="rounded-full border border-zinc-700 bg-zinc-950/60 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-zinc-500">Experience</span>
                </div>
              </div>
              <a
                href="https://medium.com/@khalid_abdullahi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-orange-500 bg-orange-500/15 px-5 py-2.5 text-sm font-medium text-orange-300 transition hover:bg-orange-500/20 hover:text-white"
              >
                Read more about it
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* 05. PROJECTS */}
        <section id="projects" className="space-y-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between border-b border-zinc-800 pb-4">
            <div>
              <h2 className="font-mono text-xs tracking-widest text-zinc-400 font-bold uppercase flex items-center gap-2">
                <span className="text-orange-500"></span> PROJECTS
              </h2>
              <p className="text-slate-400 text-sm mt-2 max-w-2xl">quick access to My Projects.</p>
            </div>
            <a href="https://github.com/Khalid-devsec/" className="text-xs text-orange-500 hover:text-white transition-colors">
              View all projects &rarr;
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.7fr_1fr]">
            <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 shadow-2xl">
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img src={featuredProject.image} alt={featuredProject.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#121214]/95 via-[#121214]/45 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">{featuredProject.category}</p>
                <h3 className="mt-3 text-3xl font-bold tracking-tight text-white">{featuredProject.title}</h3>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">{featuredProject.description}</p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a href={featuredProject.link} className="inline-flex rounded-full border border-orange-500 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-300 transition hover:bg-orange-500/20">
                    Live demo
                  </a>
                  <a href={featuredProject.github} className="inline-flex items-center rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-orange-500 hover:text-orange-300">
                    GitHub
                  </a>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-4">
                <button type="button" onClick={prevFeatured} className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-950/70 text-slate-200 transition hover:border-orange-500 hover:text-orange-300">
                  <span className="sr-only">Previous project</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button type="button" onClick={nextFeatured} className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-950/70 text-slate-200 transition hover:border-orange-500 hover:text-orange-300">
                  <span className="sr-only">Next project</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>

              <div className="absolute bottom-6 left-6 flex items-center gap-2">
                {featuredProjects.map((project, index) => (
                  <button key={project.title} type="button" onClick={() => setFeaturedProjectIndex(index)} className={`h-2.5 w-2.5 rounded-full transition ${index === featuredProjectIndex ? 'bg-orange-400' : 'bg-slate-600 hover:bg-slate-400'}`} aria-label={`Show ${project.title}`} />
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {projectHighlights.map((project) => (
                <div key={project.title} className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 transition hover:border-orange-500/60 hover:bg-zinc-900/80">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800 text-orange-400 shadow-sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <path d="M3 7v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7" />
                      <path d="M16 3H8a2 2 0 0 0-2 2v2h12V5a2 2 0 0 0-2-2Z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-white">{project.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{project.description}</p>
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <span className="rounded-full bg-slate-950/70 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-slate-500">{project.badge}</span>
                    <a href={project.github} className="text-xs font-semibold text-orange-400 hover:text-orange-300">View on GitHub</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUALIFICATIONS & TIMELINE */}
        <section id="timeline" className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-mono text-xs tracking-widest text-zinc-400 font-bold uppercase flex items-center gap-2">
              <span className="text-orange-500"></span> QUALIFICATIONS_TIMELINE
            </h2>
            <span className="hidden sm:inline-flex rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-zinc-500">
              Selected milestones
            </span>
          </div>

          <div className="rounded-[24px] border border-zinc-800 bg-[linear-gradient(135deg,rgba(24,24,27,0.95),rgba(9,9,11,0.95))] p-4 sm:p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_20px_60px_rgba(0,0,0,0.25)]">
            <div className="grid gap-4 lg:grid-cols-[1.25fr_0.8fr]">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 transition hover:border-orange-500/40 hover:bg-zinc-900">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-orange-400">Credential</span>
                    <span className="rounded-full border border-orange-900/50 bg-orange-950/40 px-2 py-1 text-[10px] font-semibold text-orange-400">Jun 2026</span>
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-white">OPSWAT ICIP</h3>
                  <p className="mt-2 text-[12px] leading-5 text-zinc-400">Introduction to Critical Infrastructure Protection</p>
                  <img src={certIcipImg} alt="OPSWAT ICIP Credential" className="mt-4 h-24 w-full rounded-lg object-contain bg-zinc-950/60 p-2" />
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 transition hover:border-orange-500/40 hover:bg-zinc-900">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-orange-400">Credential</span>
                    <span className="rounded-full border border-orange-900/50 bg-orange-950/40 px-2 py-1 text-[10px] font-semibold text-orange-400">May 2026</span>
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-white">ISC2 Candidate</h3>
                  <p className="mt-2 text-[12px] leading-5 text-zinc-400">Cybersecurity certification pathway underway</p>
                  <img src={certIsc2Img} alt="ISC2 Candidate Credential" className="mt-4 h-24 w-full rounded-lg object-contain bg-zinc-950/60 p-2" />
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">Education</span>
                  <span className="rounded-full border border-zinc-700 bg-zinc-800/80 px-2 py-1 text-[10px] font-semibold text-zinc-400">Ongoing</span>
                </div>
                <h3 className="mt-3 text-sm font-semibold text-white">B.Sc. Networking & Cyber Security</h3>
                <p className="mt-2 text-[12px] leading-5 text-zinc-400">ISBAT University — School of Science</p>
                <img src={isbatLogoImg} alt="ISBAT University Credential" className="mt-4 h-24 w-full rounded-lg object-contain bg-zinc-900/70 p-3" />
              </div>
            </div>
          </div>
        </section>

        {/* TERMINAL SIMULATOR */}
        <section className="space-y-4 pt-4">
          <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 p-5 shadow-[0_0_30px_rgba(249,115,22,0.08)]">
            <div className="flex items-center gap-2 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
              <span className="ml-2 text-[11px] uppercase tracking-[0.3em] text-zinc-500">access granted</span>
            </div>
            <div className="rounded-lg border border-zinc-800/70 bg-[#07080b] p-4 font-mono text-xs text-zinc-300 space-y-2">
              <div className="flex items-center justify-between text-zinc-500">
                <span>khalid@security-node:~</span>
                <button onClick={() => { navigator.clipboard.writeText('nmap -sV target.local'); setIsCopied(true); setTimeout(() => setIsCopied(false), 2000) }} className="hover:text-orange-400 font-bold transition-colors">
                  {isCopied ? '[COPIED!]' : '[COPY_CMD]'}
                </button>
              </div>
              <div className="space-y-1.5 text-zinc-200">
                <p>khalid@node-01:~$ <span className="text-orange-400 font-bold">nmap -sV target.local</span></p>
                <p className="text-zinc-500">System access authenticated. </p>
                <p className="text-white">22/tcp <span className="text-orange-500 font-bold">open</span> ssh</p>
                <p className="text-white">80/tcp <span className="text-orange-500 font-bold">open</span> http</p>
              </div>
            </div>
          </div>
        </section>

        {/* INITIATE_CONTACT */}
        <section className="text-center pt-8 space-y-6 border-t border-zinc-900">
          <h2 className="font-mono text-sm tracking-widest text-white font-black">INITIATE_CONTACT</h2>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 font-mono text-xs">
            <a href="mailto:abdullahikhalid918@gmail.com" className="w-full sm:w-auto px-6 py-3 rounded bg-orange-500 text-zinc-950 font-bold transition-all text-center">SEND_ENCRYPTED_MESSAGE</a>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-900 mt-20 bg-[#0c0c0e]">
        <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-zinc-500">
          <span>&copy; 2026 KHALID_ACCESS_GRANTED</span>
        </div>
      </footer>
    </div>
  )
}