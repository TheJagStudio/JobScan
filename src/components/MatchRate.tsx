import React from 'react';

interface MatchRateProps {
  percentage: number;
}

export const MatchRate: React.FC<MatchRateProps> = ({ percentage }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">Match Rate</h2>
      <div className="relative w-48 h-48">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="8"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#22c55e"
            strokeWidth="8"
            strokeDasharray={`${percentage * 2.83} 283`}
            strokeDashoffset="-70.75"
            transform="rotate(-90 50 50)"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold">{percentage}%</span>
        </div>
      </div>
    </div>
  );
};
