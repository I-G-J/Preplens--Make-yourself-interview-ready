import QuestionsPanel from './QuestionsPanel'
import SkillsDisplay from './SkillsDisplay'

export default function OutputSection({ questions, skills }) {
  // Safeguard: ensure questions is always an array before filtering
  const questionsList = Array.isArray(questions) ? questions : [];

  const categorized = {
    Easy: questionsList.filter((q) => q.difficulty?.toLowerCase() === 'easy'),
    Medium: questionsList.filter((q) => q.difficulty?.toLowerCase() === 'medium'),
    Hard: questionsList.filter((q) => q.difficulty?.toLowerCase() === 'hard'),
  }

  return (
    <section className="py-12">
      <SkillsDisplay skills={skills} />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-8 animate-fadeInUp">
        {Object.entries(categorized).map(([level, list]) => {
          const tone =
            level === 'Easy' ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-300 shadow-[0_0_30px_rgba(16,185,129,0.18)]' :
            level === 'Medium' ? 'bg-amber-500/20 border-amber-400/50 text-amber-300 shadow-[0_0_30px_rgba(234,179,8,0.2)]' :
            'bg-rose-500/20 border-rose-400/50 text-rose-300 shadow-[0_0_30px_rgba(244,63,94,0.22)]'

          return (
            <article key={level} className={`glass-sm rounded-2xl border p-6 ${tone}`}> 
              <h4 className="text-lg font-bold mb-3">{level} Questions</h4>
              <p className="text-sm text-slate-300 mb-4">{list.length} question(s)</p>
              <div className="space-y-3">
                {list.map((q, idx) => (
                  <div key={idx} className="rounded-xl p-3 border border-white/10 bg-slate-950/20 hover:bg-slate-900/40 transition-smooth">
                    <p className="text-sm font-semibold">{q.question}</p>
                  </div>
                ))}
                {list.length === 0 && <p className="text-sm text-slate-400">No questions available in this category yet.</p>}
              </div>
            </article>
          )
        })}
      </div>

      <QuestionsPanel questions={questionsList} />
    </section>
  )
}
