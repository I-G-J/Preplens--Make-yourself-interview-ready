import HeroSection from './HeroSection'
import FeaturesSection from './FeaturesSection'
import { Video, CheckCircle2, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'

const heroHighlights = [
  {
    title: 'Confident Interview Prep',
    description: 'Turn job descriptions into confident interview prep with one click.',
  },
  {
    title: 'Targeted Round Support',
    description: 'Choose targeted prep for JD-specific roles, full prep, and HR rounds inside the analyzer.',
  },
  {
    title: 'Structured Questions & Answers',
    description: 'Get structured questions, answer guidance, and skill focus instantly.',
  },
]

export default function LandingPage({ onStart, onTryDemo }) {
  return (
    <div className="min-h-screen px-6 pb-20 sm:pb-28 bg-slate-950 text-white">
      <HeroSection
        onStart={onStart}
        onTrial={onTryDemo}
      />

      <section className="max-w-6xl mx-auto mt-14 grid gap-4 md:grid-cols-3">
        {heroHighlights.map((highlight) => (
          <div key={highlight.title} className="group rounded-3xl border border-white/10 hover:border-primary/50 bg-slate-900/80 hover:bg-slate-800/80 p-6 shadow-xl hover:shadow-primary/20 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <h3 className="text-xl font-semibold text-white group-hover:text-primary mb-3 transition-colors duration-300">{highlight.title}</h3>
            <p className="text-slate-300 leading-7">{highlight.description}</p>
          </div>
        ))}
      </section>

      {/* Mock Interview Promo Card */}
      <section className="max-w-6xl mx-auto mt-20">
        <Link 
          to="/mock-interview" 
          className="group block max-w-4xl mx-auto bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 rounded-3xl p-12 shadow-2xl hover:shadow-accent/25 hover:scale-[1.02] transition-all duration-500 border-4 border-transparent hover:border-accent/50 cursor-pointer"
        >
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-2xl mb-8 group-hover:bg-white/30 transition-all duration-300">
              <Video className="w-12 h-12 text-white drop-shadow-lg" />
              <span className="text-2xl font-bold text-white drop-shadow-lg">Live Mock Interviews</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white to-slate-100 bg-clip-text text-transparent mb-6 leading-tight">
              Practice with Real Experts
            </h2>
            <p className="text-2xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
              Get personalized 1:1 mock interviews with industry veterans. Real-time feedback, recorded sessions, and actionable insights to ace your next interview.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center pt-8 border-t-4 border-white/20">
              <div className="flex items-center gap-3 text-slate-300 text-lg bg-white/10 px-6 py-3 rounded-xl backdrop-blur-sm group-hover:text-white transition-colors">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                Available slots this week
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-lg bg-white/10 px-6 py-3 rounded-xl backdrop-blur-sm group-hover:text-white transition-colors">
                <Calendar className="w-6 h-6 text-emerald-400" />
                Book in 30 seconds
              </div>
            </div>
          </div>
        </Link>
      </section>

      <FeaturesSection />
    </div>
  )
}
