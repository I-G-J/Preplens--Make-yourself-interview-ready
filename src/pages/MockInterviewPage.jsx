import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Calendar, Clock, Video, CheckCircle2, User, Briefcase, Send } from 'lucide-react'
import ProtectedRoute from '../components/ProtectedRoute'

const availableSlots = [
  { id: 1, time: 'Tomorrow 10:00 AM', duration: '45 min', mentor: 'Senior Tech Lead', role: 'Frontend Engineer' },
  { id: 2, time: 'Tomorrow 2:00 PM', duration: '60 min', mentor: 'Engineering Manager', role: 'Full Stack Developer' },
  { id: 3, time: 'Friday 11:30 AM', duration: '45 min', mentor: 'Product Lead', role: 'Backend Engineer' },
  { id: 4, time: 'Next Monday 3:00 PM', duration: '60 min', mentor: 'Tech Architect', role: 'DevOps Engineer' },
]

export default function MockInterviewPage() {
  const navigate = useNavigate()
  const [selectedSlot, setSelectedSlot] = useState(null)
  const [formData, setFormData] = useState({
    role: '',
    experience: '',
    notes: '',
    date: '',
    time: '',
    duration: '45',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot)
    setFormData({
      ...formData,
      date: slot.time,
      duration: slot.duration === '45 min' ? '45' : '60',
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Mock API call
    setTimeout(() => {
      alert('Mock interview scheduled successfully! Check your email for confirmation.')
      setIsSubmitting(false)
      navigate('/')
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-12 px-6">
      <div className="relative max-w-4xl mx-auto space-y-12">
        {/* Coming Soon Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-3xl pointer-events-all" style={{zIndex: 40}}></div>
        
        {/* Coming Soon Ribbon */}
        <div 
          className="absolute pointer-events-none"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(-20deg)',
            zIndex: 50,
          }}
        >
          <div 
            className="font-bold text-white text-center whitespace-nowrap"
            style={{
              background: 'linear-gradient(90deg, #6366f1, #ec4899)',
              color: 'white',
              fontSize: '16px',
              letterSpacing: '1px',
              padding: '10px 40px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
              borderRadius: '4px',
            }}
          >
            🚧 Coming Soon
          </div>
        </div>

        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-primary/20 px-6 py-3 rounded-full mb-6">
            <Video className="w-6 h-6 text-primary" />
            <span className="font-semibold text-lg">Live Mock Interviews</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent mb-6">
            Schedule Your Mock Interview
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Get personalized feedback from industry experts. Practice in real interview conditions and receive actionable insights to improve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Quick Slots */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <CheckCircle2 className="w-8 h-8 text-green-400" />
              Available Slots
            </h2>
            <div className="space-y-3">
              {availableSlots.map((slot) => (
                <div
                  key={slot.id}
                  onClick={() => handleSlotSelect(slot)}
                  className={`group p-6 rounded-2xl border-2 border-white/10 hover:border-primary/50 hover:bg-white/5 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 ${
                    selectedSlot?.id === slot.id ? 'border-primary/70 bg-primary/10 ring-2 ring-primary/30' : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-lg group-hover:text-primary transition-colors">{slot.time}</p>
                      <p className="text-sm text-slate-400">{slot.duration}</p>
                      <p className="text-sm font-medium text-slate-300 mt-1">{slot.mentor}</p>
                      <p className="text-xs bg-slate-800/50 px-2 py-1 rounded-full inline-block mt-1">{slot.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Clock className="w-8 h-8 text-accent" />
              Schedule Interview
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6 bg-slate-900/50 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Interview Role/Position
                </label>
                <div className="flex gap-3">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="e.g. Frontend Engineer"
                      value={formData.role}
                      onChange={(e) => setFormData({...formData, role: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                  <div className="w-32">
                    <input
                      type="text"
                      placeholder="Years"
                      value={formData.experience}
                      onChange={(e) => setFormData({...formData, experience: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Special Notes/Preferences
                </label>
                <textarea
                  rows="3"
                  placeholder="e.g. Focus on React questions, behavioral examples, etc."
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-vertical"
                />
              </div>

              {selectedSlot && (
                <div className="p-4 bg-primary/10 border border-primary/20 rounded-xl">
                  <p className="font-medium text-primary flex items-center gap-2">
                    Selected: {selectedSlot.time} • {selectedSlot.duration} • {selectedSlot.mentor}
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || !formData.role}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold py-4 px-8 rounded-2xl flex items-center justify-center gap-3 shadow-2xl hover:shadow-primary/25 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Scheduling...
                  </>
                ) : (
                  <>
                    <Video className="w-5 h-5" />
                Schedule Mock Interview
                  </>
                )}
              </button>
            </form>
            
            <div className="pt-8 pt-8 border-t border-white/10">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-medium transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
