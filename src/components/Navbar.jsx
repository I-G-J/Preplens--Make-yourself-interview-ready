import { Brain, User, LogOut, LogIn, UserPlus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useUser, useClerk } from '@clerk/react'

export default function Navbar() {
  const { user, isSignedIn } = useUser()
  const { signOut } = useClerk()

  const handleLogout = async () => {
    await signOut()
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-primary">
            <Brain size={24} className="text-white" />
          </div>
          <h1 className="text-xl font-bold gradient-text">PrepLens</h1>
        </div>

        <div className="flex items-center gap-2">
          {isSignedIn && user ? (
            <>
              <Link
                to="/analyze"
                className="glass-sm px-4 py-2 rounded-xl text-sm font-medium text-primary hover:text-secondary hover:bg-primary/10 transition-all duration-200 flex items-center gap-2 hidden md:flex"
              >
                <User size={18} />
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="glass-sm px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-slate-200 hover:bg-slate-800/50 transition-all duration-200 flex items-center gap-2"
              >
                <LogOut size={18} />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn text-sm px-4 py-2 bg-primary/90 text-white hover:bg-primary/100 border border-primary/50"
              >
                <LogIn size={16} className="inline mr-1" />
                Login
              </Link>
              <Link
                to="/about"
                className="glass-sm px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200 flex items-center gap-2"
              >
                About
              </Link>
              <Link
                to="/privacy"
                className="glass-sm px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200 flex items-center gap-2"
              >
                Privacy
              </Link>

            </>
          )}
        </div>
      </div>
    </nav>
  )
}
