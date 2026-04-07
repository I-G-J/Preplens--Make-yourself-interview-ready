export default function Loader() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col items-center justify-center">
      <div className="mb-6">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-pulse"></div>
          <div className="absolute inset-2 rounded-full bg-gradient-primary opacity-40 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="absolute inset-4 rounded-full border-2 border-primary opacity-60 animate-spin"></div>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-2">Analyzing your job description...</h3>
      <p className="text-slate-400 text-center max-w-sm">
        Our AI is generating personalized interview questions and key skills for you. This usually takes a few seconds.
      </p>
    </div>
  )
}
