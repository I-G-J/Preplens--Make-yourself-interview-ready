import { BrowserRouter, Routes, Route, useNavigate, Navigate, useLocation, Link } from 'react-router-dom'
import { useState } from 'react'
import { ClerkProvider } from '@clerk/react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import AnalyzePage from './components/AnalyzePage'
import LoginPage from './pages/LoginPage'
import AboutPage from './pages/AboutPage'
import PrivacyPage from './pages/PrivacyPage'
import MockInterviewPage from './pages/MockInterviewPage'

import ProtectedRoute from './components/ProtectedRoute'
import { useApiService } from './services/apiService'

const DEMO_TEXT = "Senior Full Stack Engineer, 5+ years experience with React, Node.js, and AWS. Must have experience with microservices, Docker, and CI/CD pipelines. Strong problem-solving skills and ability to work in fast-paced environments. We're looking for someone who can lead technical initiatives and mentor junior developers."

function AppContent() {
  const [demoText, setDemoText] = useState('')
  const [results, setResults] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [initialInterviewType, setInitialInterviewType] = useState('full')
  const navigate = useNavigate()
  const { analyzeJobDescription } = useApiService()

  const handleAnalyze = async (description, interviewType) => {
    console.log('Interview type:', interviewType);
    setIsLoading(true)
    setError('')

    // Map UI interviewType to backend mode
    const modeMap = {
      full: 'full',
      technical: 'technical',
      nontechnical: 'nontechnical',
      hr: 'hr',
    }
    const mode = modeMap[interviewType] || 'full'
    const defaultCategory = interviewType === 'nontechnical' ? 'Non-Technical' : interviewType === 'hr' ? 'HR' : 'Technical'

    const result = await analyzeJobDescription(description, mode)

    if (result.success) {
      // Transform backend response to match UI expectations
      const { data } = result

      // Transform technical and HR questions into normalized question objects
      const buildQuestion = (qText, difficulty, category) => {
        if (typeof qText === 'string') {
          return {
            question: qText,
            difficulty,
            category,
            suggestedAnswer: '',
            tips: [],
          }
        }
        return {
          question: qText.question || '',
          difficulty: qText.difficulty || difficulty || 'medium',
          category: qText.category || category || 'Technical',
          suggestedAnswer: qText.suggestedAnswer || '',
          tips: qText.tips || [],
        }
      }

      const techQuestionsRaw = []
      if (Array.isArray(data.technical)) {
        techQuestionsRaw.push(...data.technical.map((q) => ({ item: q, difficulty: q?.difficulty || 'medium' })))
      } else if (data.technical && typeof data.technical === 'object') {
        Object.entries(data.technical).forEach(([level, entries]) => {
          if (Array.isArray(entries)) {
            entries.forEach((q) => techQuestionsRaw.push({ item: q, difficulty: level }))
          }
        })
      }

      const techQuestions = techQuestionsRaw.map(({ item, difficulty }) => {
        if (typeof item === 'string') {
          return buildQuestion(item, difficulty, defaultCategory)
        }
        return buildQuestion(item, difficulty, item.category || defaultCategory)
      })

      const hrQuestionsRaw = Array.isArray(data.hr) ? data.hr : [];
      const hrQuestions = hrQuestionsRaw.map((q) => buildQuestion(q, 'medium', 'HR'))

      const normalizedSkills = Array.isArray(data.skills)
        ? data.skills.map((skill) => {
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

      const transformedResults = {
        skills: normalizedSkills,
        questions: [...techQuestions, ...hrQuestions],
        createdAt: data.createdAt,
        fromCache: result.fromCache,
      }
      setResults(transformedResults)
      setIsLoading(false)

      setTimeout(() => {
        const resultsElement = document.getElementById('results-section')
        if (resultsElement) {
          resultsElement.scrollIntoView({ behavior: 'smooth' })
        }
      }, 120)
    } else {
      setError(result.error)
      setIsLoading(false)
    }
  }

  const goToAnalyze = (path, interviewType) => {
    setResults(null)
    setDemoText('')
    setError('')
    setInitialInterviewType(interviewType)
    navigate(path)
  }

  const handleStart = () => goToAnalyze('/analyze', 'full')
  const handleStartTechnical = () => goToAnalyze('/analyze/technical', 'technical')
  const handleStartNonTechnical = () => goToAnalyze('/analyze/nontechnical', 'nontechnical')
  const handleStartHR = () => goToAnalyze('/analyze/hr', 'hr')

  const handleTryDemo = () => {
    setDemoText(DEMO_TEXT)
    setResults(null)
    setError('')
    navigate('/analyze')
  }

  const handleBack = () => {
    setResults(null)
    setIsLoading(false)
    setError('')
    navigate('/')
  }

  const location = useLocation()
  const authRoutes = ['/login']

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navbar />

      <main className={authRoutes.includes(location.pathname) ? 'pt-0' : 'pt-24'}>
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                onStart={handleStart}
                onStartTechnical={handleStartTechnical}
                onStartNonTechnical={handleStartNonTechnical}
                onStartHR={handleStartHR}
                onTryDemo={handleTryDemo}
              />
            }
          />
          <Route
            path="/analyze"
            element={
              <ProtectedRoute>
                <AnalyzePage
                  onBack={handleBack}
                  onAnalyze={handleAnalyze}
                  isLoading={isLoading}
                  results={results}
                  demoText={demoText}
                  setDemoText={setDemoText}
                  error={error}
                  initialInterviewType={initialInterviewType}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/analyze/technical"
            element={
              <ProtectedRoute>
                <AnalyzePage
                  onBack={handleBack}
                  onAnalyze={handleAnalyze}
                  isLoading={isLoading}
                  results={results}
                  demoText={demoText}
                  setDemoText={setDemoText}
                  error={error}
                  initialInterviewType="technical"
                  pageVariant="technical"
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/analyze/nontechnical"
            element={
              <ProtectedRoute>
                <AnalyzePage
                  onBack={handleBack}
                  onAnalyze={handleAnalyze}
                  isLoading={isLoading}
                  results={results}
                  demoText={demoText}
                  setDemoText={setDemoText}
                  error={error}
                  initialInterviewType="nontechnical"
                  pageVariant="nontechnical"
                />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/mock-interview" element={<ProtectedRoute><MockInterviewPage /></ProtectedRoute>} />
          <Route
            path="/mock-interview"
            element={
              <ProtectedRoute>
                <MockInterviewPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/analyze/hr"
            element={
              <ProtectedRoute>
                <AnalyzePage
                  onBack={handleBack}
                  onAnalyze={handleAnalyze}
                  isLoading={isLoading}
                  results={results}
                  demoText={demoText}
                  setDemoText={setDemoText}
                  error={error}
                  initialInterviewType="hr"
                  pageVariant="hr"
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={
              <LandingPage
                onStart={handleStart}
                onTryDemo={handleTryDemo}
              />
            }
          />
        </Routes>
      </main>

      <footer className="mt-20 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center text-slate-400 text-sm mb-8">
            <p>PrepLens © 2026 • Powered by AI • Interview prep reimagined</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-slate-400 text-sm">
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <span>|</span>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link to="/mock-interview" className="hover:text-primary transition-colors">Mock</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function App() {
  const CLERK_PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ClerkProvider>
  )
}
