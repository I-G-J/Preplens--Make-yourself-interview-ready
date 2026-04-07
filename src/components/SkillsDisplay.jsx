import { TrendingUp } from 'lucide-react'

export default function SkillsDisplay({ skills }) {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case 'beginner':
        return 'bg-green-500/20 text-green-300 border-green-500/30'
      case 'intermediate':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
      case 'advanced':
        return 'bg-red-500/20 text-red-300 border-red-500/30'
      default:
        return 'bg-slate-500/20 text-slate-300 border-slate-500/30'
    }
  }

  const normalizedSkills = Array.isArray(skills)
    ? skills.map((skill) => {
        if (typeof skill === 'string') {
          return {
            name: skill,
            description: `Develop strong expertise in ${skill}.`,
            difficulty: 'Intermediate',
          }
        }

        return {
          name: skill.name || String(skill),
          description: skill.description || `Develop strong expertise in ${skill.name || skill}.`,
          difficulty: skill.difficulty || 'Intermediate',
        }
      })
    : [];

  return (
    <section className="max-w-4xl mx-auto px-6 py-12 animate-fadeIn">
      <div className="glass rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="text-primary" size={28} />
          <h3 className="text-2xl font-bold">Key Skills to Master</h3>
        </div>

        {normalizedSkills.length === 0 ? (
          <div className="rounded-2xl border border-white/10 p-6 bg-slate-950/50 text-slate-300">
            No key skills were detected from this job description. Try a more detailed JD or include explicit technical requirements.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {normalizedSkills.map((skill, i) => (
              <div key={i} className={`group p-4 rounded-lg border transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20 cursor-pointer ${getDifficultyColor(skill.difficulty)} hover:bg-primary/10`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">{skill.name}</h4>
                    <p className="text-sm opacity-80">{skill.description}</p>
                  </div>
                </div>
                <div className="mt-3 inline-block px-3 py-1 rounded-full text-xs font-medium border group-hover:bg-primary/20 group-hover:border-primary/50 group-hover:text-primary transition-all">
                  {skill.difficulty}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
