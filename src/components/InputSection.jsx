import { Send, Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import InterviewTypeSelector from './InterviewTypeSelector'

const DEMO_TEXT = "Senior Full Stack Engineer, 5+ years experience with React, Node.js, and AWS. Must have experience with microservices, Docker, and CI/CD pipelines. Strong problem-solving skills and ability to work in fast-paced environments. We're looking for someone who can lead technical initiatives and mentor junior developers."

export default function InputSection({ onAnalyze, isLoading, demoText = '', setDemoText, interviewType, setInterviewType, initialInterviewType = 'full', variant = 'default' }) {
  const [jobDescription, setJobDescription] = useState('')

  useEffect(() => {
    if (demoText) {
      setJobDescription(demoText)
    }
  }, [demoText])

  useEffect(() => {
    if (interviewType === undefined) {
      setInterviewType(initialInterviewType)
    }
  }, [initialInterviewType, interviewType, setInterviewType])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!jobDescription.trim()) return

    onAnalyze(jobDescription, interviewType || initialInterviewType)
  }

  const handleDemoClick = () => {
    setDemoText(DEMO_TEXT)
    setJobDescription(DEMO_TEXT)
  }

  return (
    <section className="glass rounded-3xl p-8 shadow-[0_24px_60px_rgba(0,0,0,0.4)] border border-white/10 backdrop-blur-xl animate-fadeInUp">
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Paste the job description here... (job title, requirements, responsibilities, etc.)"
          className="w-full h-[220px] p-6 rounded-3xl bg-slate-950/80 border border-white/10 text-slate-100 placeholder-slate-500 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg"
          disabled={isLoading}
        />

        <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 shadow-inner shadow-black/10">
          <label className="block text-sm font-semibold text-slate-200 mb-3">Choose preparation focus</label>
          <InterviewTypeSelector
            selectedType={interviewType || initialInterviewType}
            onTypeChange={setInterviewType}
            variant={variant}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-[1fr_auto] mt-6">
          <button
            type="submit"
            disabled={isLoading || !jobDescription.trim()}
            className="w-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white py-5 px-6 rounded-3xl font-semibold text-lg flex items-center justify-center gap-3 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-6 h-6 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Send size={20} />
                Generate Questions
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleDemoClick}
            disabled={isLoading}
            className="rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-sm font-semibold text-slate-200 hover:bg-white/10 hover:border-white/20 transition-colors duration-300"
          >
            Load Demo Description
          </button>
        </div>
      </form>
    </section>
  )
}

