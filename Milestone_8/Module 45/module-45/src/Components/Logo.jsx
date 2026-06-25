import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2 font-sans select-none tracking-tight">
      {/* Icon Graphic */}
      <svg 
        className="w-8 h-8 text-emerald-400 fill-none stroke-current" 
        viewBox="0 0 24 24" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        {/* The Omni Circle */}
        <circle cx="12" cy="12" r="10" className="opacity-30 text-slate-400" />
        {/* The Flex Kinetic Swoop */}
        <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S4 12 12 12" />
        <circle cx="12" cy="12" r="2" className="fill-current text-emerald-400" />
      </svg>

      {/* Typography */}
      <span className="text-xl font-black text-slate-800 dark:text-white">
        Omni<span className="text-emerald-500">Flex</span>
      </span>
    </div>
  );
}