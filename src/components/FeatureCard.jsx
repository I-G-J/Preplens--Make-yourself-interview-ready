export default function FeatureCard({ icon: Icon, title, description, className = '' }) {
  return (
    <article className={`glass-sm rounded-2xl p-6 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-smooth transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(139,92,246,0.35)] ${className}`}>
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500/80 flex items-center justify-center text-white mb-4 shadow-sm">
        <Icon size={22} />
      </div>
      <h4 className="text-xl font-bold mb-2 text-slate-100">{title}</h4>
      <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
    </article>
  )
}
