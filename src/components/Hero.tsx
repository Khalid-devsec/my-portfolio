import { Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-12 pb-4 space-y-6 max-w-2xl">
      {/* Main Greeting */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-orange-400 shadow-[0_0_18px_rgba(249,115,22,0.16)]">
          <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
          InfoSec
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-slate-100 tracking-tight font-sans select-none">
          hi, <span className="text-orange-500 drop-shadow-[0_0_12px_rgba(249,115,22,0.3)]">khalid</span> here
          <span className="text-orange-500 ml-1 font-extralight inline-block animate-[pulse_0.3s_infinite]">|</span>
        </h1>
      </div>

      {/* Subtext */}
      <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-sans max-w-xl">
        Cybersecurity & Network Infrastructure Specialist. I specialize in building secure network architectures, configuring automated SIEM systems, and responding to threats in high-stakes enterprise environments.
      </p>

      {/* Buttons Container */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
        {/* Say Selam Button */}
        <a
          href="mailto:abdullahikhalid918@gmail.com?subject=Hello%20Khalid&body=Hi%20Khalid%2C%0A%0AI%20saw%20your%20portfolio%20and%20wanted%20to%20reach%20out."
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 border border-orange-500/80 hover:border-orange-500 bg-orange-500/5 hover:bg-orange-500/10 text-orange-500 px-5 py-2.5 rounded-md font-medium font-sans text-sm transition-all shadow-sm hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]"
        >
          <Mail className="w-4 h-4" />
          <span>Say Selam!</span>
        </a>

        {/* Download CV Button */}
        <a
          href="/Student%20CV.pdf"
          download="Student CV.pdf"
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 border border-zinc-700 hover:border-zinc-500 bg-zinc-800 hover:bg-zinc-700 text-white px-5 py-2.5 rounded-md font-medium font-sans text-sm transition-all shadow-sm hover:shadow-[0_0_18px_rgba(255,255,255,0.08)]"
        >
          <span>Download CV</span>
        </a>
      </div>
    </section>
  )
}