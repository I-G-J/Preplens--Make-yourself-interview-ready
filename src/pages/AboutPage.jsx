import { Brain, Shield, Zap, Users, ArrowRight, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_100%)] text-white pt-24 px-4">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
            Revolutionizing Interview Preparation
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            PrepLens uses cutting-edge AI to analyze job descriptions and generate personalized interview questions, 
            helping you prepare smarter and land your dream job faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="group flex items-center gap-3 px-8 py-4 bg-white text-dark font-semibold rounded-2xl shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 max-w-max mx-auto"
            >
              Get Started Free
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto py-24">
        <h2 className="text-4xl font-bold text-center mb-20">Why Choose PrepLens?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-all">
              <Brain className="w-8 h-8 text-primary group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-white">AI-Powered Analysis</h3>
            <p className="text-slate-300 leading-relaxed">Advanced NLP models extract key skills and generate targeted questions from any job description.</p>
          </div>
          <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary/30 transition-all">
              <Shield className="w-8 h-8 text-secondary group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-white">Technical + Behavioral</h3>
            <p className="text-slate-300 leading-relaxed">Complete coverage with technical deep dives, behavioral questions, and HR screening prep.</p>
          </div>
          <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-all">
              <Zap className="w-8 h-8 text-accent group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-white">Instant Results</h3>
            <p className="text-slate-300 leading-relaxed">Generate comprehensive prep materials in seconds. No waiting, just actionable insights.</p>
          </div>
          <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/30 transition-all">
              <Users className="w-8 h-8 text-emerald-500 group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-white">Proven Success</h3>
            <p className="text-slate-300 leading-relaxed">Join thousands of professionals who've aced interviews using PrepLens AI insights.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto py-24 text-center">
        <h2 className="text-4xl font-bold mb-8">Ready to Ace Your Next Interview?</h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">Start preparing with AI-powered insights tailored specifically to your target role.</p>
        
        <Link
          to="/"
          className="px-8 py-3 bg-slate-800/50 hover:bg-slate-700 text-slate-200 rounded-xl font-semibold transition-all border hover:border-slate-600"
        >
          ← Back to Home
        </Link>
      </section>
    </div>
  );
}
