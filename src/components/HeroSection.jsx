export default function HeroSection({ onStart, onTrial }) {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-4rem)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-violet-500/15 blur-3xl" />
        <div className="absolute -left-24 bottom-20 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200 shadow-lg shadow-slate-900/20 backdrop-blur-xl">
            Start preparing and get AI-backed interview questions based on your JD.
          </span>

          <h1 className="mt-8 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Build a smarter, tailored interview plan in seconds.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Paste your job description and generate a polished interview roadmap with target skills, sample questions, and confidence-boosting prep notes.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <button
              onClick={onStart}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-violet-600 px-8 py-4 text-base font-semibold text-white shadow-[0_24px_100px_-40px_rgba(59,130,246,0.8)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_30px_110px_-35px_rgba(139,92,246,0.7)] focus:outline-none focus:ring-2 focus:ring-blue-400/40"
            >
              Generate My Interview Plan
            </button>
            <button
              onClick={onTrial}
              className="rounded-full border border-white/10 bg-slate-900/70 px-6 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-800/90"
            >
              Try demo preview
            </button>
          </div>

          <p className="mt-6 max-w-xl text-sm text-slate-500">
            Trusted by ambitious candidates for JD-specific prep, confident interview rounds, and polished employer-ready answers.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/85 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                Top Skills
              </span>
              <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium uppercase text-slate-300">
                AI-extracted
              </span>
            </div>

            <div className="mt-5 space-y-4">
              <div className="rounded-3xl bg-slate-900/90 p-4">
                <p className="text-sm text-slate-400">Communication</p>
                <p className="mt-2 text-lg font-semibold text-white">Stakeholder storytelling</p>
              </div>
              <div className="rounded-3xl bg-slate-900/90 p-4">
                <p className="text-sm text-slate-400">System design</p>
                <p className="mt-2 text-lg font-semibold text-white">Scalable architecture</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/85 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                Sample Question
              </span>
              <span className="text-xs text-slate-500">Preview</span>
            </div>

            <div className="mt-5 space-y-4">
              <div className="rounded-3xl bg-slate-900/90 p-4">
                <p className="text-sm text-slate-400">Behavioral</p>
                <p className="mt-3 text-base font-semibold text-white">
                  Tell me about a time you used data to influence a hiring decision.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-900/90 p-4">
                <p className="text-sm text-slate-400">Technical</p>
                <p className="mt-3 text-base font-semibold text-white">
                  How would you design an interview prep workflow for resume parsing?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
