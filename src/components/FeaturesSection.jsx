import { Cpu, Search, ShieldCheck, Sparkles } from 'lucide-react'
import FeatureCard from './FeatureCard'

export default function FeaturesSection() {
  const features = [
    {
      icon: Cpu,
      title: 'AI-Powered Predictions',
      description: 'Get interview questions based on real-world hiring patterns',
    },
    {
      icon: Search,
      title: 'Smart JD Analysis',
      description: 'We break down job descriptions to extract what truly matters',
    },
    {
      icon: ShieldCheck,
      title: 'Confidence Boosting',
      description: 'Prepare structured answers with clarity and confidence',
    },
    {
      icon: Sparkles,
      title: 'Personal AI Coach',
      description: 'Your always-available interview assistant',
    },
  ]

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 animate-fadeInUp">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Why top performers choose PrepLens</h2>
        <p className="mt-3 text-slate-300 text-base md:text-lg max-w-2xl mx-auto">A premium suite powered by AI, designed to train you faster and more confidently.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-2">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  )
}
