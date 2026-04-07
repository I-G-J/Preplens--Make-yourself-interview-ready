import { MessageCircle } from 'lucide-react'
import QuestionCard from './QuestionCard'

export default function QuestionsPanel({ questions }) {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 animate-fadeIn">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <MessageCircle className="text-secondary" size={28} />
          <h3 className="text-2xl font-bold">Interview Questions</h3>
        </div>
        <p className="text-slate-400 text-sm">
          {questions.length} tailored questions to prepare for
        </p>
      </div>

      <div className="space-y-4">
        {questions.map((question, i) => (
          <QuestionCard key={i} question={question} index={i} />
        ))}
      </div>
    </section>
  )
}
