import { Shield, Lock, User, Server, FileText, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_100%)] text-white pt-24 px-4">
      <div className="max-w-4xl mx-auto py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Shield className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-200 to-slate-300 bg-clip-text text-transparent mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Last Updated: January 1, 2026
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* 1. Introduction */}
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Lock className="w-8 h-8 text-primary opacity-80" />
              Introduction
            </h2>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                PrepLens ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
              <p className="text-slate-400">
                By using PrepLens, you consent to the practices described in this policy.
              </p>
            </div>
          </section>

          {/* 2. Information We Collect */}
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <User className="w-8 h-8 text-secondary opacity-80" />
              Information We Collect
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <h3 className="font-semibold text-slate-200 mb-4">Account Information</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Email address</li>
                  <li>• Name (optional)</li>
                  <li>• Clerk authentication data</li>
                </ul>
              </div>
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <h3 className="font-semibold text-slate-200 mb-4">Usage Data</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Job descriptions analyzed</li>
                  <li>• Interview types selected</li>
                  <li>• Analytics (non-identifiable)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. How We Use Your Information */}
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Server className="w-8 h-8 text-accent opacity-80" />
              How We Use Your Information
            </h2>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 space-y-6">
              <div>
                <h3 className="font-semibold text-slate-200 mb-3">Authentication & Security</h3>
                <p className="text-slate-300">We use your email and authentication data (via Clerk) to manage your account and ensure security.</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-200 mb-3">Service Improvement</h3>
                <p className="text-slate-300">Job descriptions and usage patterns help improve our AI models (anonymized).</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-200 mb-3">Communication</h3>
                <p className="text-slate-300">Email for account notifications and service updates only.</p>
              </div>
            </div>
          </section>

          {/* 4. Data Sharing */}
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <FileText className="w-8 h-8 text-emerald-400 opacity-80" />
              Data Sharing
            </h2>
            <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl p-8 border border-emerald-500/20">
              <p className="text-lg text-slate-200 mb-4">
                We <strong>never</strong> sell your personal data. We only share with:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 text-slate-300">
                <li>• <strong>Clerk:</strong> Authentication service (GDPR compliant)</li>
                <li>• <strong>AI Providers:</strong> Anonymized job data only</li>
                <li>• <strong>Legal:</strong> Required by law</li>
              </ul>
            </div>
          </section>

          {/* 5. Security */}
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary opacity-80" />
              Security
            </h2>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <p className="text-slate-300 leading-relaxed">
                We implement industry-standard security measures including encryption, access controls, and regular audits. 
                Your job descriptions are processed temporarily and not stored.
              </p>
            </div>
          </section>

          {/* 6. Contact */}
          <section className="text-center pt-16">
            <h2 className="text-3xl font-bold mb-8">Questions?</h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-slate-400">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6" />
                <span>privacy@preplens.ai</span>
              </div>
              
              <Link
                to="/"
                className="px-8 py-3 bg-slate-800/50 hover:bg-slate-700 text-slate-200 rounded-xl font-semibold transition-all border hover:border-slate-600"
              >
                ← Back to Home
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
