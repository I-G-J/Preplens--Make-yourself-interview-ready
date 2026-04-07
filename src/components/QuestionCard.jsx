import { Copy } from 'lucide-react'
import { useState } from 'react'

export default function QuestionCard({ question, index }) {
  const [copied, setCopied] = useState(false)

  const getDifficultyColor = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case 'easy':
        return 'border border-emerald-400/50 shadow-[0_0_18px_rgba(34,197,94,0.25)]'
      case 'medium':
        return 'border border-amber-400/50 shadow-[0_0_18px_rgba(234,179,8,0.3)]'
      case 'hard':
        return 'border border-rose-400/50 shadow-[0_0_18px_rgba(244,63,94,0.35)]'
      default:
        return 'border border-slate-500/40'
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(question.question)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getPillColor = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case 'easy':
        return 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/40'
      case 'medium':
        return 'bg-amber-500/20 text-amber-300 border border-amber-400/40'
      case 'hard':
        return 'bg-rose-500/20 text-rose-300 border border-rose-400/40'
      default:
        return 'bg-slate-500/20 text-slate-300 border border-slate-500/40'
    }
  }

  return (
    <div className={`glass rounded-2xl overflow-hidden transition-smooth transform hover:-translate-y-1 hover:scale-[1.01] ${getDifficultyColor(question.difficulty)}`}>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-start gap-3 flex-1">
            <span className="text-primary font-bold text-lg min-w-8">{index + 1}.</span>
            <div className="flex-1">
              <h4 className="font-semibold text-light mb-2">{question.question}</h4>
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPillColor(question.difficulty)}`}>
                  {question.difficulty}
                </span>
                <span className="text-xs text-slate-400">
                  Category: {question.category}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={handleCopy}
            className="p-2 rounded-lg hover:bg-primary/20 transition-smooth text-slate-400 hover:text-primary"
            title="Copy question"
          >
            <Copy size={18} />
          </button>
        </div>


        {copied && (
          <div className="text-xs text-green-400 mt-2">✓ Copied to clipboard</div>
        )}
      </div>
    </div>
  )
}
