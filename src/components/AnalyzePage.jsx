import { useEffect, useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import InputSection from './InputSection'
import OutputSection from './OutputSection'
import Loader from './Loader'

const pageVariants = {
  technical: {
    title: 'Technical Interview Prep',
    description: 'Choose between full prep, JD-specific technical questions, or HR round coaching for your technical role.',
    options: [
      { id: 'full', label: 'Full Prep', description: 'Complete prep for the entire interview process.' },
      { id: 'technical', label: 'JD Specific', description: 'Generate questions directly matched to the technical job description.' },
      { id: 'hr', label: 'HR Round', description: 'Prepare for HR questions alongside your technical prep.' },
    ],
  },
  nontechnical: {
    title: 'Non-Technical Interview Prep',
    description: 'Pick full prep, JD-specific role questions, or HR round practice for non-technical roles.',
    options: [
      { id: 'full', label: 'Full Prep', description: 'Complete prep for the whole hiring experience.' },
      { id: 'nontechnical', label: 'JD Specific', description: 'Generate non-technical questions tailored to the job description.' },
      { id: 'hr', label: 'HR Round', description: 'Build strong answers for HR conversations and culture fit.' },
    ],
  },
  hr: {
    title: 'HR Round Prep',
    description: 'Focus on HR readiness: culture fit, behavioral questions, and communication strategy.',
    options: [
      { id: 'full', label: 'Full Prep', description: 'Complete prep across all rounds with HR-specific focus.' },
      { id: 'hr', label: 'HR Round', description: 'Deep dive into HR and behavioral question prep.' },
    ],
  },
}

export default function AnalyzePage({
  onBack,
  onAnalyze,
  isLoading,
  results,
  setDemoText,
  demoText,
  error,
  initialInterviewType = 'full',
  pageVariant = 'default',
}) {
  const [interviewType, setInterviewType] = useState(initialInterviewType)

  useEffect(() => {
    setInterviewType(initialInterviewType)
  }, [initialInterviewType])

  const variantConfig = pageVariants[pageVariant]
  const title = variantConfig?.title || 'Analyze Job Description'
  const description = variantConfig?.description || 'Paste a job description and generate a personalized interview strategy.'

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 py-16 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-900 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-[30rem] h-[30rem] bg-purple-500/5 rounded-full blur-3xl animate-blur"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-[24rem] h-[24rem] bg-blue-500/5 rounded-full blur-3xl animate-blur delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] bg-gradient-to-r from-purple-400/10 via-blue-400/10 to-purple-400/10 rounded-full blur-[100px] opacity-80 animate-pulse"></div>
      </div>

      <div className="w-full max-w-5xl relative z-10">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-all duration-300 mb-12 backdrop-blur-sm hover:bg-white/5 px-4 py-2 rounded-xl"
        >
          <ArrowLeft size={16} /> Back to home
        </button>

        <header className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent mb-4 leading-tight drop-shadow-2xl">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
            {description}
          </p>
        </header>

        {variantConfig && (
          <div className="grid gap-4 md:grid-cols-3 mb-10">
            {variantConfig.options.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setInterviewType(option.id)}
                className={`rounded-3xl border p-6 text-left transition-all duration-300 shadow-xl ${
                  interviewType === option.id
                    ? 'border-blue-400/60 bg-blue-500/10 text-white shadow-blue-500/20'
                    : 'border-white/10 bg-slate-900/70 text-slate-300 hover:border-white/20 hover:bg-slate-900/90'
                }`}
              >
                <div className="text-sm uppercase tracking-[0.24em] text-slate-400 mb-3">{option.label}</div>
                <p className="text-base leading-7">{option.description}</p>
              </button>
            ))}
          </div>
        )}

        {error && (
          <div className="mb-8 p-4 bg-red-500/10 border border-red-500/30 rounded-2xl text-red-300">
            {error}
          </div>
        )}

        <div className="relative mt-4 animate-[fadeInUp_0.8s_ease-out] backdrop-blur-md rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-3xl blur-xl -z-10 animate-subtle-glow"></div>
          <InputSection
            onAnalyze={onAnalyze}
            isLoading={isLoading}
            demoText={demoText}
            setDemoText={setDemoText}
            interviewType={interviewType}
            setInterviewType={setInterviewType}
            initialInterviewType={initialInterviewType}
            variant={pageVariant}
          />
        </div>

        <div className="mt-16">{isLoading && <Loader />}</div>

        {results && !isLoading && (
          <div className="mt-12 animate-fadeInUp">
            <OutputSection questions={results.questions} skills={results.skills} />
          </div>
        )}
      </div>
    </section>
  )
}
