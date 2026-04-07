import { FullPrepIcon, TechIcon, HrIcon } from './Icons';

export default function InterviewTypeSelector({ selectedType, onTypeChange, variant = 'default' }) {
  const typeSets = {
    technical: [
      { id: 'full', label: 'Full Prep ⭐', icon: <FullPrepIcon /> },
      { id: 'technical', label: 'JD Specific', icon: <TechIcon /> },
      { id: 'hr', label: 'HR Round', icon: <HrIcon /> },
    ],
    nontechnical: [
      { id: 'full', label: 'Full Prep ⭐', icon: <FullPrepIcon /> },
      { id: 'technical', label: 'JD Specific', icon: <TechIcon /> },
      { id: 'hr', label: 'HR Round', icon: <HrIcon /> },
    ],
    hr: [
      { id: 'full', label: 'Full Prep ⭐', icon: <FullPrepIcon /> },
      { id: 'hr', label: 'HR Round', icon: <HrIcon /> },
    ],
    default: [
      { id: 'full', label: 'Full Prep ⭐', icon: <FullPrepIcon /> },
      { id: 'technical', label: 'JD Specific', icon: <TechIcon /> },
      { id: 'hr', label: 'HR Round', icon: <HrIcon /> },
    ],
  };

  const types = typeSets[variant] || typeSets.default;

  return (
    <div className="flex flex-col gap-3 mt-6 sm:flex-row">
      {types.map((type) => (
        <button
          key={type.id}
          type="button"
          onClick={() => onTypeChange(type.id)}
          className={`flex-1 min-w-[9rem] py-4 px-5 rounded-2xl border-2 font-medium transition-all duration-300 flex items-center justify-center gap-2 text-center ${
            selectedType === type.id
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent shadow-2xl shadow-purple-500/50 hover:scale-105 hover:shadow-purple-600/70'
              : 'bg-white/5 border-white/20 text-slate-300 hover:bg-white/10 hover:border-white/40 hover:text-white hover:shadow-lg hover:shadow-blue-500/20'
          }`}
        >
          {type.icon}
          {type.label}
        </button>
      ))}
    </div>
  );
}
