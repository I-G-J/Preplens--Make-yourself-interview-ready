import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignIn, useUser } from '@clerk/react';

export default function LoginPage() {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate('/analyze');
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(135deg,#0f172a,#1e293b)] px-4 py-12">
      <div className="w-full max-w-[420px]">
        <SignIn
          signUpUrl="/login"
          routing="path"
          path="/login"
          appearance={{
            baseTheme: "light",
            variables: {
              colorBackground: "#ffffff",
              colorText: "#0f172a",
              colorTextSecondary: "#6b7280",
              colorPlaceholderText: "#9ca3af",
              colorInputBackground: "#f8fafc",
              colorInputText: "#0f172a",
              colorInputBorder: "#d1d5db",
              colorBorder: "#e5e7eb",
              colorPrimary: "#2563eb",
              colorPrimaryText: "#ffffff",
            },
            elements: {
              rootBox: "w-full",
              card: "w-full rounded-[16px] border border-slate-200 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)]",
              formButtonPrimary: "w-full rounded-[12px] bg-slate-950 py-3 text-sm font-semibold text-white hover:bg-slate-800",
              formButtonSecondary: "text-slate-500",
              headerTitle: "text-slate-950 text-center",
              headerSubtitle: "text-slate-500 text-center",
              inputBox: "rounded-xl border border-slate-200 bg-slate-50",
              input: "text-slate-950 placeholder-slate-400",
              socialButton: "rounded-xl border border-slate-200 bg-white text-slate-950",
            },
          }}
        />
      </div>
    </div>
  );
}

